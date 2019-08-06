import React from 'react';
import PropTypes from 'prop-types';
import m from 'moment';
import './Post.scss';

const Post = ({ data, moment }) => {
  return (
    <li className="Post">
      <header className="header-container">
        <div className="author">
          Posted by{' '}
          <a
            href={`https://www.reddit.com/user/${data.author}`}
            className="external-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            u/{data.author} <i className="fa fa-external-link" />
          </a>{' '}
        </div>
        <span className="created-time">
          {moment(Number(`${data.created_utc}000`), 'x').fromNow()}
        </span>
      </header>
      <div className="middle-container">
        {data.thumbnail && data.thumbnail.includes('http') && (
          <div className="thumbnail-container">
            <img src={data.thumbnail} alt="" />
          </div>
        )}
        <div className="title">
          {data.title}{' '}
          <a
            href={data.url}
            className="external-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-external-link" />
          </a>
        </div>
      </div>
      <footer className="footer-container">
        <span className="comments-link">
          <a
            href={`https://www.reddit.com${data.permalink}`}
            className="external-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.num_comments} <i className="fa fa-comments" />
          </a>
        </span>
      </footer>
    </li>
  );
};

Post.defaultProps = {
  moment: m,
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
  moment: PropTypes.func,
};

export default React.memo(Post);
