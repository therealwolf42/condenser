import PropTypes from 'prop-types';
import React from 'react';

export const Announcement = ({ onClose }) => (
    <div className="annoucement-banner">
        <p className="announcement-banner__text">
            Steem Town is live!{' '}
            <a
                className="announcement-banner__link"
                href="https://steem.town/steemtown/@therealwolf/steemtown"
            >
                Read more
            </a>.
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
