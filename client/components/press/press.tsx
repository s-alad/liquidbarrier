import s from './press.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export default function Press({press}: any) {
    console.log(press)
    return (
        <div className={s.press}>
            <div className={s.title}>Press</div>
            <div className={s.paper}>
                {
                    press.map((release: any) => (
                        <Link href={'/press/' + release.fields.slug} className={s.release} key={release.sys.id}>
                            <div>
                                <Image
                                    src={"https:"+release['fields']['banner']['fields']['file']['url']}
                                    alt={release['fields']['banner']['fields']['title']}
                                    width={300}
                                    height={200}
                                >
                                </Image>
                                <div className={s.title}>{release['fields']['displaytitle']}</div>
                                <div className={s.author}><em>{release['fields']['author']}</em></div>
                                <div className={s.date}>{release['fields']['date']}</div>
                                <div className={s.preview}>
                                    {documentToPlainTextString(release['fields']['content']).split(' ').slice(0, 38).join(' ') + '...'}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            
        </div>
    )
}