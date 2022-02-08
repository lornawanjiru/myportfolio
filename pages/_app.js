import '../styles/globals.css'
import Layout from '../components/Layout'
import "@fontsource/aileron"
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import App from 'next/app';



class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Layout>
        
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    );
  }
}

export default MyApp;