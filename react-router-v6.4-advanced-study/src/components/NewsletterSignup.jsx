import { useRef } from 'react';
import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const emailEl = useRef();

  /*-양식 제출을 직접 트리거하는 데 사용되거나 (컴포넌트 안에서 "loader"를 직접 트리거할 때도 사용됩니다)
      fetcher.Form을 통해 양식을 구축하는 데 사용
      페이지 전환 등이 없는 대신 요청이 내부에서 전송되며 요청을 전송할 특정 페이지를 대상으로 할 수 있어요*/
  /*fetcher 기능은 페이지 전환 없이 요청을 보내고 싶은 페이지에 적합합니다
예를 들어 블로그 게시물 내에서 뉴스레터를 구독하는 경우 이 페이지를 벗어나고 싶지 않겠죠
이럴 때 fetcher를 통해 내부에서 요청을 전송하면 됩니다*/
  const fetcher = useFetcher();

  function signupForNewsletterHandler(event) {
    event.preventDefault();
    const enteredEmail = emailEl.current.value;
    // could validate input here
    fetcher.submit(
      // better: use fetcher.Form instead
      { email: enteredEmail },
      { method: 'post', action: '/newsletter' }
    );
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up for our weekly newsletter</h2>
      <form onSubmit={signupForNewsletterHandler}>
        <input
          ref={emailEl}
          id="email"
          type="email"
          placeholder="Your email"
          aria-label="Your email address."
        />
        <button>Sign Up</button>
      </form>
    </section>
  );
}

export default NewsletterSignup;
