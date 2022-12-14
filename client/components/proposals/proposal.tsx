import s from './proposals.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export default function Proposals({proposals}: any) {
    console.log(proposals)
    return (
        <div className={s.proposals}>
            <div className={s.title}>Proposals</div>
            <div className={s.paper}>
                {
                    proposals.map((piece: any) => (
                        <Link href={'/proposals/' + piece.fields.slug} className={s.piece} key={piece.sys.id}>
                            <div>
                                <Image
                                    src={"https:"+piece['fields']['banner']['fields']['file']['url']}
                                    alt={piece['fields']['banner']['fields']['title']}
                                    width={300}
                                    height={200}
                                >
                                </Image>
                                <div className={s.title}>{piece['fields']['displaytitle']}</div>
                                <div className={s.author}><em>{piece['fields']['author']}</em></div>
                                <div className={s.date}>{piece['fields']['date']}</div>
                                <div className={s.preview}>
                                    {documentToPlainTextString(piece['fields']['content']).split(' ').slice(0, 38).join(' ') + '...'}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}