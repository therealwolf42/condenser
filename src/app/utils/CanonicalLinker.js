import Apps from 'steemscript/apps.json';

function read_md_app(metadata) {
    return metadata &&
        metadata.app &&
        typeof metadata.app === 'string' &&
        metadata.app.split('/').length === 2
        ? metadata.app.split('/')[0]
        : null;
}

function read_md_canonical(metadata) {
    const url =
        metadata.canonical_url && typeof metadata.canonical_url === 'string'
            ? metadata.canonical_url
            : null;

    const saneUrl = new RegExp(/^https?:\/\//);
    return saneUrl.test(url) ? url : null;
}

function build_scheme(scheme, post) {
    // https://github.com/bonustrack/steemscript/blob/master/apps.json
    return scheme
        .split('{category}')
        .join(post.category)
        .split('{username}')
        .join(post.author)
        .split('{permlink}')
        .join(post.permlink);
}

function allowed_app(app) {
    // apps which follow (reciprocate) canonical URLs (as of 2019-10-15)
<<<<<<< HEAD
    const whitelist = ['steemit', 'esteem', 'steempeak', 'travelfeed'];
=======
    const whitelist = [
        'steemtown',
        'steemit',
        'esteem',
        'steempeak',
        'travelfeed',
    ];
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
    return whitelist.includes(app);
}

export function makeCanonicalLink(post, metadata) {
    let scheme;

    if (metadata) {
        const canonUrl = read_md_canonical(metadata);
        if (canonUrl) return canonUrl;

        const app = read_md_app(metadata);
        if (app && allowed_app(app)) {
            scheme = Apps[app] ? Apps[app].url_scheme : null;
        }
    }
<<<<<<< HEAD
    if (!scheme) scheme = Apps['steemit'].url_scheme;
=======
    if (!scheme) scheme = Apps['steemtown'].url_scheme;
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
    return build_scheme(scheme, post);
}
