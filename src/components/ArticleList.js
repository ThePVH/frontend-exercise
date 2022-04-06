import React from "react";
import { Link } from "react-router-dom";

function ArticleList() {
  return (
    <section className="container mx-auto p-6 pt-16">
      <h1 className="text-4xl font-bold">Recent articles</h1>

      <div className="flex items-center">
        <img src="/images/img.png" alt="" className="my-4 w-68" />
        <div className="flex flex-col ml-8">
          <Link to="/article/:id">
            <h2 className="text-2xl font-medium mb-3 hover:underline">
              Why Do Cats Have Whiskers?
            </h2>
          </Link>
          <div className="flex items-center mb-3">
            <p className="text-gray">Elisabeth Strain</p>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-3"
            >
              <circle cx="2" cy="2" r="2" fill="#6C757D" />
            </svg>

            <p className="text-gray">02/13/17</p>
          </div>
          <p className="text-darkGray w-3/6 mb-4">
            A cat's whiskers — or vibrissae — are a well-honed sensory tool that
            helps a cat see in the dark and steer clear of hungry predators.
            Whiskers are highly sensitive tactile hairs that grow in patterns on
            a cat's muzzle, above its eyes and elsewhere on its body, like the
            ears, jaw and forelegs
          </p>
          <div className="flex align-center">
            <Link to="/article/:id" className="text-blue mr-4 hover:underline">
              Read whole article
            </Link>
            <p className="text-gray">0 comments</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleList;
