export function sanitizePath(path: string) {
  return path.replace(/\r?\n|\r/, '').trim();
}
