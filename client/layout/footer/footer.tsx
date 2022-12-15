import s from './footer.module.css';
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <div className={s.footer}>
                <div className={s.seperator}></div>
                <div className={s.information}>
                    <div className={s.column}>
                        <div className={s.top}>
                            <Image src={'/li4.jpg'}
                                alt="Picture of the author"
                                width={55}
                                height={55}
                            />
                        </div>
                        <div className={s.item}>Headquarters: Irvington, NJ</div>
                        <div className={s.item}>Phone: 201-303-5541</div>
                        <div className={s.item}>Industry: Writing & Editing</div>
                    </div>
                    <div className={s.column}>
                        <div className={s.top}>About</div>
                        <div className={s.item}>Diversity & Inclusion</div>
                        <div className={s.item}>Company History</div>
                    </div>
                    <div className={s.column}>
                        <div className={s.top}>Insights & Ideas</div>
                        <div className={s.item}>Writing Samples</div>
                        <div className={s.item}>Case Studies</div>
                        <div className={s.item}>Press / Media</div>

                    </div>
                    <div className={s.column}>
                        <div className={s.top}>Other Links</div>
                        <div className={s.item}>Our Team</div>
                        <div className={s.item}>Contact Us</div>
                        <div className={s.item}>Our Services</div>
                    </div>
                </div>
                <div className={s.copyright}>
                    <div className={s.socials}>
                        <a href="https://www.facebook.com/liquidbarrier/"><i className={"fa fa-facebook "+s.social}></i></a>
                        <a href="https://www.twitter.com"><i  className={"fa fa-twitter "+s.social}></i></a>
                        <a href="https://www.instagram.com/liquidbarrier/"><i  className={"fa fa-instagram "+s.social}></i></a>
                        <a href="https://www.linkedin.com/company/liquidbarrier"><i className={"fa fa-linkedin "+s.social}></i></a>
                    </div>
                    <div className={s.rights}>copyright © 2021</div>
                </div>
            </div>
        </>
    )
}
