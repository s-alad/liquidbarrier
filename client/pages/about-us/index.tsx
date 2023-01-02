import s from './about.module.css'

export default function AboutUs() {
    return (
        <div className={s.about}>
            <div className={s.banner}><div className={s.bannertext}>About Us</div></div>
            <div className={s.brief}>
                <div className={s.title}>
                    Who We Are
                </div>
                <p className={s.bio}>
                    We are a dynamic, analytical, and artistic team of writers who recognize the impacts of recent world events and want to ensure changes for the better because of them.
                    <br /><br />
                    We are a team of writers who are as concerned with what happens in our own back yard as with what happens in the rain forests of Brazil or in the challenged townships around Johannesburg. We believe writing is the most impactful tool to communicate human history, artistic expression, or a letter to corporate board members.
                    <br /><br />
                    In the last year, the world has come together to recognized the differences in criminal justice; equal rights and opportunity; and that our climate and environment is changing. Whether we’re writing a proposal a for a performing arts organization to seek additional funding or composing an article on the mathematical principles an artificial intelligence company uses to model their product, how and what we write remains true to our core beliefs.
                </p>
                <div className={s.quotes}>
                    <div className={s.steve}>
                        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma -- which is living with the results of other people's thinking." 
                        <br />
                        <em>- Steve Jobs</em>
                    </div>
                    <div className={s.quotespacer}></div>
                    <div className={s.estee}>
                        "I never dreamed about success, I worked for it." 
                        <br />
                        <em>- Estee Lauder</em>
                    </div>
                </div>
                <div className={s.title}>
                    What We Do (And How We Do It)
                </div>
                <p className={s.bio}>
                    We help our clients communicate their strategies goals, objectives, and dreams to their respective audiences—whether they be current or potential clients or friends and family.
                    <br /><br />
                    We write technology, business, and social media content! We write about technology from articles covering blockchain and virtual currencies to step-by-step procedures associated with a Key Performance Indicator (KPI) document. We write business related documents such as business plans for startup companies as well as press releases highlighting a new product or service offerings. In the social media domain, we often write newsfeed and blog posts, case studies and even web cast scripts.
                    <br /><br />
                    Most often before we write a word, we sit with a client understand precisely where their starting off and where they want to end up. During a free consultation, we learn what type of content they’d like to write, who their prospective audience is, and what they want their audience(s) to do after reading the content.
                    <br /><br />
                    During our initial client sit down we also discuss who’s the author from the client perspective…. in other words, who’s speaking. Is it the company itself? Is it the CEO or another executive? We also iron out components such as content tone, perspective, and positioning. Then, once we understand the who, what, where, and why’s of the content, we help clients determine the how. By how, we mean how or over what vehicle we will distribute client content. Will it be via LinkedIn as new feed post, or a Twitter tweet, or perhaps even a blog post on the corporate web site.
                    <br /><br />
                    Either way, we’ll make sure your content is best suited to your organization/company goals, strategies, and objectives as well as the platform on which your content will reside. And although we’re not web designers or graphic artists, we can make recommendations involving web site look and feel, navigation, design, layout, etc. to ensure your content is well presented.
                </p>
                <div className={s.title}>
                    Where We’re Going
                </div>
                <p className={s.bio}>
                    We are heading to the stars if you dare to join us!
                    <br /><br />
                    We are reaching for the stars and beyond and taking everyone who dares to join us with us. We believe writing is a company’s most powerful tool and greatest asset to communicate its vision, products, services, and dreams to a body of constituents greater than all the stars in the skies or to a group who can fit around grandma’s kitchen table.
                    <br /><br />
                    We dare to hope all companies will realize the importance and power of writing and engage companies like Liquid Barrier to support them in their journey to more brilliant communications.
                </p>
            </div>
        </div>
    )
}