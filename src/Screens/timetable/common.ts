export function dateToString(date: Date): string {
  return (
    date.getFullYear() +
    '-' +
    pseudoPadStart((date.getMonth() + 1).toString(), 2, '0') +
    '-' +
    pseudoPadStart((date.getDate() + 1).toString(), 2, '0')
  );
}

function pseudoPadStart(string: string, length: number, padding: string) {
  return padding.repeat(length - string.length) + string;
}
