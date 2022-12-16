import { getAllArticles, getAllCreatives, getAllPress} from '../../api/content'
import Articles from '../../components/articles/articles'
import Creative from '../../components/creative/creative';
import Press from '../../components/press/press';
import s from './writing.module.css'

export async function getStaticProps() {

    let articleData = await getAllArticles();
    let pressData = await getAllPress();
    let creativeData = await getAllCreatives();

    return {
        props: {
            articles: articleData,
            press: pressData,
            creatives: creativeData
        },
        revalidate: 60
    }
}

export default function Writing({articles, press, creatives}:any) {
    return (
        <div className={s.writing}>
            <div className={s.banner}></div>
            <div className={s.title}>Writing Samples</div>
            <Articles articles={articles}></Articles>
            <Press press={press}></Press>
            <Creative creatives={creatives}></Creative>

        </div>
    )
}