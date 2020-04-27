export function data(data, error) {
  if (error) {
    return { code: 500, error, data }
  }

  return { code: 200, data }
}