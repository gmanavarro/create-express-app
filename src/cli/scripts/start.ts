import { Answers, prompt, Question } from 'inquirer';
import chalk from 'chalk';
import { installProject } from './install';
import { deleteProject } from './delete';
import { showCreateExpressAppBanner } from '../banners/cea';

export function start() {
  showCreateExpressAppBanner();

  console.log(
    chalk.bold(
      'This tool will initialize an Express application with default development configuration.',
    ),
  );

  const pathInputQuestion: Question = {
    type: 'input',
    name: 'path',
    message: 'Destination directory (leave blank to use cwd):',
  };

  prompt([pathInputQuestion]).then(async (answers: Answers) => {
    const path = `${process.cwd()}/${answers[`${pathInputQuestion.name}`]}`;

    try {
      await installProject(path);
    } catch (error) {
      deleteProject(path);
    }
  });
}
