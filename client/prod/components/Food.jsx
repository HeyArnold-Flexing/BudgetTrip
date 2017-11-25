import React from 'react';

export default class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={props.restaurant.restaurant.thumb} alt={props.restaurant.restaurant.name} />
        <p>Address: {props.restaurant.restaurant.location.address}</p>
        <p>Restaurant: {props.restaurant.restaurant.name}</p>
        <p>Cuisine: {props.restaurant.restaurant.cuisines}</p>
        <p>Average Cost (For two): {props.restaurant.restaurant.average_cost_for_two}</p>
      </div>
    );
  }
}

/*
name;
location > address;
cuisines: 'Greek, Mediteranian';
average_cost_fo f;
r_two
*/
