import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import DefaultLayout from 'views/DefaultLayout';
import Loading from 'components/Loading';
import 'typeface-roboto';
import './App.scss';

const Homepage = React.lazy(() => import('./views/Homepage'));
const Bills = React.lazy(() => import('./views/Bills'));
const Bill = React.lazy(() => import('./views/Bill'));
// const Category = React.lazy(() => import('./views/Category'));
const Members = React.lazy(() => import('./views/Members'));
const Member = React.lazy(() => import('./views/Member'));

const routes = [
  { path: '/', exact: true, name: '首頁', component: Homepage },
  { path: '/bills/:id', name: '議案', component: Bill },
  { path: '/bills', name: '議案', component: Bills },
  { path: '/members/:id', name: '議員', component: Member },
  { path: '/members', name: '議員', component: Members },

];

class App extends Component {
  render() {
    return (
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
                      <DefaultLayout name={route.name}>
                        <route.component {...props} />
                      </DefaultLayout>
                    )} />
                ) : (null);
              })}
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
