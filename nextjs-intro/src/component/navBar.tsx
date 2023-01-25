import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navBar.module.css";

export default function NavBar() {
    const router = useRouter();

    return <nav>
        <a className="active" href="/">Home</a> <br/>
        <a href="/about">About</a>
        <p/> a href 태그는 새로고침이 되기때문에 nextJS에서는 Link태그를 사용하는걸 추천함.<p/>

        <Link style={{color: router.pathname === "/" ? "red" : "blue"}} href="/" >Home</Link> <br/>
        {/* <Link className={`${styles.link} ${router.pathname === "/about" ? styles.active : "blue"}`} href="/about">About</Link> */}
        <Link className={[styles.link,router.pathname === "/about" ? styles.active : "blue"].join(" ")} href="/about">About</Link>

        <p/> style JSX 사용하는 방법 style JSX는 스코프에 한정되어 적용된다.
        <style jsx>{`
            nav {
                background-color: tomato;
            }
            a{
                text-decoration: none;
            }
            .active{
                color: yellow;
            }
        `}</style>
        
    </nav>
}