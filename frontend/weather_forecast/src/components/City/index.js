import React from 'react';
import ReactDOM from 'react-dom';

class City extends React.Component {
    render() {
      return <h1>{this.props.name}</h1>;
    }
  }

export default City;