import React from 'react'
import ArticleCard from '../components/ArticleCard'

function Homepage() {
  return (
    <main className="flex justify-center">
      <div className="container py-14">
        <h1 className="text-black text-5xl font-semibold pb-14">
          Recent articles
        </h1>
        <ArticleCard />
      </div>
    </main>
  )
}

export default Homepage
