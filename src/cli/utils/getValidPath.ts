import isValidPath from 'is-valid-path';

export function getValidPath(path: string) {
  const sanitizedPath = path.replace(/\r?\n|\r/, '').trim();

  if (!isValidPath(sanitizedPath)) {
    throw Error('Invalid path');
  }
  return sanitizedPath;
}
