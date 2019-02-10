import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import initialState from './constants/initialState';
import Form from './components/Form/Form';
import './index.css';

class App extends React.Component {
  state = {
    items: [
      ...initialState,
    ],
  };

  handleAddItem = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);
  }

  render() {
    return (
      <div>
        <ListWrapper
          items={this.state.items} />
        <Form
          submitFn={this.handleAddItem} />
      </div>
    );
  }
}

export default App;
