import Head  from 'next/head';
import { Props } from 'next/script';

export default function Header({title} : Props) {

    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}