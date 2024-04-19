export function uniqueId(): string {
  let date = new Date();
  return date.getTime().toString();
}
