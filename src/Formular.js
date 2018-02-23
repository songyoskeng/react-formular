import React, { Component } from 'react';
import FormularValue from './FormularValue'

class Formular extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 2
    }
  }
  _onPlus = () => {
    if(this.state.num < 12)
      this.setState({num:this.state.num+1})
  }
  _onMinus = () => {
    if(this.state.num > 2)
      this.setState({num:this.state.num-1})
  }
  render() {
    return (
      <div >
        <button onClick={this._onPlus}>+</button>
        {this.state.num}
        <button onClick={this._onMinus}>-</button>
        <hr/>
        <FormularValue num={this.state.num}/>
      </div>
    );
  }
}

export default Formular;
