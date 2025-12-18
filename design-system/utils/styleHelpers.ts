// Helpers for inline style generation
export function px(val: number | string) {
  return typeof val === 'number' ? `${val}px` : val;
}

export function rem(val: number) {
  return `${val / 16}rem`;
}
