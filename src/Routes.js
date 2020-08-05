
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';

const Home = React.lazy(() => import('./pages/Home'));

const Routes = props => (
  <Suspense fallback={
    <div className='spinner'>
      <Spin size='large' />
    </div>
  }>
    <Switch>
      <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
    </Switch>
  </Suspense>
);

export default Routes;