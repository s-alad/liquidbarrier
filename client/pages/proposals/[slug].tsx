import {getProposal, getAllProposals } from '../../api/content'
import { /* documentToHtmlString,  */documentToReactComponents } from '@contentful/rich-text-react-renderer';

import s from './proposalslug.module.css'
import OtherSlug from '../../components/otherslug/otherslug';

export async function getStaticPaths() {

    let data = await getAllProposals();

    return {
        paths: data.map((piece: any) => ({
            params: { slug: piece.fields.slug }
        })),
        fallback: false
    }
}

export async function getStaticProps({params}:any) {
    let data = await getProposal(params.slug);
    let extra = await getAllProposals();
    return {
        props: {
            piece: data[0],
            extra: extra.filter((piece:any) => piece.fields.slug !== params.slug)
        },
        revalidate: 60
    }
}

export default function Proposal({piece, extra}:any) {
    return (
        <div className={s.proposal}>
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