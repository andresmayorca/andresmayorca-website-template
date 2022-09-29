import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { HeaderStyles } from './HeaderStyles'
const Header = () => {
    return (
      <HeaderStyles>
          <div class="p-6 cursor-default rounded-lg bg-slate-800 hover:ease-in duration-300 hover:scale-105	hover:bg-cyan-700 relative overflow-hidden shadow-inner dark:shadow-lg">
            <div class="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 z-10 isolate">
              <h1 class="!mt-4 text-3xl font-semibold text-white dark:text-white md:hidden">Hi! I&apos;m your_name :D</h1>
            <div>
              <h1 class="text-3xl font-semibold hidden md:inline text-white">Hi! I&apos;m your_name :D</h1>
              <p class="dark:text-white/80 text-lg max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </div>
          </div>
      </HeaderStyles>
    )
  }


export default Header;