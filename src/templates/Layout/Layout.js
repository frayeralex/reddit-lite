import React from 'react';
import PropTypes from 'prop-types';
import { TopBar } from 'containers';
import './Layout.scss';

const Layout = ({ children, header }) => {
  return (
    <div className="Layout">
      {header || <TopBar />}
      <main className="main-section">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  header: PropTypes.instanceOf(TopBar),
};

export default Layout;
