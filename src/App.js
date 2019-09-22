import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import DefaultLayout from 'views/DefaultLayout';
import Loading from 'components/Loading';
import './App.scss';

const MemberList = React.lazy(() => import('./views/MemberList'));
const Member = React.lazy(() => import('./views/Member'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));

const routes = [
  { path: '/', exact: true, name: '主頁', component: Dashboard },
  { path: '/area/:area', exact: true, name: '選區議員名單', component: MemberList },
  { path: '/members/:id', name: '議員', component: Member },
];

class App extends Component {
  render() {
    return (
      <DefaultLayout>
        <HashRouter>
            <React.Suspense fallback={Loading}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null);
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </React.Suspense>
        </HashRouter>
      </DefaultLayout>
    );
  }
}

export default App;
