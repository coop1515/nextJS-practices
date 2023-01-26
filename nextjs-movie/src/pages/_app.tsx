// NextJs는 다른 컴포넌트들을 거치기전에 app 컴포넌트부터 제일 먼저 거쳐감.
// ex) index.tsx 와 about.tsx의 소스를 읽기 전에 _app.tsx의 소스부터 읽는다.

import  "../styles/globals.css" // App파일에서만 허용되는 방식. 다른 파일에서는 에러가 난다.
import { AppProps } from 'next/app';
import Layout from './../component/Layout';

export default function App({Component, pageProps} : AppProps) {

    return (
            <div>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </div>
    )
}