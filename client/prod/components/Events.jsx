import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 10,
};

export default class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={props.event.image_url} alt={props.event.name} />
        <p>Event: {props.event.name}</p>
        <p>Category: {props.event.category}</p>
        <p>Description: {props.event.description}</p>
        <p>Start time: {props.event.time_start}</p>
        <p>End time: {props.event.time_end}</p>
        <RaisedButton label="Add Event" primary={true} style={style} />
      </div>
    );
  }
}

//Possible data:
/*
name
category
description
image_url
location > address1
           address2
           add3
           city
time_start
time_end
*/
