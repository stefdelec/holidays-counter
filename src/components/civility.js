import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    menu: {
        width: 200,
    },
});


class Civility extends React.Component {

    constructor(props) {
        super();

        this.state = Object.assign({
            name: 'Cat in the Hat',
        }, props.civility);
    }


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
        this.props.onChange({[name]: event.target.value});
    };


    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
            </form>
        );
    }
}

Civility.propTypes = {
    classes: PropTypes.object,
    civility: PropTypes.object,
    onChange: PropTypes.func
};

export default withStyles(styles)(Civility);