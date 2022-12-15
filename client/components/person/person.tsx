import s from './person.module.css'
import Image from 'next/image'

interface PersonProps {
    name: string,
    bio: string,
    position: string
}

export default function Person(person : PersonProps) {
    return (
        <div className={s.person}>
            <div className={s.bar}></div>
            <div className={s.information}>
                <Image src={'https://www.liquidbarriersolutions.com/img/Picture1.png'}
                        alt="Picture of the author"
                        width={65}
                        height={60}
                        className={s.image}/>
                <div className={s.content}>
                    <h1 className={s.title}>{person.name}</h1>
                    <h2 className={s.position}>{person.position}</h2>
                    <p className={s.bio}>{person.bio}</p>
                </div>
            </div>
        </div>
    )
}