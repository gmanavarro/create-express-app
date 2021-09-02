import inquirer, { Answers } from 'inquirer';
import chalk from 'chalk';

export function getPathConfirmationFromCli(path: string): Promise<boolean> {
  const confirmationQuestion = {
    type: 'confirm',
    name: 'confirmation',
    message: `The app will be installed at ${chalk.cyan(path)}. Continue?`,
    prefix: chalk.cyan('>'),
  };

  return inquirer
    .prompt([confirmationQuestion])
    .then(async (answers: Answers) => answers[confirmationQuestion.name]);
}
