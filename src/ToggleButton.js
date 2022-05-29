import React from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // this.handleClick = this.handleClick.bind(this); //binds function
  }
  handleClick = (value, e) => {
    console.log(value);
    this.setState((state) => {
      return { isToggleOn: !state.isToggleOn };
    });
  };
  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick('some value', e)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
