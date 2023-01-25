// NextJs는 다른 컴포넌트들을 거치기전에 app 컴포넌트부터 제일 먼저 거쳐감.
// ex) index.tsx 와 about.tsx의 소스를 읽기 전에 _app.tsx의 소스부터 읽는다.
import NavBar from "@/component/navBar";
import  "../styles/globals.css" // App파일에서만 허용되는 방식. 다른 파일에서는 에러가 난다.

export default function App({Component, pageProps}) {
    // console.log(pageProps)
    return (
    <div>
        <NavBar/>
        <Component {...pageProps}/>
        <span>hello</span>
        
    </div>
    )
}