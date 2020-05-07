import React from 'react';
import {connect} from 'react-redux'

function LifestylePage() {
  return <p>LifeStyle</p>;
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(LifestylePage;);
