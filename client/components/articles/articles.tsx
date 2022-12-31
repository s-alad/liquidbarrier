import s from './articles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export default function Articles({articles}: any) {
    console.log(articles)
    return (
        <div className={s.articles}>
            <div className={s.title}>Thought Leadership & Opinions</div>
            <div className={s.paper}>
                {
                    articles.map((article: any) => (
                        <Link href={'/articles/' + article.fields.slug} className={s.article} key={article.sys.id}>
                            <div>
                                <Image
                                    src={"https:"+article['fields']['banner']['fields']['file']['url']}
                                    alt={article['fields']['banner']['fields']['title']}
                                    width={300}
                                    height={200}
                                >
                                </Image>
                                <div className={s.title}>{article['fields']['displaytitle']}</div>
                                <div className={s.author}><em>{article['fields']['author']}</em></div>
                                <div className={s.date}>{article['fields']['date']}</div>
                                <div className={s.preview}>
                                    {documentToPlainTextString(article['fields']['content']).split(' ').slice(0, 38).join(' ') + '...'}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            
        </div>
    )
}