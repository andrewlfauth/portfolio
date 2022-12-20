import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function useScrollTrigger() {
  const a = gsap
  a.registerPlugin(ScrollTrigger)
  return a
}
