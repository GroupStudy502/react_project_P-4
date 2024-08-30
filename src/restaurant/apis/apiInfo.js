import requestData from '../../commons/libs/requestData';
import { getList } from '../../board/apis/apiBoard';

// 목록 조회
export const apiList = (search) => {
  search = search ?? {};

  const qs = [];
  for (const [k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/restaurant/list';
  if (qs.length > 0) url += `?${qs.join('&')}`;

  return requestData(url);
};

// 상세 조회
export const apiGet = (rstrId) => requestData(`/restaurant/info/${rstrId}`);

export const apiWishlist = (page = 1) => requestData(`/restaurant/wish?page=${page}&limit=10`);

// 식당 후기 조회
export const apiReview = (rstrId, page = 1) => {
  return getList('review', { page, num1: rstrId });
};
