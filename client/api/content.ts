import env from 'node:process';

//insecure add a backend
const client = require('contentful').createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  })

function getAllPress() {
    return client.getEntries({
        content_type: 'press'
    }).then((response: { items: any; }) => response.items)
}

function getPress(slug: string) {
    return client.getEntries({
        content_type: 'press',
        'fields.slug': slug
    }).then((response: { items: any; }) => response.items)
}

function getAllArticles() {
    return client.getEntries({
        content_type: 'writing'
    }).then((response: { items: any; }) => response.items)
}

function getArticle(slug: string) {
    return client.getEntries({
        content_type: 'writing',
        'fields.slug': slug
    }).then((response: { items: any; }) => response.items)
}

function getAllCreatives() {
    return client.getEntries({
        content_type: 'creative'
    }).then((response: { items: any; }) => response.items)
}

function getCreative(slug: string) {
    return client.getEntries({
        content_type: 'creative',
        'fields.slug': slug
    }).then((response: { items: any; }) => response.items)
}

function getAllMembers() {
    return client.getEntries({
        content_type: 'member'
    }).then((response: { items: any; }) => response.items)
}


export {getArticle, getAllArticles, getPress, getAllPress, getCreative, getAllCreatives, getAllMembers}