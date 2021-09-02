import * as childProcess from 'child_process';
import util from 'util';
import chalk from 'chalk';
import ora from 'ora';
import { existsSync } from 'fs';
import { mkdir } from 'fs/promises';
import { dependencies, devDependencies } from '../dependencies';

const exec = util.promisify(childProcess.exec);

async function executeCommand(
  command: string,
  loadingMessage: string,
): Promise<void> {
  const spinner = ora({ color: 'cyan', text: loadingMessage, interval: 100 });
  spinner.start();
  const { stderr } = await exec(command);
  if (stderr) {
    spinner.stop();
    console.error(`Error ${loadingMessage.toLowerCase()}`);
    throw Error(stderr);
  }
  spinner.succeed();
}

export async function installApp(path: string) {
  if (!existsSync(path)) {
    await mkdir(path);
  }

  // console.log(chalk.bold('\nPlease wait, this may take a while...\n'));

  await executeCommand(`git init ${path}`, 'Initializing git repository');

  await executeCommand(
    `npm i --prefix ${path} ${dependencies.join(' ')}`,
    'Installing dependencies',
  );

  await executeCommand(
    `npm i -D --prefix ${path} ${devDependencies.join(' ')}`,
    'Installing dev dependencies',
  );

  console.log(`\nApp installed at ${chalk.cyan(path)}`);
}
