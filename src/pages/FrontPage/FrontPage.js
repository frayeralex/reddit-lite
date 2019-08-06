import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Post } from 'components';
import { Layout } from 'templates';
import { subreddit } from 'store';
import './FrontPage.scss';

export class FrontPage extends React.Component {
  static propTypes = {
    fetchPosts: PropTypes.func,
    currentSubreddit: PropTypes.string,
    beforePostId: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    fetchPosts: () => {},
    posts: [],
  };

  componentDidMount() {
    this.props.fetchPosts();
    this.postIntervalId = window.setInterval(this.intervalHandler, 60 * 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.postIntervalId);
  }

  intervalHandler = () => {
    this.props.fetchPosts();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentSubreddit !== this.props.currentSubreddit) {
      this.props.fetchPosts();
    }
  }

  renderPostList() {
    if (this.props.posts.length === 0) {
      return <div>No data</div>;
    }
    return (
      <ul className="post-list">
        {this.props.posts.map(({ data }) => {
          return <Post key={data.name} data={data} />;
        })}
      </ul>
    );
  }

  render() {
    return (
      <Layout>
        <div className="FrontPage">{this.renderPostList()}</div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  beforePostId: subreddit.selectors.beforePostId(state),
  currentSubreddit: subreddit.selectors.getCurrent(state),
  posts: subreddit.selectors.getPosts(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPosts: subreddit.actions.fetchPosts,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FrontPage);
