export const withBasePath = (path: string) => {
  if (!path || /^(https?:|data:|blob:)/.test(path)) return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
};
