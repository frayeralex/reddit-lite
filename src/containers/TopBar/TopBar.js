import React from 'react';
import PropTypes from 'prop-types';
import './TopBar.scss';

export class TopBar extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div className="TopBar">
        <div className="container">
          <div className="title">{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default TopBar;
