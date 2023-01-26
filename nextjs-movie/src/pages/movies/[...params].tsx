// [id?].확장자명 으로 파일을 만들면 변수를 넣을수 있음. ex) /movies/1234124 이런식으로 변수를 넣을수 있음.
import { useRouter } from 'next/router';

export default function Detail() {
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h4>{router.query.title || "Loading..."}</h4>
        </div>
    )
}