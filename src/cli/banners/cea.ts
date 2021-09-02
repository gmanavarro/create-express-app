import chalk from 'chalk';

export function showCreateExpressAppBanner() {
  console.log(
    chalk.cyan(
      '                                __     \n' +
        '          _____________  ____ _/ /____ \n' +
        '         / ___/ ___/ _ \\/ __ `/ __/ _ \\\n' +
        '        / /__/ /  /  __/ /_/ / /_/  __/\n' +
        '  ___  _\\___/_/_  \\___/\\__,_/\\__/\\___/ \n' +
        ' / _ \\| |/_/ __ \\/ ___/ _ \\/ ___/ ___/ \n' +
        '/  ___>  </ /_/ / /  /  __(__  (__  )  \n' +
        '\\___/_/|_/ .___/_/___\\___/____/____/   \n' +
        '        /_// __ `/ __ \\/ __ \\          \n' +
        '          / /_/ / /_/ / /_/ /          \n' +
        '          \\__,_/ .___/ .___/           \n' +
        '              /_/   /_/                \n',
    ),
  );
}
