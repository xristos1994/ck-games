declare module "*.svg?inline" {
  const content: unknown;
  export default content;
}

declare module "*.svg" {
  const content: unknown;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
