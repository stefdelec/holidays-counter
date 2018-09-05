import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class ReasonOfHolidays extends React.Component {
    constructor(props) {
        super();
        this.reasonTypes = [
            'conges payes',
            'rtt',
            'conges parental'
        ];
        this.state = Object.assign({value: this.reasonTypes[0]}, this.props)
    }


    handleChange = event => {
        this.props.onChange({reason: event.target.value});
        this.setState({value: event.target.value});
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Type de congés</FormLabel>
                    <RadioGroup
                        aria-label="holydayType"
                        name="holydayType"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        { this.reasonTypes
                            .map(reasontype =>
                                <FormControlLabel
                                    key={reasontype}
                                    value={reasontype}
                                    control={<Radio />}
                                    label={reasontype}/>
                            )}
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

ReasonOfHolidays.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

export default withStyles(styles)(ReasonOfHolidays);