import { useLoaderData, defer, Await } from "react-router-dom";
import React, { Suspense } from "react";
import Posts from "../components/Posts";
import { getSlowPosts } from "../util/api";

function DeferredBlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      {/*Await 컴포넌트가 작동하려면 Suspense 컴포넌트로 래핑해야 함
        React Router에서도 Suspense 컴포넌트를 사용해 대기 중인 데이터가 로딩될 때까지 폴백을 보여줍니다
        Suspense에 fallback 프로퍼티를 추가하고 "로딩 중..." 등의 메시지를 입력할게요
        로딩 아이콘이나 로딩 폴백 코드를 여기에 입력하셔도 됩니다*/}
      <Suspense fallback={<p>로딩중...</p>}>
        {/*Await 그 안에 특별한 프로퍼티 resolve를 가져요 resolve 프로퍼티에 함수에 대한 포인터를 전달합니다
          여기서 연기하고 있는 함수는 로딩 함수이니까 loaderData.posts가 되겠네요
          loaderData라는 객체를 defer를 통해 반환하고 있으며 이 객체에는 posts라는 키가 있고
          posts 키는 느리게 하는 함수를 가지고 있잖아요 그 함수에 대한 포인터를 전달해서
          Await 컴포넌트에서 리졸브를 대기하는 거죠 여기에 errorElement를 추가해서 데이터 로딩에 실패했을 때
          무슨 요소를 나타낼지 지정*/}
        <Await
          resolve={loaderData.posts}
          errorElement={<p>에러 로딩 블로그 포스트</p>}
        >
          {/*데이터가 로딩을 마쳤을때 실행될 함수 정의,
            이 함수가 loadedPosts를 받고 게시물을 로딩하는 함수 getSlowPosts 함수의 실행을 완료하면
            React Router에 의해 실행될 거예요 그러면 Posts 컴포넌트를 렌더링하는데 blogPosts 프로퍼티로 loadedPosts를 받겠습니다
            데이터 로딩이 완료되면 블로그 컨텐츠를 보여줌*/}
          {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default DeferredBlogPostsPage;

export async function loader() {
  /*지금은 하나의 데이터 게시물 리스트만 로딩하고 있는데 이걸 연기하기 위해서는
defer로 래핑하고 객체로 만든 다음 posts라는 키를 입력하면 posts 키에 저장된 값들이
getSlowPosts 호출의 결과가 되겠네요 호출이 반환하는 프로미스는 defer로 래핑한 객체의 posts 안에 저장됨*/
  return defer({ posts: getSlowPosts() });
}
