import { map } from 'nanostores'

interface Settings {
  cursor: { custom: boolean; style: string }
}

export const settings = map<Settings>({
  cursor: { custom: true, style: 'default' },
})
