import { p } from '../../lib/great.js'
import { Hero } from './components/Hero.js'

export const Home = () => p({ children: Hero() })
