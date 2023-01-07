import { getAllArticles, getAllCreatives, getAllPress, getAllProposals} from '../../api/content'
import Articles from '../../components/articles/articles'
import Creative from '../../components/creative/creative';
import Press from '../../components/press/press';
import Proposals from '../../components/proposals/proposal';
import s from './writing.module.css'

export async function getStaticProps() {

    let articleData = await getAllArticles();
    let pressData = await getAllPress();
    let creativeData = await getAllCreatives();
    let proposalData = await getAllProposals();

    return {
        props: {
            articles: articleData,
            press: pressData,
            creatives: creativeData,
            proposals: proposalData
        },
        revalidate: 60
    }
}

export default function Writing({articles, press, creatives, proposals}:any) {
    return (
        <div className={s.writing}>
            <div className={s.banner}>
                <div className={s.bannertext}>
                    Writing Samples
                </div>
            </div>
            {/* <div className={s.title}>Writing Samples</div> */}
            <Articles articles={articles}></Articles>
            <Press press={press}></Press>
            <Proposals proposals={proposals}></Proposals>
            <Creative creatives={creatives}></Creative>
        </div>
    )
}