# nextJS Movie

```
1. React와 같은 Layout기능이 있음. Head, Footer등 next에서 지원해줌.

2. fetch를 통한 API 데이터 가져오기 및 API KEY값 숨기기 (.env file 이용)

3. redirect와 rewriter는 next.config.js file 참조.
=> redirect는 source URL을 받으면 destination의 URL로 보내주는거 (URL자체가 변경) (포워딩과 비슷)
   rewriter는 source URL을 받으면 실제로는 destination의 URL로 보내주는것 (URL은 변경되지 않음) (마스킹과 캡슐화 비슷)

4. CSR 과 SSR 둘다 가능한데 목적에 따라 사용 방향이 정해짐.
-> CSR은 API를 통해 데이터를 불러오는 것을 client에게 다 보여주게 된다 (진행상황 및 데이터를 확인할 수 있음.), 
   SSR은 API를 통해 데이터를 불러오고 나서 Client에게 보여줌.(Client가 데이터를 확인할 수 없고 페이지가 Loading될 때까지 기다려야하는 불편함이 있음.)

5. Dynamic Routes
파일명을 대괄호 안에 적으면 변수를 모두 받음 ex) movies 폴더 안에 [id].tsx 라면 URL이 localhost:port/movies/(변수)를 모두 [id].tsx 페이지로 보내버림.

6. Detail (Router, Masking)
router.push에 데이터를 넣어 보낼 수 있고 as를 이용하면 표시되는 URL을 변경할 수 있다. (실제 데이터는 변경되지 않음.)

7. [...파일명]
파일명을 저렇게 설정해두면 슬래쉬(/)마다 끊어서 쿼리에 값이 배열로 들어가게 됨.(마치 split("/")와 비슷) 모든 URL을 Catch함
```