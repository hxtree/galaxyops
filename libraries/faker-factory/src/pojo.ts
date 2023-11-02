/**
 * toPojo
 * @param obj
 * @returns
 */
export function toPojo(obj: any): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => toPojo(item));
  }

  const result: { [key: string]: any } = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = toPojo(obj[key]);
    }
  }

  return result;
}

export function isPojo(obj: any): boolean {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  return Object.getPrototypeOf(obj) === Object.prototype;
}
