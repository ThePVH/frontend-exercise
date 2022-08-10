import React from 'react'
import { Link } from 'react-router-dom'

function ArticleCard() {
  return (
    <div className="flex gap-6">
      <img src="/images/img.png" alt="ArticleImg" />

      <div className="flex flex-col gap-4">
        {/* ArticleHeadline */}
        <h2 className="text-black text-3xl font-semibold">
          Why Do Cats Have Whiskers?
        </h2>
        {/* ArticleInfo */}
        <div className="flex gap-3">
          <p className="text-gray">Elisabeth Strain</p>
          <span>•</span>
          <p className="text-gray">02/12/17</p>
        </div>
        {/* ArticleText */}
        <p className="article__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit
          voluptatibus accusantium aspernatur consequatur quisquam, ex minus
          itaque sed veniam.
        </p>
        {/* ArticleFooter */}
        <div className="flex items-center gap-4">
          <Link to="/article/">Read whole article</Link>
          <p className="text-gray text-lg">0 comments</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
