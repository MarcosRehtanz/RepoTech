import Link from "next/link"
import style from './NavBar.module.css'

const NavBar = () => {

    return (
        <nav className={style.NavBar} >
            <ul className={style.navigate}>
                <li><Link href='/' >Home</Link></li>
                <li><Link href='/about' >About</Link></li>
                <li><Link href={{
                    pathname: '/blog/urlDinamic',
                }} >Blog</Link></li>
                <li><Link href='/graphics'>Graphics</Link></li>
            </ul>
        </nav>
    )

}

export default NavBar