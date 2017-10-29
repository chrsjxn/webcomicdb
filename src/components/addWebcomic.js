import React, { Component } from 'react';

import '../styles/components/addWebcomic.css'

class AddWebcomic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      days: '',
      url: '',
      iconUrl: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDaysChange = this.handleDaysChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleIconURLChange = this.handleIconURLChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleDaysChange(event) {
    this.setState({days: event.target.value});
  }

  handleURLChange(event) {
    this.setState({url: event.target.value});
  }

  handleIconURLChange(event) {
    this.setState({iconUrl: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.addWebcomic(this.state);

    this.setState({
      name: '',
      days: '',
      url: '',
      iconUrl: ''
    });
  }

  render() {
    const self = this;

    return <div className='new-webcomic'>
      <span className='new-webcomic-header'>Add a new webcomic</span>
      <form className='new-webcomic-form' onSubmit={self.onSubmit}>
        <div className='new-webcomic-form__row'>
          <label htmlFor="webcomicname">Name:</label>
          <input id="webcomicname" value={self.state.name} onChange={self.handleNameChange}></input>
        </div>
        <div className='new-webcomic-form__row'>
          <label htmlFor="webcomicdays">Days: (eg, 'TRS' for Tuesday, Thursday, Saturday)</label>
          <input id="webcomicdays" value={self.state.days} onChange={self.handleDaysChange}></input>
        </div>
        <div className='new-webcomic-form__row'>
          <label htmlFor="webcomicurl">URL:</label>
          <input id="webcomicurl" value={self.state.url} onChange={self.handleURLChange}></input>
        </div>
        <div className='new-webcomic-form__row'>
          <label htmlFor="webcomiciconurl">Icon URL:</label>
          <input id="webcomiciconurl" value={self.state.iconUrl} onChange={self.handleIconURLChange}></input>
        </div>
        <div className='new-webcomic-form__row'>
          <button type='Submit'>Submit</button>
        </div>
      </form>
    </div>
  }
};

export default AddWebcomic;
