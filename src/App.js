import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import DefaultLayout from 'views/DefaultLayout';
import Loading from 'components/Loading';
import './App.scss';

const Homepage = React.lazy(() => import('./views/Homepage'));
const Bill = React.lazy(() => import('./views/Bill'));

const routes = [
  { path: '/', exact: true, name: '主頁', component: Homepage },
  { path: '/bills', name: '議員', component: Bill },

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
