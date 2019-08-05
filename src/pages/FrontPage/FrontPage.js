import React from 'react';
import { Layout } from 'templates';
import './FrontPage.scss';

export class FrontPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="FrontPage">FrontPage</div>
      </Layout>
    );
  }
}

export default FrontPage;
