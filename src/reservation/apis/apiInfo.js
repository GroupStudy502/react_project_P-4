import requestData from '../../commons/libs/requestData';

// 목록 조회
export const apiList = (search) => {
  search = search ?? {};

  const qs = [];
  for (const [k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/reservation/list';
  if (qs.length > 0) url += `?${qs.join('&')}`;
  return requestData(url);
};

// 상세 조회
export const apiGet = (orderNo) => requestData(`/reservation/info/${orderNo}`);

// 예약 내역 삭제
export const deleteData = (orderNo) =>
  requestData(`/reservation/delete/${orderNo}`, 'DELETE');
