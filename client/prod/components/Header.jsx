import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  };

  handleTouchTap = (e) => {
    e.preventDefault();

    this.setState({
      open: true,
      anchorEl: e.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Account Info"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        >
          <Menu>
            <MenuItem primaryText="Trip History" />
            <MenuItem primaryText="User Profile" />
            <MenuItem primaryText="Logout" />
          </Menu>
        </Popover>
      </div>
      )
  }
}

export default Header;