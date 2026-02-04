export function format(templateString: string, ...args: any[]): string {
  let result = templateString;
  args.forEach(arg => {
    result = result.replace('%s', String(arg));
  });
  return result;
}