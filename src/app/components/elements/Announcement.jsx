import PropTypes from 'prop-types';
import React from 'react';

export const Announcement = ({ onClose }) => (
    <div className="annoucement-banner">
        <p className="announcement-banner__text">
<<<<<<< HEAD
            Communities are live!{' '}
            <a className="announcement-banner__link" href="https://steemit.com/steemit/@steemitblog/communities-have-arrived">Read more</a>.
=======
            Steem Town is live!{' '}
            <a
                className="announcement-banner__link"
                href="https://steem.town/steemtown/@therealwolf/steemtown"
            >
                Read more
            </a>.
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
        </p>
        <button className="close-button" type="button" onClick={onClose}>
            &times;
        </button>
    </div>
);

Announcement.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Announcement;
