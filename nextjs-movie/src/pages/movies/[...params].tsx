// [id?].확장자명 으로 파일을 만들면 변수를 넣을수 있음. ex) /movies/1234124 이런식으로 변수를 넣을수 있음.
import { useRouter } from 'next/router';
import Header from './../../component/Header';

// CSR
// export default function Detail() {
//     const router = useRouter();
//     console.log(router);

//     const [title, id] = router.query.params || [];

//     return (
//         <div>
//             {/* <h4>{router.query.title || "Loading..."}</h4> */}
//             <h4>{title}</h4>
//         </div>
//     )
// }

// SSR
export default function Detail({params}) {
    const router = useRouter();
    console.log(router);

    const [title, id] = params || [];

    return (
        <div>
            <Header title={title}/>
            <h4>{title}</h4>
        </div>
    )
}

export async function getServerSideProps({params:{params}}) {    
    return {
        props: {
            params,
        }
    }
}