import React, {Component} from 'react';

class Numpad extends Component{

    render(){
        return(
            <body onKeyDownCapture={(key)=>this.props.onKey(key)}>
            <table>
                <tbody>
                <tr>
                    <th colSpan="5">{this.props.display}</th>
                </tr>
                <tr>
                    <td><button onClick={() => this.props.onDigitClick(7)}>7</button></td> <td><button onClick={() => this.props.onDigitClick(8)}>8</button></td><td><button onClick={() => this.props.onDigitClick(9)}>9</button></td><td><button onClick={() => this.props.onDigitClick('/')}>/</button></td><td rowSpan="2"><button onClick={()=> this.props.onReset()}>C</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => this.props.onDigitClick(4)}>4</button></td> <td><button onClick={() => this.props.onDigitClick(5)}>5</button></td><td><button onClick={() => this.props.onDigitClick(6)}>6</button></td><td><button onClick={() => this.props.onDigitClick('*')}>*</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => this.props.onDigitClick(1)}>1</button></td> <td><button onClick={() => this.props.onDigitClick(2)}>2</button></td><td><button onClick={() => this.props.onDigitClick(3)}>3</button></td><td><button onClick={() => this.props.onDigitClick('-')}>-</button></td><td rowSpan="2"><button onClick={()=> this.props.onDelete()}>&lArr;</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => this.props.onDigitClick(0)}>0</button></td> <td><button onClick={() => this.props.onDigitClick('.')}>.</button></td><td><button onClick={()=> this.props.onEquals()}>=</button></td><td><button onClick={() => this.props.onDigitClick('+')}>+</button></td>
                </tr>
                </tbody>

            </table>
            </body>
        )
    }
}

export default Numpad;