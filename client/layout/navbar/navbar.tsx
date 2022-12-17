import s from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {faFacebookF, faTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                
                <div className={s.item} >
                    <Link href={'/about-us'}> About</Link>
                    <div className={s.dropdown}>
                        <div className={s.dropped}>
                            <Link href={'/company-history'}><div className={s.drop}>Company History</div></Link>
                            <Link href={'/diversity-inclusion'}><div className={s.drop}>Diversity & Inclusion</div></Link>
                        </div>
                    </div>
                </div>
                
                <Link href={'/our-services'}><div className={s.item}>Services</div></Link>
                <Link href={'/team'}><div className={s.item}>Our Team</div></Link>
                <Link href={'/voices-of-africa'}><div className={s.item}>Voices of Africa</div></Link>
                
                {/* <div className={s.item}>
                    <Link href={'/insights'}>Insights & Ideas</Link>
                    <div className={s.dropdown}>
                        <div className={s.dropped}>
                            <Link href={'/writing-samples'}><div className={s.drop}>Writing Samples</div></Link>
                            <Link href={''}><div className={s.drop}>Case Studies</div></Link>
                            <Link href={''}><div className={s.drop}>Press / Media</div></Link>
                        </div>
                    </div>
                </div> */}
                <Link href={'/writing-samples'}><div className={s.item}>Writing Samples</div></Link>
                
                <Link href={'/contact'}><div className={s.item}>Contact Us</div></Link>
            </div>
            <div className={s.pipe}></div>
            <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faFacebookF} className={s.social}/></Link>
            <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faTwitter} className={s.social}/></Link>
            <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faInstagram} className={s.social}/></Link>
            <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faLinkedinIn} className={s.social}/></Link>
            {/* <Link href="https://www.facebook.com/liquidbarrier/"><i aria-hidden className={"fa fa-facebook "+s.social}></i></Link> */}
            {/* <Link href="https://www.twitter.com"><i aria-hidden className={"fa fa-twitter "+s.social}></i></Link> */}
            {/* <Link href="https://www.instagram.com/liquidbarrier/"><i aria-hidden className={"fa fa-instagram "+s.social}></i></Link> */}
            {/* <Link href="https://www.linkedin.com/company/liquidbarrier"><i aria-hidden className={"fa fa-linkedin "+s.social}></i></Link> */}
        </div>
    )
}