import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RangePicker from './components/range-picker.component'
import RadioButtonsGroup from './components/holiday-reason';
import Civility from './components/civility'

class App extends Component {
    constructor(props) {
        super();
        this.myPassingObj = {
            name: '',
            startDate: '',
            endDate: '',
            reason: '',
            counter: 0
        }
        this.state = {
            counter: 0
        }
    }

    onChange(id, event) {
        Object.assign(this.myPassingObj, event);
        console.log(this.myPassingObj)
    }

    getPdf = () => {
        console.log(this.myPassingObj)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    <Civility civility={{name: 'me'}} onChange={(event) => this.onChange('civility', event)}></Civility>
                    <RangePicker onChange={(event) => this.onChange('dates', event)}
                                 classes={{textField: "", container: ""}}/>
                    <RadioButtonsGroup onChange={(event) => this.onChange('reason', event)}></RadioButtonsGroup>

                </div>
                <div>
                    <button onClick={this.getPdf}> Get PDF</button>
                </div>
            </div>
        );
    }
}

export default App;
