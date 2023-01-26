import Header from "@/component/Header";
import Link from "next/link";
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';



// CSR Client Side Rendering
// export default function Home() {
//     const [movies, setMovies] = useState();
//     useEffect(() => {
//         (async () => {
//             const { results } = await (
//                 await fetch(
//                     `/api/movies`
//                 )
//             ).json();
//             setMovies(results);
//         })();
//     }, []);
//     return (
//         <div className="container">
//             <Header title="Home" />
//             {!movies ? (<h4>Loading...</h4>) : (
//                 movies?.map((movie) => (
//                     <div key={movie.id}>
//                         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
//                         <h4>{movie.original_title}</h4>
//                     </div>
//                 )))
//             }
//         <style jsx>{`
//         .container {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           padding: 20px;
//           gap: 20px;
//         }
//         .movie img {
//           max-width: 100%;
//           border-radius: 12px;
//           transition: transform 0.2s ease-in-out;
//           box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
//         }
//         .movie:hover img {
//           transform: scale(1.05) translateY(-10px);
//         }
//         .movie h4 {
//           font-size: 18px;
//           text-align: center;
//         }
//       `}</style>

//     </div>
    
//     );
// }

// SSR Server Side rendering
export default function Home({results}) {
    const router = useRouter();
    const onClick = (id, title) => {
        // router.push(`/movies/${id}`)

    //     router.push({
    //         pathname: `/movies/${id}`,
    //         query: {
    //             title
    //         }
    //     },
    //     // as는 url을 가려줌. 사용하지 않으면 pathname과 query의 데이터들이 url에 표시됨.
    //     `/movies/${id}`
    //     )

    router.push(`/movies/${title}/${id}`)
    }
    

    return (
        <div className="container">
            <Header title="Home" />
            
            {results?.map((movie) => (
                <Link 
                // href = {`/movies/${movie.id}`}

            //     href={{
            //         pathname: `/movies/${movie.id}`,
            //         query: {
            //             title: movie.original_title,
            //         },
            // }} as={`/movies/${movie.id}`}

                 href = {`/movies/${movie.original_title}/${movie.id}`}

                 key={movie.id} onClick= {() => onClick(movie.id, movie.original_title)}>
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <h4>{movie.original_title}</h4>
                    </div>
                </Link>
                ))}
        <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
        </div>
    
    );
}

export async function getServerSideProps() {
    const { results } = await(await fetch(`http://localhost:3000/api/movies`)).json();
    
    return {
        props: {
            results,
        }
    }
}