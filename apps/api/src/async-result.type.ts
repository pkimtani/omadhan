import { CommonResult } from './common-result.type';

export type AsyncResult<T> = Promise<CommonResult<T>>;
