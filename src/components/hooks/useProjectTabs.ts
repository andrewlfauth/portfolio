import { useState, useRef } from 'preact/hooks'

export default function useProjectTabs() {
  const [tab, setTab] = useState('screenshots')
  const tabsRef = useRef<HTMLDivElement>(null)

  return { tab, setTab, tabsRef }
}
