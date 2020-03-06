// sometimes it's impossible to use html tags to style coin name, hence usage of _UPPERCASE modifier
<<<<<<< HEAD
export const APP_NAME = 'Steemit';
// sometimes APP_NAME is written in non-latin characters, but they are needed for technical purposes
// ie. "Голос" > "Golos"
export const APP_NAME_LATIN = 'Steemit';
export const APP_NAME_UPPERCASE = 'STEEMIT';
export const APP_ICON = 'steem';
// FIXME figure out best way to do this on both client and server from env
// vars. client should read $STM_Config, server should read config package.
export const APP_URL = 'https://steemit.com';
export const APP_DOMAIN = 'steemit.com';
=======
export const APP_NAME = 'SteemTown';
// sometimes APP_NAME is written in non-latin characters, but they are needed for technical purposes
// ie. "Голос" > "Golos"
export const APP_NAME_LATIN = 'SteemTown';
export const APP_NAME_UPPERCASE = 'STEEMTOWN';
export const APP_ICON = 'steem';
// FIXME figure out best way to do this on both client and server from env
// vars. client should read $STM_Config, server should read config package.
export const APP_URL = 'https://steem.town';
export const APP_DOMAIN = 'steem.town';
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
export const LIQUID_TOKEN = 'Steem';
// sometimes it's impossible to use html tags to style coin name, hence usage of _UPPERCASE modifier
export const LIQUID_TOKEN_UPPERCASE = 'STEEM';
export const VESTING_TOKEN = 'STEEM POWER';
export const INVEST_TOKEN_UPPERCASE = 'STEEM POWER';
export const INVEST_TOKEN_SHORT = 'SP';
export const DEBT_TOKEN = 'STEEM DOLLAR';
export const DEBT_TOKENS = 'STEEM DOLLARS';
export const CURRENCY_SIGN = '$';
export const WIKI_URL = ''; // https://wiki.golos.io/
<<<<<<< HEAD
export const LANDING_PAGE_URL = 'https://steem.io/';
=======
export const LANDING_PAGE_URL = 'https://steemapps.com/';
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
export const TERMS_OF_SERVICE_URL = 'https://' + APP_DOMAIN + '/tos.html';
export const PRIVACY_POLICY_URL = 'https://' + APP_DOMAIN + '/privacy.html';
export const WHITEPAPER_URL = 'https://steem.io/SteemWhitePaper.pdf';

// these are dealing with asset types, not displaying to client, rather sending data over websocket
export const LIQUID_TICKER = 'STEEM';
export const VEST_TICKER = 'VESTS';
export const DEBT_TICKER = 'SBD';
export const DEBT_TOKEN_SHORT = 'SBD';

// application settings
export const DEFAULT_LANGUAGE = 'en'; // used on application internationalization bootstrap
export const DEFAULT_CURRENCY = 'USD';
export const ALLOWED_CURRENCIES = ['USD'];

// meta info
<<<<<<< HEAD
export const TWITTER_HANDLE = '@steemit';
=======
export const TWITTER_HANDLE = '@steemtown';
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
export const SHARE_IMAGE =
    'https://' + APP_DOMAIN + '/images/steemit-share.png';
export const TWITTER_SHARE_IMAGE =
    'https://' + APP_DOMAIN + '/images/steemit-twshare.png';
export const SITE_DESCRIPTION =
<<<<<<< HEAD
    'Steemit is a social media platform where everyone gets paid for ' +
=======
    'SteemTown is a social media platform where everyone gets paid for ' +
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
    'creating and curating content. It leverages a robust digital points system, called Steem, that ' +
    'supports real value for digital rewards through market price discovery and liquidity';

// various
export const SUPPORT_EMAIL = 'support@' + APP_DOMAIN;
