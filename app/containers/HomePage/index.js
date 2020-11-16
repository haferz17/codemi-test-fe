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
  makeSelectActive
} from 'containers/App/selectors';
import { loadRepos, fetchActiveData } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';
import Card from '../../components/Card';
import BarChart from '../../components/BarChart';
import Table from '../../components/Table';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
  fetchData,
  active
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    // if (username && username.trim().length > 0) onSubmitForm();
    fetchData()
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };
  const tableData = active ? active.data.slice(0, 5) : []
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
            <div style={{ height: 442 }} />
          </Card>
          <Card
            style={{ width: '30%', backgroundColor: '#2979ff' }}
            footer="REAL-TIME REPORT"
          >
            <div className="active-users">
              <p className="page-summary-font title-active">
                Confirmed
              </p>
              <p className="page-summary-font value-active">{active && active.total}</p>
            </div>
            <div className="page-views">
              <p className="page-summary-font title-view">
                Confirmed per province
              </p>
              <BarChart data={active ? active.data : []} />
              <Table
                data={[
                  { uid: 0, province: 'Province', confirmed: 'Confirmed' },
                  ...tableData
                ]}
              />
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
  fetchData: PropTypes.func,
  active: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  active: makeSelectActive()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    fetchData: () => dispatch(fetchActiveData())
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
