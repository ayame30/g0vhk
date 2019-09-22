import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Loading from 'components/Loading';
import styles from './Tabs.module.scss';

const Background = React.lazy(() => import('./Background'));
const Votes = React.lazy(() => import('./Votes'));
const Speech = React.lazy(() => import('./Speech'));

function Tabs({ history, match, id, member }) {
  const { url } = match;
  const isActive = url => !!(url === history.location.pathname);
  return (
    <>
      <div className="bg-white">
        <Nav tabs className={styles.navTab}>
          <NavItem>
            <Link to={url}>
              <NavLink
                exact
                to={url}
                active={isActive(url)}
              >
                背景
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/votes`}>
              <NavLink
                exact
                to={`${url}/votes`}
                active={isActive(`${url}/votes`)}
              >
                投票
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/speech`}>
              <NavLink
                exact
                to={`${url}/speech`}
                active={isActive(`${url}/speech`)}
              >
                發言
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/questions`}>
              <NavLink
                exact
                to={`${url}/questions`}
                active={isActive(`${url}/questions`)}
              >
                質詢
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/news`}>
              <NavLink
                exact
                to={`${url}/news`}
                active={isActive(`${url}/news`)}
              >
                新聞
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
      </div>
      <div className={styles.tabContent}>
        <React.Suspense fallback={Loading}>
          <Switch>
            <Route exact path={url} name="背景" render={() => <Background member={member} />} />
            <Route exact path={`${url}/votes`} name="投票" render={() => <Votes member={member} />} />
            <Route exact path={`${url}/speech`} name="發言" render={() => <Speech member={member} />} />
          </Switch>
        </React.Suspense>
      </div>
    </>
  );
}

export default withRouter(Tabs);
