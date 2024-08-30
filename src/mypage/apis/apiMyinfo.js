import apiRequest from "../../commons/libs/apiRequest";
import cookies from 'react-cookies';

// 회원 정보 저장
export const save = (seq, form) =>
  saveProcess(`/mypage/profile/${seq}`, 'PATCH', form);

function saveProcess(url, method, form) {
  console.log('확인')
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        console.log('확인')
        const res = await apiRequest(url, method, form);
        if (res.status === 201) {
          resolve(res.data.data);
          return;
        }
          console.log('확인')
        reject(res.data);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    })();
  });
}


