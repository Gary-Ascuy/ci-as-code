import nconf from 'nconf'

nconf.argv().env()
  .file({ file: 'src/settings/defaults.json' })

export function get(key) {
  return nconf.get(key)
}

export default nconf
