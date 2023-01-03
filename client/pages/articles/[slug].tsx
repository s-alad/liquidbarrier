import {getArticle, getAllArticles } from '../../api/content'
import { /* documentToHtmlString,  */documentToReactComponents } from '@contentful/rich-text-react-renderer';

import s from './articleslug.module.css'
import Link from 'next/link';

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
            <div className={s.seperator}></div>
            <div className={s.otherarticles}>
                <div className={s.title} onClick={() => console.log(extra)}>Other Articles</div>
                <div>
                    {extra.map((article:any) => (
                        <Link href={article.fields.slug} key={article.sys.id} className={s.otherarticle} >
                            <div className={s.othertitle}>{article.fields.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}