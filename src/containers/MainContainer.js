import React, { Component } from 'react';
import classes from './MainContainer.module.css';
import ShowResult from '../Components/ShowResult';

class Container extends Component {
  render() {
    return (
      <div className={classes.Container} >
        <ShowResult data={this.props.data} result={this.props.data} />
      </div>
    );
  }
}

export default Container