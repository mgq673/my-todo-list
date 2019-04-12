export const enum ResponseStatus {
  OK = 'ok',
  FAIL = 'fail',
};

export class Response {
  status: ResponseStatus;
  result: any;
}
