export default function setEnvironmentVariables() {
  return {
    ...(process?.env?.['URL'] && { URL: process.env['URL'] }),
  };
}
