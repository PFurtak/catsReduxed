import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { eat, nap, play, name } from '../redux/actions';

const Activity = ({ activity, eat, nap, play, name }) => {
  const onChange = (e) => name({ [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    name();
  };

  return (
    <Fragment>
      <h1>What is the cat doing?</h1>
      <form onSubmit={onSubmit}>
        <br />
        <input
          type='text'
          name='name'
          placeholder="Your cat's name."
          value={name}
          onChange={onChange}
        />
        <button type='submit'>Submit</button>
      </form>
      <br />
      <p>
        The cat {name} is {activity}
      </p>
      <br />
      <button onClick={() => eat()}> Eating</button>{' '}
      <button onClick={() => nap()}> Napping</button>{' '}
      <button onClick={() => play()}> Playing</button>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { activity } = state;
  return activity;
};
export default connect(mapStateToProps, { eat, nap, play, name })(Activity);
