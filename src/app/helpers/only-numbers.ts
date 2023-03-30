export function toOnlyNumbers(value: string): string {
  return value.replace(/\D/g, "");
}
