import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import styles from '../../styles/Home.module.css'
// react icons
import { AiFillGithub, AiFillBook, AiFillProject, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di' 
import { ProjectsStyles } from './ProjectsStyles'
import { projects } from '../../constants/constants'

const Projects = () => {
    return (
    <ProjectsStyles>
    <div class="sm:w-full sm:h-full grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-3">
      {projects.map((p,i) => {
        return (
            <Link href={p.source} key={i} target="_blank">
        <a href={p.source} target="_blank" class="group h-full w-full bg-neutral-700 hover:bg-indigo-500 hover:ring-sky-500 hover:rotate-6 hover:ease-in-out duration-300 block rounded-lg text-white p-6 shadow" rel="noreferrer">
            <div class="flex flex-col items-center space-y-6">
            <div>
                <AiFillBook size="3rem" />
            </div>
            <div>
               <h1 class="text-gray-300 text-3xl font-bold">{p.title}</h1>   
            </div>
            <div class="prose text-white prose-a:text-white">
                <p>{p.description} <br /> </p>
                <div>
                <h1 class="text-gray-300 text-lg font-bold">Technologies for this Project</h1>
                </div>
                <p>{p.tags}</p>
            </div>
        </div></a>
        </Link>
        );
      })}
    </div>
        </ProjectsStyles>)
};


export default Projects;