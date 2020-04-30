export function data(value, error) {
  if (error) {
    return { code: 500, error, data: value }
  }

  return { code: 200, data: value }
}
