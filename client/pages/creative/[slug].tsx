import {getCreative, getAllCreatives } from '../../api/content'
import { /* documentToHtmlString,  */documentToReactComponents } from '@contentful/rich-text-react-renderer';

import s from './creativeslug.module.css'

export async function getStaticPaths() {

    let data = await getAllCreatives();

    return {
        paths: data.map((piece: any) => ({
            params: { slug: piece.fields.slug }
        })),
        fallback: false
    }
}

export async function getStaticProps({params}:any) {
    let data = await getCreative(params.slug);

    return {
        props: {
            piece: data[0]
        },
        revalidate: 60
    }
}

export default function Creative({piece}:any) {
    console.log(piece)
    return (
        <div className={s.creative}>
            <h1 className={s.title}>{piece['fields']['title']}</h1>
            <div className={s.author}>{piece['fields']['author']}</div>
            <div className={s.date}>{piece['fields']['date']}</div>
            <div className={s.content}>
               {documentToReactComponents(piece['fields']['content'])}
            </div>
        </div>
    )
}