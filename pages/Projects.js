import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../layout/Layout'; 
import About from '../components/About/About';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';

export default function Home() {
  return (
    <Layout>
    <Navigation />
    <Header />
    <Projects />
    <Footer />
    </Layout>
  );
};
