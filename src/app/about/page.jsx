'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import Button from '@/components/Button/Button'

export default function About() {

    const URL = usePathname()
    return (
        <main>
            <h1>About</h1>
            <ul>
                <li><Link href={`${URL}/Gina`} >Gina</Link></li>
                <li><Link href={`${URL}/Meli`} >Meli</Link></li>
                <li><Link href={`${URL}/Juan`} >Juan</Link></li>
            </ul>
            <Button/>
        </main>
    )

}