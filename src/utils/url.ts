/**
 * Utility to handle base URL paths for GitHub Pages subdirectory deployment
 */

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/**
 * Prepends the base URL to a path
 * @param path - The path to prepend the base URL to (e.g., "/blog", "projects")
 * @returns The full path with base URL
 */
export function withBase(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Returns the base URL with trailing slash
 */
export function getBaseUrl(): string {
  return baseUrl;
}
