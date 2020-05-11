import path from 'path';
import * as url from 'url'

const isDevelopment = process.env.NODE_ENV !== 'production';

export function getStatic(val: string) {
  if (isDevelopment) {
    return url.resolve(document.location.origin, `/static/${val}`);
  }
  return path.resolve(process.resourcesPath, 'static', val);
}
