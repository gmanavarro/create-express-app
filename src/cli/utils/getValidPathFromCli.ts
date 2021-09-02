import inquirer, { Answers } from 'inquirer';
import { getValidPath } from './getValidPath';

export function getValidPathFromCli() {
  const appNameQuestion = {
    type: 'input',
    name: 'appName',
    message: 'App name:',
    default: 'my-new-express-app',
  };

  return inquirer
    .prompt([appNameQuestion])
    .then(async (answers: Answers) =>
      getValidPath(`${process.cwd()}/${answers[appNameQuestion.name]}`),
    );
}
