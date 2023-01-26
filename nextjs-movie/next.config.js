/** @type {import('next').NextConfig} */

// const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const API_KEY = process.env.API_KEY;

console.log(API_KEY);
/**
 * 주소에 한글이 들어가는 경우. encodeURI 해줘야함.
 * - TypeError: Request path contains unescaped characters

  - before : `https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=${API_KEY}&Type=json&pIndex=1&pSize=20&SIGUN_NM=${SIGUN_NM}`
  (SIGUN_NM : 지역 시/군 한글입력)
  
  - after : encodeURI(
  `https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=${API_KEY}&Type=json&pIndex=1&pSize=20&SIGUN_NM=${SIGUN_NM}`
  )
 */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        // source:"/contact/:path*", // source의 url을 치면 destination의 url로 간다.
        // destination:"/form/:path*", // path도 그대로 따라감. ex) source의 path가 1이면 destination의 path 도 1임.
        source:"/contact", 
        destination:"/form",
        permanent:false,
      }
    ]
  },
  async rewrites() {
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    },
    {
      source: "/api/movies/:id",
      destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
    }]
  }
}

module.exports = nextConfig
