import { industries } from './industries'
import { innovationDomains } from './innovation'

export const allSectors = [
  ...industries.map((item) => ({ ...item, type: 'industry' })),
  ...innovationDomains.map((item) => ({ ...item, type: 'innovation' })),
]

export function getSectorByKey(key) {
  return allSectors.find((sector) => sector.key === key)
}
