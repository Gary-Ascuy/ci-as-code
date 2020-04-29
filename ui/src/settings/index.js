import url from 'url'

export function getBackendUrl() {
  return window.backendUrl
}

export function buildUrl(to) {
  return url.resolve(getBackendUrl(), to)
}
