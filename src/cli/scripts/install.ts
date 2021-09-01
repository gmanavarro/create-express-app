import * as childProcess from 'child_process';
import util from 'util';
import chalk from 'chalk';
import ora from 'ora';
import { existsSync, mkdirSync } from 'fs';
import { dependencies, devDependencies } from '../dependencies';

const exec = util.promisify(childProcess.exec);

async function executeCommand(command: string, loadingMessage: string) {
  const spinner = ora({ color: 'blue', text: loadingMessage, interval: 100 });
  spinner.start();
  const { stderr } = await exec(command);
  if (stderr) {
    spinner.stop();
    console.error(`Error ${loadingMessage.toLowerCase()}`);
    console.error(stderr);
    throw stderr;
  }
  spinner.succeed();
}

export async function installProject(path: string) {
  if (!existsSync(path)) {
    mkdirSync(path);
  }

  console.log(chalk.bold('\nPlease wait, this may take a few minutes...\n'));

  await executeCommand(`git init ${path}`, 'Initializing git repository');

  await executeCommand(
    `npm i --prefix ${path} ${dependencies.join(' ')}`,
    'Installing dependencies',
  );

  await executeCommand(
    `npm i -D --prefix ${path} ${devDependencies.join(' ')}`,
    'Installing dev dependencies',
  );

  console.log(`\nProject created at ${chalk.cyan(path)}`);
}
