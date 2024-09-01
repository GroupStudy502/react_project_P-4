import requestData from "../requestData";

//찜하기
export const addWish = (seq, type) => requestData(`/wish/${type}/${seq}`);

//찜하기 해제
export const removeWish = (seq, type) => requestData(`/wish/${type}/${seq}`, 'DELETE');

// 찜한 목록 컨텐츠 번호(seq, rstrId)
export const getWishList = (type) => requestData(`/wish/${type}`);

// 찜 목록 조회
export const getList = (seq, search) => {
    search = search ?? {};
    let qs = Object.entries(search)
      .map(([k, v]) => `${k}=${v}`)
      .join('&');
  
    qs = qs ? `?${qs}` : qs;
  
    const url = `/wishrestaurant/list/${seq}${qs}`;
  
    return requestData(url);
  };

  