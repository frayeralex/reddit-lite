import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { subreddit } from 'store';
import { DEFAULT_POST_LIMIT } from 'constants/api';
import './TopBar.scss';

export class TopBar extends React.PureComponent {
  static propTypes = {
    fetchPrevPage: PropTypes.func,
    fetchNextPage: PropTypes.func,
    setCurrent: PropTypes.func,
    postsLimit: PropTypes.number,
    title: PropTypes.string,
  };

  static defaultProps = {
    postsLimit: DEFAULT_POST_LIMIT,
    fetchNextPage: () => {},
    setCurrent: () => {},
    setPostsLimit: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      current: props.title,
    };
    this.postsLimitoptions = [25, 50, 75, 100];
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.setCurrent(this.state.current);
  };

  handleNamedInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handlePostLimitSelectorChange = ({ target: { value } }) => {
    this.props.setPostsLimit(Number(value));
  };

  handleNextBtnClick = () => {
    this.props.fetchNextPage();
  };

  handlePrevBtnClick = () => {
    this.props.fetchPrevPage();
  };

  render() {
    return (
      <div className="TopBar">
        <div className="container">
          <div className="title">{this.props.title}</div>
          <div className="controls-container">
            <form className="search-container" onSubmit={this.handleFormSubmit}>
              <input
                type="text"
                name="current"
                value={this.state.current}
                onChange={this.handleNamedInputChange}
              />
            </form>
            <div className="select-container">
              <select
                name="postsLimit"
                value={this.props.postsLimit}
                onChange={this.handlePostLimitSelectorChange}
              >
                {this.postsLimitoptions.map(value => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={this.handlePrevBtnClick}>Prev</button>
              <button onClick={this.handleNextBtnClick}>Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: subreddit.selectors.getCurrent(state),
  postsLimit: subreddit.selectors.getPostsLimit(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrent: subreddit.actions.setCurrent,
      setPostsLimit: subreddit.actions.setPostsLimit,
      fetchNextPage: subreddit.actions.fetchNextPage,
      fetchPrevPage: subreddit.actions.fetchPrevPage,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBar);
