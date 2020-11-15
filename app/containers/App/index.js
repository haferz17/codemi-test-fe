/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import SideNav from 'components/SideNav';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;
const SideNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <SideNavWrapper>
        <SideNav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </SideNavWrapper>
      <GlobalStyle />
    </AppWrapper>
  );
}
