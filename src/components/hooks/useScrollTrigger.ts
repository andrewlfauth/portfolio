import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function useScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger)
  return gsap
}
