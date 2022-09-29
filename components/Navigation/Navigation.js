import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { NavigationStyles, SocialIcons } from "./NavigationStyles"

// react icons
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

const Navigation = () => {
    return (
        <NavigationStyles>
            <nav class="">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 ">
                    <Link href="/">
                        <a href="" class="flex flex-shrink-0">
                        <Image class="rounded-full hidden lg:block" src="/images/Logo.png" width={40} height={40} alt="Your Company" />
                        </a>
                    </Link>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div>
                        <SocialIcons href="https://github.com/" target="_blank">
                            <AiFillGithub size="2rem" />
                        </SocialIcons>
                    </div>
                    <div>
                        <SocialIcons href="https://twitter.com/" target="_blank">
                            <AiFillTwitterSquare size="2rem" />
                        </SocialIcons>
                    </div>
                    <div>
                        <SocialIcons href="https://www.youtube.com/" target="_blank">
                            <AiFillYoutube size="2rem"/>
                        </SocialIcons>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        </NavigationStyles>
    )
  }


export default Navigation;