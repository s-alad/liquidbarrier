import {getPress, getAllPress } from '../../api/content'
import { /* documentToHtmlString,  */documentToReactComponents } from '@contentful/rich-text-react-renderer';

import s from './releaseslug.module.css'
import OtherSlug from '../../components/otherslug/otherslug';

export async function getStaticPaths() {

    let data = await getAllPress();

    return {
        paths: data.map((release: any) => ({
            params: { slug: release.fields.slug }
        })),
        fallback: false
    }
}

export async function getStaticProps({params}:any) {
    let data = await getPress(params.slug);
    let extra = await getAllPress();

    return {
        props: {
            release: data[0],
            extra: extra.filter((release:any) => release.fields.slug !== params.slug)
        },
        revalidate: 60
    }
}

export default function Press({release, extra}:any) {
    console.log(release)
    return (
        <div className={s.release}>
            <h1 className={s.title}>{release['fields']['title']}</h1>
            <div className={s.author}>{release['fields']['author']}</div>
            <div className={s.date}>{release['fields']['date']}</div>
            <div className={s.content}>
               {documentToReactComponents(release['fields']['content'])}
            </div>
            <OtherSlug extra={extra}></OtherSlug>
        </div>
    )
}