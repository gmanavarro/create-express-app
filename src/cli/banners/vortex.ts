import chalk from 'chalk';

export function showVortexBanner() {
  console.log(
    chalk.blue(
      ' _    __              __                 _____         ____ __                             \n' +
        '| |  / /____   _____ / /_ ___   _  __   / ___/ ____   / __// /_ _      __ ____ _ _____ ___ \n' +
        '| | / // __ \\ / ___// __// _ \\ | |/_/   \\__ \\ / __ \\ / /_ / __/| | /| / // __ `// ___// _ \\\n' +
        '| |/ // /_/ // /   / /_ /  __/_>  <    ___/ // /_/ // __// /_  | |/ |/ // /_/ // /   /  __/\n' +
        '|___/ \\____//_/    \\__/ \\___//_/|_|   /____/ \\____//_/   \\__/  |__/|__/ \\__,_//_/    \\___/ \n' +
        '                                                                                           \n\n',
    ),
  );
}