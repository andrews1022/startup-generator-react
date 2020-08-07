import React, { Component } from 'react';

class Generate extends Component {
  constructor(props) {
    super(props);

    this.generateMessage = this.generateMessage.bind(this);
    this.outputMessage = this.outputMessage.bind(this);

    this.state = {
      message: '',
    };
  }

  generateMessage() {
    const randomCompanyIndex = Math.floor(Math.random() * this.props.companies.length);
    const randomCompany = this.props.companies[randomCompanyIndex];

    const randomUserIndex = Math.floor(Math.random() * this.props.users.length);
    const randomUser = this.props.users[randomUserIndex];

    const message = `Well, it's like ${randomCompany}, but for ${randomUser}!`;
    return message;
  }

  outputMessage() {
    this.setState(() => {
      return {
        message: this.generateMessage(),
      };
    });
  }

  render() {
    return (
      <main className='main'>
        <div className='generate'>
          <p className='generate__text'>"Hey! I got this great idea for a start-up!"</p>
          <p className='generate__text'>"Yeah? What's it about?"</p>
          <button className='generate__btn' onClick={this.outputMessage}>
            Generate
          </button>
          <p className='generate__text'>{this.state.message} &nbsp; </p>
        </div>
      </main>
    );
  }
}

export default Generate;
