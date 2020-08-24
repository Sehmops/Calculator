import React, {Component} from 'react';
import {evaluate} from 'mathjs';
import Numpad from'./Numpad';
import './css/style.css';

class Application extends Component{

    constructor(props){
        super(props);

        this.state = {
            operation: []
        }
    }
    operandClicked = (operand) => {
        let temp = this.state.operation;
        temp.push(operand)
        this.setState({operation: temp})
    }
    calculate() {
        let result = '';
        this.state.operation.forEach(function(value){
            result = result+value
        })
        this.setState( {
            operation: [evaluate(result)]
        })
    }
    doReset = () => {
        this.setState({
            operation: []
        })
    }
    doDelete = ()=>{
        let temp = this.state.operation;
        temp.pop();
        this.setState({operation: temp})
    }
    keyEval = (key) => {
        if(key.key === '1'){
            this.operandClicked(1);
        }
        if(key.key === '2'){
            this.operandClicked(2);
        }
        if(key.key === '3'){
            this.operandClicked(3);
        }
        if(key.key === '4'){
            this.operandClicked(4);
        }
        if(key.key === '5'){
            this.operandClicked(5);
        }
        if(key.key === '6'){
            this.operandClicked(6);
        }
        if(key.key === '7'){
            this.operandClicked(7);
        }
        if(key.key === '8'){
            this.operandClicked(8);
        }
        if(key.key === '9'){
            this.operandClicked(9);
        }
        if(key.key === '0'){
            this.operandClicked(0);
        }
        if(key.key === '+'){
            this.operandClicked('+');
        }
        if(key.key === '-'){
            this.operandClicked('-');
        }
        if(key.key === '*'){
            this.operandClicked('*');
        }
        if(key.key === '/'){
            this.operandClicked('/');
        }
        if(key.key === 'Backspace'){
            this.doDelete();
        }
        /*if(key.key === 'Enter'){
            this.calculate()
        }*/
    }
    render(){
        return (
            <div>
            <Numpad
                onDigitClick={(operand) => this.operandClicked(operand)}
                onEquals={() => this.calculate()}
                display={this.state.operation}
                onReset={this.doReset}
                onDelete={this.doDelete}
                onKey={(key)=> this.keyEval(key)}
            />
            
            </div>
        )
    }
    
}

export default Application;