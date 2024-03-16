import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioData } from './PortfolioContext';

export default function AddBanner() {
  const portfolioData = usePortfolioData();
  return (
    <>
      {portfolioData.success === true && (
        <section className="py-20 w-full relative">
          {/* YouTube video iframe as background */}
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${portfolioData.user.youtube[0].embedId}?autoplay=1&loop=1&controls=0&mute=1&playlist=${portfolioData.user.youtube[0].embedId}`}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              className="absolute inset-0"
              title={portfolioData.user.youtube[0].title}
            ></iframe>
          </div>

          <div className="absolute inset-0 bg-slate-900/70 z-10 pointer-events-none"></div>

          <div className="container relative z-20" style={{ zIndex: 20 }}>
            <div className="grid grid-cols-1 text-center">
              <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold relative z-30">
                I Am Available For Freelancer Projects.
              </h3>

              <p className="text-white/80 max-w-xl mx-auto text-[15px] relative z-30">
                {portfolioData.user.about.subTitle}
              </p>

              <div className="relative mt-8 z-30">
                <Link
                  to=""
                  className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
