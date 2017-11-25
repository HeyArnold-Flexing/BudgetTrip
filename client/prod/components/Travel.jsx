import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={props.travel.place.picture} alt={props.travel.place.name} />
        <h3>{props.travel.place.name}</h3>
        <p>{props.travel.place.perex}</p>
        <p>{props.travel.place.admission}</p>
        <p>{props.travel.place.star_rating}</p>
        <p>{props.travel.place.opening_hours}</p>
        <RaisedButton label="Add" primary={true} />
      </div>
    );
  }
}

export default Travel;
