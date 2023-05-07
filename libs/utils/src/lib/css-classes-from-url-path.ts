export default function cssClassesFromUrlPath(urlPath: string): string[] {
  const parts = urlPath
    .replace(/^\/|\/$/g, '')
    .split('/')
    .filter(Boolean);

  let css = 'page';
  return parts.map((part) => {
    css += `-${part}`;
    return css;
  });
}
