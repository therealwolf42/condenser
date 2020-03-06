import React from 'react';
import tt from 'counterpart';
<<<<<<< HEAD
import { SIGNUP_URL } from 'shared/constants';

const SidebarNewUsers = () => (
    <div className="c-sidebar__module">
        <div className="c-sidebar__header">
            <h3 className="c-sidebar__h3">New to Steemit?</h3>
        </div>
        <div className="c-sidebar__content">
            <ul className="c-sidebar__list">
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href="/welcome">
                        Welcome Guide
                    </a>
                </li>
                {/*
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href="/faq.html">
                        FAQs
                    </a>
                </li>
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href="/@steemitblog">
                        {tt('g.read_offical_blog')}
                    </a>
                </li>
                */}
                <li className="c-sidebar__list-item">
                    <a
                        className="c-sidebar__link"
                        href="https://steem.com/SteemWhitePaper.pdf"
                    >
                        Whitepaper
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

export default SidebarNewUsers;
=======
import { connect } from 'react-redux';
import { SIGNUP_URL } from 'shared/constants';
import Icon from 'app/components/elements/Icon';
import { Link } from 'react-router';

const SidebarNewUsers = ({ walletUrl }) => {
    const makeLink = (i, ix, arr) => {
        // A link is internal if it begins with a slash
        const isExternal = !i.link.match(/^\//) || i.isExternal;
        const cn = ix === arr.length - 1 ? 'last' : null;
        if (isExternal) {
            return (
                <li key={ix} className={cn}>
                    <a href={i.link} target="_blank" rel="noopener noreferrer">
                        {i.label}&nbsp;<Icon name="extlink" />
                    </a>
                </li>
            );
        }
        if (i.onClick) {
            return (
                <li key={ix} className={cn}>
                    <a onClick={i.onClick}>{i.label}</a>
                </li>
            );
        }
        return (
            <li key={ix} className={cn}>
                <Link to={i.link}>{i.label}</Link>
            </li>
        );
    };

    const links = [
        {
            label: tt('navigation.what_is_steem'),
            link: 'https://steemonboarding.com',
        },
        {
            label: tt('navigation.app_center'),
            link: 'https://steemapps.com/',
        },
        {
            label: tt('navigation.blockexplorer'),
            link: 'https://steemd.com/',
        },
        {
            label: tt('navigation.steem_engine'),
            link: 'https://steemengine.com/',
        },
        {
            label: tt('navigation.vote_for_witnesses'),
            link: `${walletUrl}/~witnesses`,
        },
        {
            label: tt('navigation.steem_proposals'),
            link: `${walletUrl}/proposals`,
        },
    ];

    return (
        <div className="c-sidebar__module">
            <div className="c-sidebar__header">
                <h3 className="c-sidebar__h3">More Steem</h3>
            </div>
            <div className="c-sidebar__content">
                <ul className="c-sidebar__list">{links.map(makeLink)}</ul>
            </div>
        </div>
    );
};

export default connect((state, ownProps) => {
    const walletUrl = state.app.get('walletUrl');
    return {
        walletUrl,
        ...ownProps,
    };
})(SidebarNewUsers);
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
