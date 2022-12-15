import s from './services.module.css'

export default function OurServices() {
    return (
        <div className={s.services}>
            <div className={s.banner}>
                Our Services
            </div>
            <div className={s.info}>
                <div className={s.title}>Liquid Barrier Proudly Offers The Following Services</div>
                <div className={s.subtitle}>We help today's entrepreneurs grow their businesses through fine writing and sound documentation</div>
            </div>
            <div className={s.content}>
                <div className={s.service}>
                    <div className={s.title}>Thought Leadership</div>
                    <div className={s.text}>articles or other content related to expression of ideas demonstrating the author has a high expertise level in a particular field, area, or topic.</div>
                </div>
                <div className={s.service}>
                    <div className={s.title}>Business Documents</div>
                    <div className={s.text}>business plans (w/marketing research) and strategy documents; proposals; business concept documents; business cases; professional biographies; RFIs; RFPs; KPIs; presentations; and procedural and control related documents.</div>
                </div>
                <div className={s.service}>
                    <div className={s.title}>Technology Project Documents</div>
                    <div className={s.text}>technical concept proposals; white papers; business requirement documents (BRDs); functional requirement documents (FRDs); technical specifications; project plans; project status (RAG) reports as well as Visio diagrams.</div>
                </div>
                <div className={s.service}>
                    <div className={s.title}>Online Marketing and Digital Platform Content</div>
                    <div className={s.text}>press releases, newsfeed posts, and blog posts; articles and newsletters for online publication.</div>
                </div>
                <div className={s.service}>
                    <div className={s.title}>Social Media Management & Marketing</div>
                    <div className={s.text}>creation, development, and management of social media accounts on LinkedIn, Facebook, Instagram, TikTok, and Twitter. Cultivation, engagement, and communication with follower bases, including promotional and media campaigns. Periodic reporting, analysis, and performance analytics.</div>
                </div>
                <div className={s.service}>
                    <div className={s.title}>Literary Publications</div>
                    <div className={s.text}>writing, editing, theme development, structure and organization; and removing writer’s block.</div>
                </div>
            </div>
        </div>
    )
}