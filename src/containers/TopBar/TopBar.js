import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { subreddit } from '../../store';
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

const mapStateToProps = state => ({
  title: subreddit.selectors.getCurrent(state),
});

export default connect(mapStateToProps)(TopBar);
