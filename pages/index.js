import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../layout/Layout'; 
import Header from '../components/Header/Header';
import Navigation from "../components/Navigation/Navigation";
import Content from "../components/Content/Content"
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <Layout>
    <Navigation />
    <Header />
    <Content />
    <Footer />
    </Layout>
  );
};
