import React, { Component } from 'react';
import classes from './Button.module.css';

class Button extends Component {

  render () {
    return (
      <div>
        <button className={classes.Button} onClick={this.props.click}> CLICK ME </button>
      </div>
    );
  }
}

export default Button;