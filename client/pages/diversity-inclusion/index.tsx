import s from './diversity.module.css'
import Image from 'next/image'

export default function Diversity() {
    return (
        <div className={s.diversity}>
            {/* <div className={s.banner}>
                Diversity & Inclusion
            </div> */}
            <div className={s.brief}>
                <div className={s.title}>
                    Our Commitment to Diversity & Inclusion & the Environment
                </div>
                <p className={s.text}>
                    Liquid Barrier firmly supports workforce diversity and inclusion and social and cultural respect for the following groups: persons of indigenous heritage; members of the African diaspora; persons of Latino heritage; persons with disabilities; persons identifying as LGBTQ; and persons of disparate religious backgrounds.

                    Liquid Barrier is an earth-friendly company and is committed to activities that support cleaner land, air, and seas for better harmony between humans and the natural environment.
                </p>
            </div>
            <div className={s.pieces}>
                <div className={s.piece}>
                    <Image
                        src={'https://www.liquidbarriersolutions.com/img/blm-diversity-inclusion.jpg'} 
                        alt={''}
                        width={300}
                        height={300}>
                    </Image>
                </div>
                <div className={s.piece}>
                    <Image
                        src={'https://www.liquidbarriersolutions.com/img/us-flag-diversity-inclusion.jpg'} 
                        alt={''}
                        width={300}
                        height={300}>
                    </Image>
                </div>
                <div className={s.piece}>
                    <Image
                        src={'https://www.liquidbarriersolutions.com/img/george-floyd-diversity-inclusion.jpg'} 
                        alt={''}
                        width={300}
                        height={300}>
                    </Image>
                </div>
            </div>
        </div>
    )
}