import chalk from 'chalk';
import { installApp } from './installApp';
import { deleteApp } from './deleteApp';
import { showCreateExpressAppBanner } from '../banners/cea';
import { getCommandArguments } from '../utils/getCommandArguments';
import { getValidPath } from '../utils/getValidPath';
import { getPathConfirmationFromCli } from '../utils/getPathConfirmationFromCli';

export async function start() {
  showCreateExpressAppBanner();
  const commandArguments = getCommandArguments();
  let path = process.cwd();

  console.log(
    chalk.bold(
      'This tool will install an Express application with default development configuration and dependencies.',
    ),
  );

  if (commandArguments.length) {
    path = getValidPath(`${path}/${commandArguments[0]}`);
  }

  if (await getPathConfirmationFromCli(path)) {
    try {
      await installApp(path);
    } catch (error) {
      console.error(error);
      await deleteApp(path);
    }
  }
}
