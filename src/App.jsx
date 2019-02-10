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

    const newItem = {
      name: event.target[0].value,
      twitterLink: event.target[1].value,
      image: event.target[2].value,
      description: event.target[3].value,
    };

    this.setState(prevState => ({
      items: [
        ...prevState.items,
        newItem,
      ],
    }));

    event.target.reset();
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
