/** get hash from url without `#` */
export function getHashIdFromUrl(selector: string): string {
  const id = window.location.hash.replace('#', '')
  return id
}
