import React, { Component } from 'react';
import classes from './ShowResult.module.css';

class ShowResult extends Component {
  render () {
    return (
      <h1 className={classes.Result}> You will : <br></br> {this.props.data}</h1>
    )
  }
}

export default ShowResult;