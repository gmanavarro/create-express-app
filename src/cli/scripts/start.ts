import inquirer, { Answers } from 'inquirer';
// @ts-ignore
import directoryPrompt from 'inquirer-select-directory';
import chalk from 'chalk';
import { installProject } from './install';
import { deleteProject } from './delete';
import { showCreateExpressAppBanner } from '../banners/cea';
import { sanitizePath } from '../utils/sanitizePath';

export function start() {
  showCreateExpressAppBanner();

  console.log(
    chalk.bold(
      'This tool will initialize an Express application with default development configuration.',
    ),
  );
  const directoryQuestion = {
    type: 'directory',
    name: 'directoryPath',
    message: 'Select the directory at which the app will be created:',
    basePath: '.',
  };
  const appNameQuestion = {
    type: 'input',
    name: 'appName',
    message: 'App name:',
    default: 'my-new-express-app',
  };

  inquirer.registerPrompt(directoryQuestion.type, directoryPrompt);
  inquirer
    .prompt([directoryQuestion, appNameQuestion])
    .then(async (answers: Answers) => {
      const path: string = sanitizePath(`
        ${answers[directoryQuestion.name]}/${answers[appNameQuestion.name]}
      `);

      try {
        console.log('a');
        await installProject(path);
      } catch (error) {
        deleteProject(path);
      }
    });
}
