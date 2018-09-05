import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {HolidaysHelper} from "../services/holidays"
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class DatePickers extends React.Component {
    constructor(props) {
        super();
        const {classes, onChange} = props;
        this.classes = classes;
        this.onChange = onChange;
        this.state = {
            startDate: '',
            endDate: '',
            isValid: false,
            counter: 0
        }
    }

    isAfter = (dates) => {
        const {startDate, endDate} = dates;
        if (startDate && endDate) {
            const d1 = new Date(startDate);
            const d2 = new Date(endDate);
            return d1.getTime() === d2.getTime() || d1.getTime() < d2.getTime();
        } else {
            return false;
        }
    }

    getCount(startDate, endDate) {
        return new HolidaysHelper('fr').countHolidayInDateRange(startDate, endDate)

    }

    customChange(id, event) {
        const newDate = Object.assign({}, this.state, {[id]: event.target.value});
        const {startDate, endDate} = newDate;
        const idValue = event.target.value;
        this.getCount(startDate, endDate)
            .then(count => {
                const newState = {
                    [id]:idValue,
                    isValid: this.isAfter(newDate),
                    counter: count
                }
                this.setState(newState);
                this.onChange(newState);
            })

    }

    render() {
        return (
            <form className={this.classes.container} noValidate>
                <TextField
                    id="date"
                    label="start_date"
                    type="date"
                    defaultValue=""
                    className={this.classes.textField}
                    onChange={(event) => this.customChange('startDate', event)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="end_date"
                    type="date"
                    defaultValue=""
                    onChange={(event) => this.customChange('endDate', event)}
                    className={this.classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {
                    (this.state.isValid === false) && <p> It should end before it starts</p>
                }
                duree {this.state.counter}
            </form>
        );
    }

}

DatePickers.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(DatePickers);
//
// <TextField
//     id="date"
//     label="count"
//     type="number"
//     value={this.state.counter}
//     className={this.classes.textField}
//     onChange={(event) => this.customChange('counter', event)}
//     InputLabelProps={{
//         shrink: true,
//     }}
// />