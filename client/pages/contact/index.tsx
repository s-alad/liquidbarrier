import s from './contact.module.css';
import {faFacebookF, faTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faFax, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

export default function Contact() {
    return (
        <div className={s.contact}>
            <div className={s.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24189.14348947979!2d-74.25039902287786!3d40.72587625037916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acc433f2e4d1%3A0x50cac0d62e5a555f!2sIrvington%2C%20NJ%2007111%2C%20USA!5e0!3m2!1sen!2s!4v1608707944216!5m2!1sen!2s" aria-hidden="false" tabIndex={0} width="100%" height="500px" frameBorder="0"></iframe>
            </div>
            <div className={s.comment}>
                Liquid Barrier currently represents clients across the United States, and in Canada, Dubai (UAE), Ghana (West Africa), and the United Kingdom.
            </div>
            <div className={s.contactus}>
                <div className={s.us}>
                    <div className={s.title}>Contact Us</div>
                    <div className={s.form}>
                        <div className={s.row}>
                            <input placeholder='Name'></input>
                            <input placeholder='Cell'></input>
                        </div>
                        <div className={s.row}>
                            <input placeholder='Email'></input>
                            <input placeholder='Subject'></input>
                        </div>
                        <textarea placeholder='Message'></textarea>
                        <button>Send Message</button>
                    </div>
                </div>
                <div className={s.follow}>
                    <div className={s.title}>Follow Us</div>
                    <div className={s.line}>
                        {/* <i aria-hidden className={"fa fa-fax "}></i>  */}
                        <FontAwesomeIcon icon={faFax} className={s.social}/>
                        Address : Irvington, NJ
                    </div>
                    <div className={s.seperator}></div>
                    <div className={s.line}>
                        {/* <i aria-hidden className={"fa fa-envelope-o"}></i> */}
                        <FontAwesomeIcon icon={faEnvelope} className={s.social}/>
                        Email: writing@liquidbarriersolutions.com
                    </div>
                    <div className={s.seperator}></div>
                    <div className={s.line}>
                        {/* <i aria-hidden className={"fa fa-phone"}></i>  */}
                        <FontAwesomeIcon icon={faPhone} className={s.social}/>
                        Phone: 201-303-5541
                    </div>
                    <div className={s.seperator}></div>
                    <div className={s.socials}>
                        <div className={s.line}>
                            {/* <a href="https://www.facebook.com/liquidbarrier/"><i aria-hidden className={"fa fa-facebook "+s.social}></i></a> */}
                            <Link href="https://www.facebook.com/liquidbarrier/"><FontAwesomeIcon icon={faFacebookF} className={s.social}/></Link>
                            Facebook: liquidbarrier
                        </div>
                        <div className={s.line}>
                            {/* <a href="https://www.twitter.com"><i aria-hidden className={"fa fa-twitter "+s.social}></i></a> */}
                            <Link href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} className={s.social}/></Link>
                            Twitter: @liquidbarrier
                        </div>
                        <div className={s.line}>
                            {/* <a href="https://www.instagram.com/liquidbarrier/"><i aria-hidden className={"fa fa-instagram "+s.social}></i></a> */}
                            <Link href="https://www.instagram.com/liquidbarrier/"><FontAwesomeIcon icon={faInstagram} className={s.social}/></Link>
                            Instagram: @liquidbarrier
                        </div>
                        <div className={s.line}>
                            {/* <a href="https://www.linkedin.com/company/liquidbarrier"><i aria-hidden className={"fa fa-linkedin "+s.social}></i></a> */}
                            <Link href="https://www.linkedin.com/company/liquidbarrier"><FontAwesomeIcon icon={faLinkedinIn} className={s.social}/></Link>
                            Linkedin: liquidbarrier
                        </div>
                    </div>
{/*                     <div className={s.socials}>
                        <a href="https://www.facebook.com/liquidbarrier/"><i className={"fa fa-facebook "+s.social}></i></a>
                        <a href="https://www.twitter.com"><i  className={"fa fa-twitter "+s.social}></i></a>
                        <a href="https://www.instagram.com/liquidbarrier/"><i  className={"fa fa-instagram "+s.social}></i></a>
                        <a href="https://www.linkedin.com/company/liquidbarrier"><i className={"fa fa-linkedin "+s.social}></i></a>
                    </div> */}
                    <div className='flexspace'></div>
                    <button>Schedule A Free Consultation</button>
                </div>
            </div>
        </div>
    )
}