import { makeCanonicalLink } from './CanonicalLinker';

describe('makeCanonicalLink', () => {
    const post_data = {
        author: 'test',
        permlink: 'test-post',
        category: 'testing',
        link: '/testing/@test/test-post',
    };
    const test_cases = [
        [
            'handles posts without app',
            { ...post_data, json_metadata: {} },
<<<<<<< HEAD
            'https://steemit.com/testing/@test/test-post',
=======
            'https://steem.town/testing/@test/test-post',
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
        ],
        [
            'handles empty strings as app',
            { ...post_data, json_metadata: { app: '' } },
<<<<<<< HEAD
            'https://steemit.com/testing/@test/test-post',
=======
            'https://steem.town/testing/@test/test-post',
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
        ],
        [
            "handles apps that don't exist",
            { ...post_data, json_metadata: { app: 'fakeapp/1.2.3' } },
<<<<<<< HEAD
            'https://steemit.com/testing/@test/test-post',
=======
            'https://steem.town/testing/@test/test-post',
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
        ],
        [
            "handles app that don't exist without version",
            { ...post_data, json_metadata: { app: 'fakeapp' } },
<<<<<<< HEAD
            'https://steemit.com/testing/@test/test-post',
=======
            'https://steem.town/testing/@test/test-post',
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
        ],
        [
            'handles apps that do exist',
            { ...post_data, json_metadata: { app: 'steempeak/1.1.1' } },
            'https://steempeak.com/testing/@test/test-post',
        ],
        [
            'handles posts from steemit',
            { ...post_data, json_metadata: { app: 'steemit/0.1' } },
<<<<<<< HEAD
            'https://steemit.com/testing/@test/test-post',
=======
            'https://steem.town/testing/@test/test-post',
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
        ],
        [
            'handles badly formatted app strings',
            { ...post_data, json_metadata: { app: 'fakeapp/0.0.1/a////' } },
<<<<<<< HEAD
            'https://steemit.com/testing/@test/test-post',
=======
            'https://steem.town/testing/@test/test-post',
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
        ],
        [
            'handles objects as apps',
            { ...post_data, json_metadata: { app: { this_is: 'an objct' } } },
<<<<<<< HEAD
            'https://steemit.com/testing/@test/test-post',
=======
            'https://steem.town/testing/@test/test-post',
>>>>>>> 1bc71ede40cbd3af6dd3c52b00dfd57e7324901b
        ],
    ];
    test_cases.forEach(v => {
        it(v[0], () => {
            expect(makeCanonicalLink(v[1], v[1].json_metadata)).toBe(v[2]);
        });
    });
});
