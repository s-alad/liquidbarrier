import {getArticle, getAllArticles } from '../../api/content'
import { /* documentToHtmlString,  */documentToReactComponents } from '@contentful/rich-text-react-renderer';

import s from './articleslug.module.css'
import Link from 'next/link';
import OtherSlug from '../../components/otherslug/otherslug';

export async function getStaticPaths() {

    let data: Array<any> = await getAllArticles();
    return {
        paths: data.map((article: any) => ({
            params: { 
                slug: article.fields.slug
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({params}:any) {
    let data = await getArticle(params.slug);
    let extra = await getAllArticles();
    return {
        props: {
            article: data[0],
            extra: extra.filter((article:any) => article.fields.slug !== params.slug)
        },
        revalidate: 60
    }
}

export default function Article({article, extra}:any) {
    //console.log(article)
    return (
        <div className={s.article}>
            <h1 className={s.title}>{article['fields']['title']}</h1>
            <div className={s.author}>{article['fields']['author']}</div>
            <div className={s.date}>{article['fields']['date']}</div>
            <div className={s.content}>
               {documentToReactComponents(article['fields']['content'])}
            </div>
            <OtherSlug extra={extra}></OtherSlug>
        </div>
    )
}