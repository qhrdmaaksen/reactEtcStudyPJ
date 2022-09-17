// /news	개별 뉴스 항목
import Link from 'next/link'
import { Fragment } from 'react';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>뉴스 페이지 입니다.</h1>
      <ul>
        <li>
          <Link href="/news/firstNewsContent">첫 번째 뉴스 내용</Link>
        </li>
        <li>
          <Link href="/news/secondNewsContent">두 번째 뉴스 내용</Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default NewsPage;
