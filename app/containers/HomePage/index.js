/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';
import Card from '../../components/Card';
import BarChart from '../../components/BarChart';

const key = 'home';
const barData = [
  { id: 1, percent: '50%' },
  { id: 2, percent: '53%' },
  { id: 3, percent: '55%' },
  { id: 4, percent: '53%' },
  { id: 5, percent: '60%' },
  { id: 6, percent: '70%' },
  { id: 7, percent: '80%' },
  { id: 8, percent: '75%' },
  { id: 9, percent: '77%' },
  { id: 10, percent: '57%' },
  { id: 11, percent: '65%' },
  { id: 12, percent: '40%' },
  { id: 13, percent: '45%' },
  { id: 14, percent: '90%' },
  { id: 15, percent: '35%' },
  { id: 16, percent: '47%' },
  { id: 17, percent: '73%' },
  { id: 18, percent: '50%' },
  { id: 19, percent: '63%' },
  { id: 20, percent: '37%' },
  { id: 21, percent: '40%' },
  { id: 22, percent: '53%' },
  { id: 23, percent: '50%' },
  { id: 24, percent: '87%' },
  { id: 25, percent: '80%' },
  { id: 26, percent: '85%' },
  { id: 27, percent: '77%' },
  { id: 28, percent: '73%' },
  { id: 29, percent: '70%' },
  { id: 30, percent: '100%' },
]

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Admin Dashboard</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div className="content-container">
        <div className="content">
          <Card style={{ width: '70%' }} title="Codemi Home">
            <div style={{ height: 450 }} />
          </Card>
          <Card style={{ width: '30%', backgroundColor: '#2979ff' }}>
            <div className="active-users">
              <p className="page-summary-font title-active">Active Users right now</p>
              <p className="page-summary-font value-active">479</p>
            </div>
            <div className="page-views">
              <p className="page-summary-font title-view">Page views per minute</p>
              <BarChart data={barData} />
            </div>
          </Card>
          <Card
            style={{ width: '50%' }}
            title="What courses do your users visit?"
          >
            <div style={{ height: 450 }} />
          </Card>
          <Card style={{ width: '50%' }} title="Who is your most active user?">
            <div style={{ height: 450 }} />
          </Card>
          <Card
            style={{ width: '100%' }}
            title="How's your social learning activity?"
          >
            <div style={{ height: 450 }} />
          </Card>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
