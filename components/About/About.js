import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { AboutSyles } from './AboutStyles'
const About = () => {
    return (
      <AboutSyles>
        <div class="sm:w-full text-white p-6 shadow" rel="noreferrer">
        <div class="cursor-defaul items-center space-y-6">
            <div class="cursor-default">
               <h1 class="text-gray-300 text-3xl font-bold">About me</h1>   
            </div>
            <div class="cursor-default text-white prose-a:text-white w-full">
              <p class="text-lg">About you.
              <br /> More about You.
              </p>
            </div>
            </div>
        </div>
      </AboutSyles>
    )
  }


export default About;