export interface IRequest {
  requestId: string;
  name: string;
  surname: string;
  birthDate: string;
  amount: string;
  purpose: string;
  status: EStatus;
  createdAt: string;
  updatedAt: string;
}

enum EStatus {
  PENDING,
  APPROVED,
  REJECTED,
}

// enum EStatusConvert {
//   PENDING = 'В ожидании',
//   APPROVED = '',
//   REJECTED = '',
// }
