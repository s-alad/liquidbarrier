import s from './gobutton.module.css'
import Link from 'next/link'

interface GoButtonProps {
    text: string,
    link: string,
}

export default function Gobutton(go: GoButtonProps) {
    return (
        <Link href={go.link} className={s.gobutton}>
            <div className={s.go} id={s.buttonseven}>
                <div id={s.dubarrow}><img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" /></div>
                <span>{go.text}</span>
            </div>
        </Link>
    )
}