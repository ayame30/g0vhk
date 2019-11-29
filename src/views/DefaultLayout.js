import React from 'react';
// routes config

function DefaultLayout({ children, history }) {
  return (
    <div className="app">
      <div className="app-body">
        <main className="main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
