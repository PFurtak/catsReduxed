import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import UpdateName from './UpdateName';
import { setActivity } from '../redux/actions';

const Activity = ({ activity, name, setActivity }) => {
  return (
    <Fragment>
      <h1>What is the cat doing?</h1>
      <UpdateName />
      <br />
      <p>
        {name + ','} is {activity}
      </p>
      <br />
      <button onClick={() => setActivity('eating')}> Eating</button>{' '}
      <button onClick={() => setActivity('napping')}> Napping</button>{' '}
      <button onClick={() => setActivity('playing')}> Playing</button>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { activity } = state;
  return activity;
};
export default connect(mapStateToProps, { setActivity })(Activity);
