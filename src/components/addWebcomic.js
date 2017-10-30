import React, { Component } from 'react';

import '../styles/components/addWebcomic.css'

class AddWebcomic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      days: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      },
      url: '',
      iconUrl: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleDaysChange = this.handleDaysChange.bind(this);
    this.handleIconURLChange = this.handleIconURLChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleURLChange(event) {
    this.setState({url: event.target.value});
  }

  handleIconURLChange(event) {
    this.setState({iconUrl: event.target.value});
  }

  handleDaysChange(event) {
    let days = this.state.days;
    days[event.target.id] = event.target.value;
    this.setState({days: days});
  }

  onSubmit(event) {
    event.preventDefault();

    const days = this.state.days;
    const dayString = `${days.monday ? 'M':''}${days.tuesday ? 'T':''}${days.wednesday ? 'W':''}${days.thursday ? 'R':''}${days.friday ? 'F':''}${days.saturday ? 'S':''}${days.sunday ? 'U':''}`

    this.props.addWebcomic({
      name: this.state.name,
      days: dayString,
      url: this.state.url,
      iconUrl: this.state.iconUrl
    });

    this.setState({
      name: '',
      days: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      },
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
        <div className='new-webcomic-form__row days-row'>
          <label htmlFor="days">Days:</label>
          <span className='days-checkbox'><input type="checkbox" name="days" id="monday" onChange={self.handleDaysChange} checked={self.state.days.monday} /><label htmlFor="monday">Monday</label></span>
          <span className='days-checkbox'><input type="checkbox" name="days" id="tuesday" onChange={self.handleDaysChange} checked={self.state.days.tuesday} /><label htmlFor="tuesday">Tuesday</label></span>
          <span className='days-checkbox'><input type="checkbox" name="days" id="wednesday" onChange={self.handleDaysChange} checked={self.state.days.wednesday} /><label htmlFor="wednesday">Wednesday</label></span>
          <span className='days-checkbox'><input type="checkbox" name="days" id="thursday" onChange={self.handleDaysChange} checked={self.state.days.thursday} /><label htmlFor="thursday">Thursday</label></span>
          <span className='days-checkbox'><input type="checkbox" name="days" id="friday" onChange={self.handleDaysChange} checked={self.state.days.friday} /><label htmlFor="friday">Friday</label></span>
          <span className='days-checkbox'><input type="checkbox" name="days" id="saturday" onChange={self.handleDaysChange} checked={self.state.days.saturday} /><label htmlFor="saturday">Saturday</label></span>
          <span className='days-checkbox'><input type="checkbox" name="days" id="sunday" onChange={self.handleDaysChange} checked={self.state.days.sunday} /><label htmlFor="sunday">Sunday</label></span>
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
