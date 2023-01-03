import {getCreative, getAllCreatives } from '../../api/content'
import { /* documentToHtmlString,  */documentToReactComponents } from '@contentful/rich-text-react-renderer';

import s from './creativeslug.module.css'
import OtherSlug from '../../components/otherslug/otherslug';

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
    let extra = await getAllCreatives();
    return {
        props: {
            piece: data[0],
            extra: extra.filter((piece:any) => piece.fields.slug !== params.slug)
        },
        revalidate: 60
    }
}

export default function Creative({piece, extra}:any) {
    return (
        <div className={s.creative}>
            <h1 className={s.title}>{piece['fields']['title']}</h1>
            <div className={s.author}>{piece['fields']['author']}</div>
            <div className={s.date}>{piece['fields']['date']}</div>
            <div className={s.content}>
               {documentToReactComponents(piece['fields']['content'])}
            </div>
            <OtherSlug extra={extra}></OtherSlug>
        </div>
    )
}