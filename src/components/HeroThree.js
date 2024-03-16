import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioData } from './PortfolioContext';

export default function HeroThree() {
  const portfolioData = usePortfolioData();
  return (
    <>
      {portfolioData.success === true && (
        <section
          className="relative table w-full lg:py-60 py-36 bg-[var(--image-url)] bg-no-repeat bg-center bg-cover"
          id="home"
          style={{
            '--image-url': `url(${portfolioData.user.about.avatar.url})`,
            backgroundImage: `url(${portfolioData.user.about.avatar.url})`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40"></div>
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-5 relative">
              <div
                className="rounded-full h-28 w-28 mx-auto wow animate__animated animate__fadeInUp overflow-hidden"
                data-wow-delay=".1s"
              >
                <img
                  src={portfolioData.user.about.avatar.url}
                  alt={portfolioData.user.about.name}
                  className="w-full object-cover object-center"
                />
              </div>

              <h4
                className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal text-white my-4 wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
              >
                {portfolioData.user.about.name}
              </h4>
              <p
                className="text-white/50 max-w-xl mx-auto wow animate__animated animate__fadeInUp"
                data-wow-delay=".5s"
              >
                {portfolioData.user.about.description}
              </p>

              <div
                className="mt-6 wow animate__animated animate__fadeInUp"
                data-wow-delay=".7s"
              >
                <Link
                  to=""
                  className="btn rounded-md bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"
                  type="submit"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
