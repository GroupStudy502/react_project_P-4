import saveProcess from '../../commons/libs/saveProcess';

export default function cancel(orderNo) {
  return saveProcess(`/reservation/cancel/${orderNo}`);
}