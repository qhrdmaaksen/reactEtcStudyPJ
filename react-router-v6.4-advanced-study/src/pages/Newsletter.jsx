export async function action({ request }) {
  const data = await request.formData();
  console.log(data.get('email'));

  // 백엔드 서버 등에 보내기.
}
