import rimraf from 'rimraf';

export function deleteApp(path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    rimraf(path, (error) => {
      if (error) {
        console.error('Error deleting app directory.');
        console.error(error);
        reject();
      }
      resolve();
    });
  });
}
