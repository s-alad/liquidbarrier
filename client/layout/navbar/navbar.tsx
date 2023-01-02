import s from './standard/navbar.module.css'
import m from './mobile/mobile.module.css'
import r from './responsive.module.css'

import Image from 'next/image'
import Link from 'next/link'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {

    function menu() {

        let seperator = document.querySelector(`.${m.seperator}`) as HTMLElement
        let social = document.querySelector(`.${m.socials}`) as HTMLElement
        let items = document.querySelectorAll(`.${m.item}`) as NodeListOf<HTMLElement>
        let overlay = document.querySelector(`.${m.overlay}`) as HTMLElement
        let menu = document.querySelector(`.${m.menu}`) as HTMLElement

        if (overlay.classList.contains(`${m.opened}`)) {
            menu.classList.remove(`${m.menuopen}`)
            items.forEach((item) => {
                item.style.display = 'none'
            })
            social.style.display = 'none'
            seperator.style.display = 'none'
            overlay.classList.remove(`${m.opened}`)
        } else {
            overlay.classList.add(`${m.opened}`)
            menu.classList.add(`${m.menuopen}`)
            setTimeout(() => {
                social.style.display = 'flex'
                seperator.style.display = 'block'
                items.forEach((item) => {
                    item.style.display = 'block'
                })
            }, 100)
        }
    }

    function setActive(e: any) {
        let target = e.target as HTMLElement
        let active = document.querySelectorAll(`.${r.active}`) as NodeListOf<HTMLElement>
        active.forEach((item) => {
            item.classList.remove(`${r.active}`)
        })
        target.classList.add(`${r.active}`)
    }
    return (
        <>
            <div className={`${m.mobile} ${r.mobilenavbar}`}>
                <div className={m.logo}>
                    <Link href={'/'}>
                        <Image src={'/li1.jpg'}
                            alt="Picture of the author"
                            width={65}
                            height={60} />
                    </Link>
                </div>
                <div className='flexspace'></div>
                <div className={m.menu} onClick={() => menu()}>
                    <div className={m.line}></div>
                    <div className={m.line}></div>
                    <div className={m.line}></div>
                </div>
                <div className={m.overlay}>
                    <div onClick={() => menu()} className={m.item}><Link href={'/about-us'}>About</Link></div>
                    <div onClick={() => menu()} className={m.item}><Link href={'/company-history'}>Company History</Link></div>
                    <div onClick={() => menu()} className={m.item}><Link href={'/diversity-inclusion'}>Diversity & Inclusion</Link></div>
                    <div onClick={() => menu()} className={m.item}><Link href={'/our-services'}>Services</Link></div>
                    <div onClick={() => menu()} className={m.item}><Link href={'/team'}>Our Team</Link></div>
                    <div onClick={() => menu()} className={m.item}><Link href={'/voices-of-africa'}>Voices of Africa</Link></div>
                    <div onClick={() => menu()} className={m.item}><Link href={'/writing-samples'}>Writing Samples</Link></div>
                    <div onClick={() => menu()} className={m.item}><Link href={'/contact'}>Contact</Link></div>
                    <div onClick={() => menu()} className={m.seperator}></div>
                    <div onClick={() => menu()} className={m.socials}>
                        <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faFacebookF} className={s.social} /></Link>
                        <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faTwitter} className={s.social} /></Link>
                        <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faInstagram} className={s.social} /></Link>
                        <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faLinkedinIn} className={s.social} /></Link>
                    </div>
                </div>
            </div>

            <div className={s.navwrapper}>
                <div className={`${s.navbar} ${r.standardnavbar}`}>
                    <div className={s.logo}>
                        <Link href={'/'}>
                            <Image src={'/li1.jpg'}
                                alt="Picture of the author"
                                width={65}
                                height={60} />
                        </Link>
                    </div>
                    <div className='flexspace'></div>
                    <div className={s.anchors}>
                        <div onClick={(e)=>setActive(e)} className={s.item} >
                            <Link href={'/about-us'}> About</Link>
                            <div className={s.dropdown}>
                                <div className={s.dropped}>
                                    <Link href={'/company-history'}><div className={s.drop}>Company History</div></Link>
                                    <Link href={'/diversity-inclusion'}><div className={s.drop}>Diversity & Inclusion</div></Link>
                                </div>
                            </div>
                        </div>
                        <Link onClick={(e)=>setActive(e)} href={'/our-services'}><div className={s.item}>Services</div></Link>
                        <Link onClick={(e)=>setActive(e)} href={'/team'}><div className={s.item}>Our Team</div></Link>
                        <Link onClick={(e)=>setActive(e)} href={'/voices-of-africa'}><div className={s.item}>Voices of Africa</div></Link>
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
                        <Link onClick={(e)=>setActive(e)} href={'/writing-samples'}><div className={s.item}>Writing Samples</div></Link>
                        <Link onClick={(e)=>setActive(e)} href={'/contact'}><div className={s.item}>Contact</div></Link>
                    </div>
                    <div className={s.pipe}></div>
                    <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faFacebookF} className={s.social} /></Link>
                    <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faTwitter} className={s.social} /></Link>
                    <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faInstagram} className={s.social} /></Link>
                    <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faLinkedinIn} className={s.social} /></Link>
                </div>
            </div>
        </>
    )
}