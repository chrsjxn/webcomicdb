import React, { Component } from 'react';

import '../styles/components/webcomic.css';

function today() {
  var d = new Date();
  var weekday = ["S", "M", "T", "W", "R", "F", "S"];

  return weekday[d.getDay()];
}

class Webcomic extends Component {
  render() {
    const wc = this.props.webcomic;
    const updatedToday = (wc.days.indexOf(today()) > -1);

    const className = `webcomic ${updatedToday ? "" : "not-updated-today"} ${wc.iconUrl ? "" : "no-icon"}`;

    return <div className={className}>
      <span className='webcomic-link'>
        <a href={wc.url} target="_blank"><img src={wc.iconUrl} alt={wc.name} /></a>
      </span>
      <span className='webcomic-name'>{wc.name}</span>
      <span className='webcomic-days'>Updates: {wc.days}</span>
      <span onClick={() => this.props.removeWebcomic(wc.name)} className='webcomic-delete'>[delete]</span>
    </div>
  }
}

export default Webcomic;
