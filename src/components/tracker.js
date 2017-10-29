import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addWebcomic, removeWebcomic } from '../actions/tracker';

import Webcomic from './webcomic';
import AddWebcomic from './addWebcomic';

class Tracker extends Component {
  render() {
    const self = this;

    let webcomics = this.props.webcomics.map((wc) => {
      return <Webcomic webcomic={wc} removeWebcomic={self.props.removeWebcomic} key={wc.name}/>
    });

    return <div>
      <div>
        {webcomics}
      </div>
      <AddWebcomic addWebcomic={this.props.addWebcomic}/>
    </div>
  }
};

function mapStateToProps(state) {
  return {webcomics: state.tracker.webcomics};
};

function mapDispatchToProps(dispatch) {
  return {
    addWebcomic: (name, days, url, iconUrl) => dispatch(addWebcomic(name, days, url, iconUrl)),
    removeWebcomic: (name) => dispatch(removeWebcomic(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);
