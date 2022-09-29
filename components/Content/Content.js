import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { ContentStyles } from './ContentStyles'
import { AiFillGithub, AiFillProject, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare, AiFillYoutube, AiFillEye, AiFillBook } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'
import About from '../About/About'

const Content = () => {
    return (
    <ContentStyles>
    <div class="sm:w-full sm:h-full grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-3">
      <Link href="/About">
        <a href="" class="group h-full w-full bg-neutral-700 hover:bg-indigo-500 hover:ring-sky-500 hover:rotate-6 hover:ease-in-out duration-300 block rounded-lg text-white p-6 shadow" rel="noreferrer">
            <div class="flex flex-col items-center space-y-6">
            <div>
                <AiFillBook size="3rem" />
            </div>
            <div>
               <h1 class="text-gray-300 text-3xl font-bold">Know more about me</h1>   
            </div>
            <div class="prose text-white prose-a:text-white">
                <p>A little introduction about you...</p>
            </div>
        </div></a>
        </Link>
        <Link href="/Projects">
        <a href="" class="group h-full w-full bg-neutral-700 hover:bg-yellow-500 hover:ring-sky-500 hover:rotate-6 hover:ease-in-out duration-300 block rounded-lg text-white p-6 shadow" rel="noreferrer">
        <div class="flex flex-col items-center space-y-6">
            <div>
                <AiFillProject size="3rem" />
            </div>
            <div>
               <h1 class="text-gray-300 text-3xl font-bold">Projects</h1>   
            </div>
            <div class="prose text-white prose-a:text-white">
                <p>Here are my personal projects, blockchain projects and web2 projects...</p>
            </div>
        </div></a>
        </Link>

        {/* <Link href="https://worldcoin.org/?ref=miguel" target="_blank" class="group h-full w-full bg-neutral-700 hover:bg-sky-500 hover:ring-sky-500 hover:rotate-6 hover:ease-in-out duration-300 block rounded-lg text-white p-6 shadow" rel="noreferrer">
        <div class="flex flex-col items-center space-y-6">
            <div>
                <AiFillTwitterSquare size="3rem" />
            </div>
            <div>
               <h1 class="text-gray-300 text-3xl font-bold">Top Tweets</h1>   
            </div>
            <div class="prose text-white prose-a:text-white">
                <p>Here are the best tweets and threads I&apos;ve written, personal, professional and educational tweets...</p>
            </div>
        </div>
        </Link> */}

    </div>
    </ContentStyles>
      
    )
  }


export default Content;