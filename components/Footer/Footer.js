import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { AiFillGithub, AiFillProject, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare, AiFillYoutube, AiFillEye, AiFillBook } from 'react-icons/ai'
import { FooterStyles } from './FooterStyles'
import { DiCssdeck } from 'react-icons/di'

const Footer = () => {
    return (
        <FooterStyles>
        <div class="flex flex-col justify-center items-center">
            <div class="mb-8 text-sm text-gray-500">2022 © Your name</div>
        </div>
        </FooterStyles>
    )
  }


export default Footer;