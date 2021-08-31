import { series } from 'async';
import { exec } from 'child_process';
import chalk from 'chalk';
import ora, { Ora } from 'ora';
import { dependencies, devDependencies } from '../dependencies';

async function executeCommand(command: string) {
  await exec(command, (error) => {
    if (error) {
      throw error;
    }
  });
}

export async function installProject(path: string) {
  console.log(chalk.bold('Please wait, this may take a few minutes'));
  const loadingMessage = ora('Initializing git repository');
  series([
    async () => {
      loadingMessage.color = 'red';
      loadingMessage.start();
      await executeCommand(`git init ${path}`).catch((error) => {
        loadingMessage.stop();
        console.error('Error initializing git repository');
        console.error(error);
      });
    },
    async () => {
      loadingMessage.color = 'green';
      loadingMessage.text = 'Installing dependencies';
      await executeCommand(
        `npm i --prefix ${path} ${dependencies.join(' ')}`,
      ).catch((error) => {
        loadingMessage.stop();
        console.error('Error installing dependencies');
        console.error(error);
      });
    },
    async () => {
      loadingMessage.color = 'blue';
      loadingMessage.text = 'Installing dev dependencies';
      await executeCommand(
        `npm i -D --prefix ${path} ${devDependencies.join(' ')}`,
      ).catch((error) => {
        loadingMessage.stop();
        console.error('Error installing dev dependencies');
        console.error(error);
      });
    },
  ]);
}
