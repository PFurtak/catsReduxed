import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { eat, nap, play } from '../redux/actions';

const Activity = ({ activity, eat, nap, play }) => {
  return (
    <Fragment>
      <h1>What is the cat doing?</h1>
      <br />
      <p>The cat is {activity}</p>
      <br />
      <button onClick={() => eat()}> Eating</button>{' '}
      <button onClick={() => nap()}> Napping</button>{' '}
      <button onClick={() => play()}> Playing</button>{' '}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { activity } = state;
  return activity;
};
export default connect(mapStateToProps, { eat, nap, play })(Activity);
