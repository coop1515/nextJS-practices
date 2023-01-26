import Header from "@/component/Header";
import NavBar from "@/component/navBar";
import Head from "next/head";
// import  "../styles/globals.css" // NextJs에서는 전역으로 적용되는 이런 css는 App에서만 허용해줌.

export default function Home() {
    // return "Hi";
    
    return (
        <div>
            {/* <Head>
                <title>Home | Next Movies</title>
            </Head> */}
            <Header title="Home" />
            {/* <h1>Hello </h1> */}
            <NavBar/>
        </div>
    )
}