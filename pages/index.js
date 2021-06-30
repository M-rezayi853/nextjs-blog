import React from 'react'
import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Welcome to Mahdi's blog!</title>
        <meta 
          name='description' 
          content='I post about programming and web development.' 
        />
      </Head>

      <Hero />

      <FeaturedPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    },
    // revalidate: 60
  }
}

export default HomePage
