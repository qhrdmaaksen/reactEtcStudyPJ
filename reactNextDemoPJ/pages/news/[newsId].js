import {useRouter} from 'next/router'

const DetailPage = () => {
	const router = useRouter()
	router.query.newsId	/*newsId 는 []안에 파일명이된다*/
	console.log(router.query.newsId)	/*라우터는 페이지를 처음 렌더링할때 즉시 실행되며 두번째로 확인할때 url 에 구체적인 newsId 를 얻음*/
	/*뉴스를 가져올 수 있는 데이터베이스나 백엔드 API 가 있다면 백엔드 API 에 요청을 보내서 newsId에 해당하는 뉴스 항목을 가져올 수 있음*/
	const newsId = router.query.newsId

	return <h1>중요한 사이트입니다.</h1>
}
export default DetailPage;