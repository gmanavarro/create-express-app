import rimraf from 'rimraf';

export function deleteProject(path: string) {
  rimraf(path, (error) => {
    if (error) {
      console.error('Error deleting project directory.');
      console.error(error);
    }
  });
}
