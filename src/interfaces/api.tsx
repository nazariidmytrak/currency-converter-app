export interface RequestOptionsType {
  method: string;
  redirect?: RequestRedirect;
  headers: Headers;
}

export interface ResponseObject {
  [key: string]: number;
}
