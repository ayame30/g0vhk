import React from 'react';
import {
  AppHeader,
  AppNavbarBrand,
} from '@coreui/react';
// routes config
import logo from '../assets/img/brand/logo.png';

function DefaultLayout({ children, history }) {
  return (
    <div className="app">
      <AppHeader fixed className="bg-primary">
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 15, alt: 'CoreUI Logo' }}
          minimized={{ src: logo, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
      </AppHeader>
      <div className="app-body">
        <main className="main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
