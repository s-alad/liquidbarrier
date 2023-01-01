import Head from 'next/head'
import s from './home.module.css'
import Image from 'next/image'
import Gobutton from '../components/gobutton'

export default function Home() {
	return (
		<div className={s.home}>
			<div className={s.banner}>
				Liquid Barrier
			</div>
			<div className={s.content}>
				<div className={s.highlight}>
					<div className={s.title}>
						Who We Are
					</div>
					<div className='flexspace'></div>
					<div className={s.splash}>
						<Image
							src={'https://www.liquidbarriersolutions.com/img/who-we-are.jpg'} 
							alt={''}
							width={300}
							height={300}>
						</Image>
					</div>
					<p className={s.brief}>
						We are a dynamic, analytical, and artistic team of writers who recognize the impacts of recent world events
					</p>
					<div className={s.action}>
						<Gobutton text={'Read more!'} link={'/about-us'} ></Gobutton>
					</div>
				</div>
				<div className={s.redline}></div>
				<div className={s.highlight}>
					<div className={s.title}>
						Diversity & Inclusion
					</div>
					<div className='flexspace'></div>
					<div className={s.splash}>
						<Image
							src={'https://www.liquidbarriersolutions.com/img/diversity-inclusion.jpg'} 
							alt={''}
							width={300}
							height={300}>
						</Image>
					</div>
					<p className={s.brief}>
						Liquid Barrier firmly supports workforce diversity and inclusion and social and cultural respect for.
					</p>
					<div className={s.action}>
						<Gobutton text={'Read more!'} link={'/diversity-inclusion'} ></Gobutton>
					</div>
				</div>
				<div className={s.redline}></div>
				<div className={s.highlight}>
					<div className={s.title}>
						Writing Samples
					</div>
					<div className='flexspace'></div>
					<div className={s.splash}>
						<Image
							src={'https://www.liquidbarriersolutions.com/img/writting-samples.jpg'} 
							alt={''}
							width={300}
							height={300}>
						</Image>
					</div>
					<p className={s.brief}>
						Liquid Barrier Writing Samples, Case Studies, and Press / Media representing our technology, business, and social media content work.
					</p>
					<div className={s.action}>
					<Gobutton text={'Read more!'} link={'/writing-samples'} ></Gobutton>
					</div>
				</div>
			</div>
		</div>
	)
}
