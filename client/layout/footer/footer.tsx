import s from './footer.module.css';
import Image from 'next/image'
import Link from 'next/link';

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
                        <Link href={'/about-us'}><div className={s.top}>About</div></Link>
                        <Link href={'/diversity-inclusion'}><div className={s.item}>Diversity & Inclusion</div></Link>
                        <Link href={'/company-history'}><div className={s.item}>Company History</div></Link>
                    </div>
                    <div className={s.column}>
                        <div className={s.top}>Insights & Ideas</div>
                        <div className={s.item}>Writing Samples</div>
                        <div className={s.item}>Case Studies</div>
                        <div className={s.item}>Press / Media</div>

                    </div>
                    <div className={s.column}>
                        <div className={s.top}>Other Links</div>
                        <Link href={'/team'}><div className={s.item}>Our Team</div></Link>
                        <Link href={'/contact'}><div className={s.item}>Contact Us</div></Link>
                        <Link href={'/our-services'}><div className={s.item}>Our Services</div></Link>
                    </div>
                </div>
                <div className={s.copyright}>
                    <div className={s.socials}>
                        <a href="https://www.facebook.com/liquidbarrier/"><i aria-hidden className={"fa fa-facebook "+s.social}></i></a>
                        <a href="https://www.twitter.com"><i aria-hidden className={"fa fa-twitter "+s.social}></i></a>
                        <a href="https://www.instagram.com/liquidbarrier/"><i aria-hidden className={"fa fa-instagram "+s.social}></i></a>
                        <a href="https://www.linkedin.com/company/liquidbarrier"><i aria-hidden className={"fa fa-linkedin "+s.social}></i></a>
                    </div>
                    <div className={s.rights}>copyright © 2021</div>
                </div>
            </div>
        </>
    )
}
