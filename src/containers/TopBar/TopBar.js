import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { subreddit } from '../../store';
import './TopBar.scss';

export class TopBar extends React.PureComponent {
  static propTypes = {
    setCurrent: PropTypes.func,
    title: PropTypes.string,
  };

  static defaultProps = {
    setCurrent: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      current: props.title,
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.setCurrent(this.state.current);
  };

  handleNamedInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="TopBar">
        <div className="container">
          <div className="title">{this.props.title}</div>
          <form className="search-container" onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              name="current"
              value={this.state.current}
              onChange={this.handleNamedInputChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: subreddit.selectors.getCurrent(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrent: subreddit.actions.setCurrent,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBar);
