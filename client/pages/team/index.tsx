import { getAllMembers } from '../../api/content';
import Person from '../../components/person/person'
import s from './team.module.css'

export async function getStaticProps() {
    let membersData = await getAllMembers();
    return {
        props: {
            members: membersData
        },
        revalidate: 60
    }
}

export default function Team({members}: any) {
    return (
        <div className={s.team}>
            <div className={s.banner}>
                <div className={s.bannertext}>Our Team</div>
            </div>
            <div className={s.about}>
                <div className={s.title}>
                    About Our Team
                </div>
                <div>
                I know it’s a bit of a cliché to say it's people who give a company its strength, however, this is a cliché I truly embrace and believe in. I can’t tell you how much I value and am impressed with our stellar team of writers. They hail from all parts of the globe, are multi-lingual, and have excelled in more than several business domains. I sincerely hope you enjoy reading their biographies as much as I continue to value their intelligence, work ethic, humanity, and character.
                <br/>
                <em>-Frank Bryant, Liquid Barrier Founder & CEO</em>
                </div>
            </div>
            <div className={s.people}>

                {
                    members.map((member: any)=> (
                        <Person 
                            name={member['fields']['name']} 
                            bio={member['fields']['bio']} 
                            position={member['fields']['role']} 
                            linkedin={member['fields']['linkedin']}
                        />
                    ))
                }


                {/* <Person name={'Frank Bryant'} bio={'Frank has spent 20+ years as a technical writer, business analyst, and project manager for such well-known companies as AT&T, AIG, Standard & Poor’s, Citigroup, and JP Morgan Chase. Frank has also worked for small and medium sized businesses. Passionate, well-organized, dedicated, and thorough are just a few of the adjectives that clients often use to describe Frank’s approach to taking on new assignments. Frank believes perfection is impossible, however he always strives to come as close to it as possible on every project! Frank holds a B.A. in English from Rutgers University in New Brunswick, New Jersey. He is also a dedicated youth hockey coach for Hockey NJ based in Newark, New Jersey.'} position={'Founder & CEO'} linkedin={'https://www.linkedin.com/in/frank-bryant/'}></Person>
                <Person name={'Roza Bairu'} bio={'Roza has held leadership positions in office administration, product sales, and digital marketing over the last 12 years in Eritrea and Dubai, the largest of the United Arab Emirates. Roza has worked for medium and large-sized corporations. And as a consultant, she has guided many small businesses and solopreneurs to improved balance sheets by helping them enhance their digital and social media presence and operability. Roza is both down-to-earth and passionate and loves Jazz music. Roza holds a B.A. in Business Marketing from Halhale College in Asmara, Eritrea. A native of Eritrea, she is fluent in Amharic (Ethiopian), Tigrinya (Eritrean) and, of course, English.'} position={'Head of East Africa & Middle Eastern Operations'} linkedin={'https://www.linkedin.com/in/rozabairu/'} ></Person>
                <Person name={'Laurence Shanet'} bio={'Laurence has spent 20+ years as a copywriter, creative director, and technical writer in a wide variety of business sectors and non-profit categories. His client list has included prominent companies such as LG Electronics, Volkswagen, Amazon, Motorola, Visa, Disney, and Pepsi, as well as non-profit organizations like the American Museum of Natural History and the Ad Council. Laurence’s editorial writing has also appeared in outlets and publications such as Forbes, Slate, Sporting News, and Apple News. In addition to his work as a writer, Laurence has a background in science and medicine that includes research publication in Journal of Neuroscience and Journal of Pharmacology, Biochemistry and Behavior. Laurence’s advertising and entertainment career has seen him direct numerous commercials for well-known brands, as well as pilot episodes for several episodic television properties. He is also a former competitive tennis player who still occasionally tries not to embarrass himself on the court. Laurence holds B.A. degrees in Writing Seminars and Clinical Psychology from Johns Hopkins University, and graduate degrees in Film from New York University and Marketing from Johns Hopkins Carey Business School.'} position={'Head Writer'} linkedin={'https://www.linkedin.com/in/laurenceshanet/'} ></Person>
                <Person name={'Nicole Franklin'} bio={'Nicole Franklin is a writer, educator and an award-winning filmmaker. Her published articles on the topics of film and political activism have appeared on such award-winning sites as ByBlacks.com (Toronto), The Good Men Project and NBC’s African American news vertical, NBCBLK. As a ghostwriter, Nicole has authored several memoirs in addition to an upcoming encyclopedia-style history book for youth. Nicole is the author of several screenplays and a recent children’s book, Ella’s Sunday Song, co-authored with her mother, Irene Franklin, a music educator and pianist. As an award-winning writer/director, Nicole’s features films include the recently released TITLE VII, a narrative film on the rarely discussed subject of same-race discrimination in the workplace and her Sundance Channel debut, I Was Made to Love Her: the Double Dutch Documentary. TITLE VII was the 2017 Martha\'s Vineyard African American Film Festival HBO sponsored Best Feature Nominee, the 2017 St. Louis International Film Festival Emerging Director Award Nominee, and Best Lead Actress and Best Supporting Actress winner from the I See You Awards 2018. The film screened as part of the 2017 Lifetime Achievement Award of the Reel Sisters of the African Diaspora Film Festival for Nicole Franklin. Having directed projects for both stage and screen, Nicole’s other credits include the multi-award winning documentary The Double Dutch Divas!, Journeys in Black: the Jamie Foxx Biography, Gershwin & Bess: A Dialogue with Anne Brown, and the award-winning documentary series Little Brother. Nicole is a member of the Directors Guild, Producers Guild, New York Women in Film & Television, Film Fatales and the Black Documentary Collective. In national news television she has worked as a stage manager on The Today Show and as a video editor on several Emmy Award-winning teams including NBC Nightly News and CBS Sunday Morning.'} position={'Writer'} linkedin={'https://www.linkedin.com/in/nicolefilms/'} ></Person> */}
            </div>
        </div>
    )
}