const uuidv4 = require('uuid/v4');

export function generateId(id?: string) {
  return id ? id : uuidv4();
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;