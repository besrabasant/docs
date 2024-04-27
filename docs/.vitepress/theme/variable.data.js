import { CURRENT_VERSION } from '../config/common'
import fs from 'node:fs'
import YAML from 'js-yaml'

const getVariate = (variatePath) => {
  let variate = {}
  if (fs.existsSync(variatePath)) variate = YAML.load(fs.readFileSync(variatePath), 'utf8')
  return variate
}

export default {
  watch: ['../../../docs/**/variates.yml'],
  load (watchedFiles) {
    return watchedFiles.map((file) => {
      console.log('file', file)
      return getVariate(file)
    })
  }
}