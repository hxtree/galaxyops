export function toPojoInternal(obj: any, visited: Set<any>): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (visited.has(obj)) {
    return {}; // Handle circular reference
  }

  visited.add(obj);

  if (Array.isArray(obj)) {
    const resultArray = obj.map((item) => toPojoInternal(item, visited));
    visited.delete(obj);
    return resultArray;
  }

  const result: { [key: string]: any } = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = toPojoInternal(obj[key], visited);
    }
  }

  visited.delete(obj);

  return result;
}

/**
 * toPojo
 * @param obj
 * @returns
 */
export function toPojo(obj: any): any {
  const visited = new Set<any>();
  return toPojoInternal(obj, visited);
}

export function isPojo(obj: any): boolean {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  return Object.getPrototypeOf(obj) === Object.prototype;
}
