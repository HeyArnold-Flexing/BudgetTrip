import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}
export default App;