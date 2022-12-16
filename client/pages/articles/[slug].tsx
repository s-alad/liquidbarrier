import {getArticle, getAllArticles } from '../../api/content'
import { /* documentToHtmlString,  */documentToReactComponents } from '@contentful/rich-text-react-renderer';

import s from './articleslug.module.css'

export async function getStaticPaths() {

    let data = await getAllArticles();

    return {
        paths: data.map((article: any) => ({
            params: { slug: article.fields.slug }
        })),
        fallback: false
    }
}

export async function getStaticProps({params}:any) {
    let data = await getArticle(params.slug);

    return {
        props: {
            article: data[0]
        },
        revalidate: 60
    }
}

export default function Article({article}:any) {
    console.log(article)
    return (
        <div className={s.article}>
            <h1 className={s.title}>{article['fields']['title']}</h1>
            <div className={s.author}>{article['fields']['author']}</div>
            <div className={s.date}>{article['fields']['date']}</div>
            <div className={s.content}>
               {documentToReactComponents(article['fields']['content'])}
            </div>
        </div>
    )
}