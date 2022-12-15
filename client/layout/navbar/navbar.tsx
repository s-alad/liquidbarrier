import s from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={s.navbar}>
            <div className={s.logo}>
                <Link href={'/'}>
                    <Image src={'/li1.jpg'}
                        alt="Picture of the author"
                        width={65}
                        height={60}/>
                </Link>
            </div>
            <div className='flexspace'></div>
            <div className={s.anchors}>
                <Link href={'/about-us'}>
                    <div className={s.item} >
                        About
                        <div className={s.dropdown}>
                            <div className={s.dropped}>
                                <Link href={'/company-history'}><div className={s.drop}>Company History</div></Link>
                                <Link href={'/diversity-inclusion'}><div className={s.drop}>Diversity & Inclusion</div></Link>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={'/our-services'}><div className={s.item}>Services</div></Link>
                <Link href={'/team'}><div className={s.item}>Our Team</div></Link>
                <Link href={'/insights'}>
                    <div className={s.item}>
                        Insights & Ideas
                        <div className={s.dropdown}>
                            <div className={s.dropped}>
                                <Link href={''}><div className={s.drop}>Writing Samples</div></Link>
                                <Link href={''}><div className={s.drop}>Case Studies</div></Link>
                                <Link href={''}><div className={s.drop}>Press / Media</div></Link>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={'/contact'}><div className={s.item}>Contact Us</div></Link>
            </div>
            <div className={s.pipe}></div>
            <Link href="https://www.facebook.com/liquidbarrier/"><i className={"fa fa-facebook "+s.social}></i></Link>
            <Link href="https://www.twitter.com"><i className={"fa fa-twitter "+s.social}></i></Link>
            <Link href="https://www.instagram.com/liquidbarrier/"><i className={"fa fa-instagram "+s.social}></i></Link>
            <Link href="https://www.linkedin.com/company/liquidbarrier"><i className={"fa fa-linkedin "+s.social}></i></Link>
        </div>
    )
}