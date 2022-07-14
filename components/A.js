import Link from "next/link";
import style from "../style/link.module.css"
import Image from "next/image";


export default function A({href,  children}) {
    return (
        <Link href={href}>

            <a className={style.link}>{children}</a>
        </Link>
    );
}

