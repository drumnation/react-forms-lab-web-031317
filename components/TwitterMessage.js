import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { value: '' };
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={ this.state.value } onChange={this.handleInputChange.bind(this)}/>
        <p>Characters Remaining: { this.props.maxChars - this.state.value.length }</p>
      </div>
    );
  }
}
