import { useState, useRef } from 'preact/hooks'

type tabType = 'screenshots' | 'features' | 'about'

export default function useProjectTabs() {
  const [tab, setTab] = useState<tabType>('screenshots')
  const tabsRef = useRef<HTMLDivElement>(null)

  return { tab, setTab, tabsRef }
}
