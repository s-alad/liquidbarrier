import Link from "next/link";
import s from "./other.module.css";

export default function OtherSlug({ extra }: any) {

    if (extra.length == 0) {return <></>;}
    
    return (
        <>
            <div className={s.seperator}></div>
            <div className={s.otherarticles}>
                <div className={s.title} onClick={() => console.log(extra)}>Other Articles</div>
                <div>
                    {extra.map((article: any) => (
                        <Link href={article.fields.slug} key={article.sys.id} className={s.otherarticle}>
                            <div className={s.othertitle}>{article.fields.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}