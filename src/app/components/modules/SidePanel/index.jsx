import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tt from 'counterpart';
import * as appActions from 'app/redux/AppReducer';
import CloseButton from 'app/components/elements/CloseButton';
import Icon from 'app/components/elements/Icon';
import { Link } from 'react-router';

const SidePanel = ({
    alignment,
    visible,
    hideSidePanel,
    username,
    walletUrl,
    toggleNightmode,
}) => {
    if (process.env.BROWSER) {
        visible && document.addEventListener('click', hideSidePanel);
        !visible && document.removeEventListener('click', hideSidePanel);
    }

    const loggedIn =
        username === undefined
            ? 'show-for-small-only'
            : 'SidePanel__hide-signup';

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

    const sidePanelLinks = {
        internal: [
<<<<<<< HEAD
            {
                label: tt('navigation.welcome'),
                link: `/welcome`,
            },
            {
                label: tt('navigation.faq'),
                link: `/faq.html`,
            },
=======
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
            /*
            {
                label: tt('navigation.explore'),
                link: `/communities`,
            },
            */
            {
                label: tt('g.toggle_nightmode'),
                link: '/',
                onClick: toggleNightmode,
            },
        ],

        wallet: [
            {
<<<<<<< HEAD
                label: tt('navigation.stolen_account_recovery'),
                link: `${walletUrl}/recover_account_step_1`,
            },
            {
                label: tt('navigation.change_account_password'),
                link: `${walletUrl}/change_password`,
            },
            {
=======
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
                label: tt('navigation.vote_for_witnesses'),
                link: `${walletUrl}/~witnesses`,
            },
            {
                label: tt('navigation.steem_proposals'),
                link: `${walletUrl}/proposals`,
            },
<<<<<<< HEAD
=======
            {
                label: tt('navigation.stolen_account_recovery'),
                link: `${walletUrl}/recover_account_step_1`,
            },
            {
                label: tt('navigation.change_account_password'),
                link: `${walletUrl}/change_password`,
            },
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
        ],

        external: [
            /*
            {
                label: tt('navigation.chat'),
                link: 'https://steem.chat/home',
            },
            */
<<<<<<< HEAD
            {
                label: tt('navigation.advertise'),
                link: 'https://selfserve.steemit.com',
            },
            {
                label: tt('navigation.jobs'),
                link:
                    'https://recruiting.paylocity.com/recruiting/jobs/List/3288/Steemit-Inc',
            },
            /*
            {
                label: tt('navigation.app_center'),
                link: 'https://steemprojects.com/',
            },
            {
                label: tt('navigation.business_center'),
                link: 'https://steemeconomy.com/',
            },*/
=======
            /* {
                label: tt('navigation.advertise'),
                link: 'https://selfserve.steemit.com',
            }, */
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
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
        ],

        organizational: [
            {
                label: tt('navigation.api_docs'),
                link: 'https://developers.steem.io/',
            },
            {
                label: tt('navigation.bluepaper'),
                link: 'https://steem.io/steem-bluepaper.pdf',
            },
            {
                label: tt('navigation.smt_whitepaper'),
                link: 'https://smt.steem.io/',
            },
            {
                label: tt('navigation.whitepaper'),
                link: 'https://steem.com/SteemWhitePaper.pdf',
            },
        ],

<<<<<<< HEAD
        legal: [
=======
        /* legal: [
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
            {
                label: tt('navigation.privacy_policy'),
                link: '/privacy.html',
            },
            {
                label: tt('navigation.terms_of_service'),
                link: '/tos.html',
            },
<<<<<<< HEAD
        ],
=======
        ], */
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b

        extras: [
            {
                label: tt('g.sign_in'),
                link: '/login.html',
            },
            {
                label: tt('g.sign_up'),
<<<<<<< HEAD
                link: 'https://signup.steemit.com',
=======
                link: 'https://www.blocktrades.us/create-steem-account',
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
            },
        ],
    };

    return (
        <div className="SidePanel">
            <div className={(visible ? 'visible ' : '') + alignment}>
                <CloseButton onClick={hideSidePanel} />
<<<<<<< HEAD
                <ul className={`vertical menu ${loggedIn}`}>
                    {sidePanelLinks.extras.map(makeLink)}
                </ul>
=======
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
                <ul className="vertical menu">
                    {sidePanelLinks.internal.map(makeLink)}
                </ul>
                <ul className="vertical menu">
<<<<<<< HEAD
                    {sidePanelLinks.wallet.map(makeLink)}
                </ul>
                <ul className="vertical menu">
                    {sidePanelLinks.external.map(makeLink)}
                </ul>
                <ul className="vertical menu">
                    {sidePanelLinks.organizational.map(makeLink)}
                </ul>
                <ul className="vertical menu">
                    {sidePanelLinks.legal.map(makeLink)}
=======
                    {sidePanelLinks.external.map(makeLink)}
                </ul>
                <ul className={`vertical menu ${loggedIn}`}>
                    {sidePanelLinks.extras.map(makeLink)}
                </ul>
                <ul className="vertical menu">
                    {sidePanelLinks.wallet.map(makeLink)}
                </ul>
                <ul className="vertical menu">
                    {sidePanelLinks.organizational.map(makeLink)}
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
                </ul>
            </div>
        </div>
    );
};

SidePanel.propTypes = {
    alignment: PropTypes.oneOf(['left', 'right']).isRequired,
    visible: PropTypes.bool.isRequired,
    hideSidePanel: PropTypes.func.isRequired,
    username: PropTypes.string,
    toggleNightmode: PropTypes.func.isRequired,
};

SidePanel.defaultProps = {
    username: undefined,
};

export default connect(
    (state, ownProps) => {
        const walletUrl = state.app.get('walletUrl');
        return {
            walletUrl,
            ...ownProps,
        };
    },
    dispatch => ({
        toggleNightmode: e => {
            if (e) e.preventDefault();
            dispatch(appActions.toggleNightmode());
        },
    })
)(SidePanel);
