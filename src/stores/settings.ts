import { map } from 'nanostores'

interface Settings {
  cursor: { custom: boolean; style: string }
  sparks: { active: true; style: string }
}

export const settings = map<Settings>({
  cursor: { custom: true, style: 'default' },
  sparks: { active: true, style: 'default' },
})
