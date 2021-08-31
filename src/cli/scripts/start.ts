import { Answers, prompt, Question } from 'inquirer';
import { existsSync, mkdirSync } from 'fs';
import chalk from 'chalk';
import { installProject } from './install';
import { deleteProject } from './delete';

function showFancyBanner() {
  console.log(
    chalk.blue(
      '                  _              __        __ _                          \n' +
        ' /\\   /\\___  _ __| |_ _____  __ / _\\ ___  / _| |___      ____ _ _ __ ___ \n' +
        " \\ \\ / / _ \\| '__| __/ _ \\ \\/ / \\ \\ / _ \\| |_| __\\ \\ /\\ / / _` | '__/ _ \\\n" +
        '  \\ V / (_) | |  | ||  __/>  <  _\\ \\ (_) |  _| |_ \\ V  V / (_| | | |  __/\n' +
        '   \\_/ \\___/|_|   \\__\\___/_/\\_\\ \\__/\\___/|_|  \\__| \\_/\\_/ \\__,_|_|  \\___|\n' +
        '                                                                         ',
    ),
  );
  console.log(
    chalk.bold(
      'This tool will initialize an Express application with default development configuration.\n',
    ),
  );
}

export function start() {
  showFancyBanner();
  const pathInputQuestion: Question = {
    type: 'input',
    name: 'path',
    message:
      'Please, enter the project destination directory (leave empty to use the current directory):\n',
  };

  prompt([pathInputQuestion]).then(async (answers: Answers) => {
    const path = `${process.cwd()}/${answers[`${pathInputQuestion.name}`]}`;
    if (!existsSync(path)) {
      mkdirSync(path);
    }
    await installProject(path)
      .then()
      .catch((error) => {
        console.error(error);
        deleteProject(path);
        // TODO - Remove project destination directory and all its content
      });
  });
}
