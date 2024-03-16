import React from 'react';
import { usePortfolioData } from './PortfolioContext';
export default function Experience() {
  const portfolioData = usePortfolioData();
  return (
    <>
      {portfolioData.success === true && (
        <section
          className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
          id="experience"
        >
          <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                Work Experience
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
                {portfolioData.user.about.subTitle}
              </p>
            </div>

            <div className="grid grid-cols-1 mt-8">
              <div className="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
                {portfolioData.user.timeline.map((item, index) => {
                  const startDate = new Date(item.startDate);
                  const endDate = new Date(item.endDate);
                  const date =
                    startDate.getFullYear() +
                    ' - ' +
                    (endDate.getFullYear() % 100);

                  return (
                    <React.Fragment key={item._id}>
                      <div
                        className={`${
                          index !== 0 && 'mt-12'
                        } ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900`}
                      >
                        <div className="grid md:grid-cols-2">
                          <div
                            className={
                              index % 2 === 0
                                ? 'md:text-end md:me-8 relative'
                                : 'text-start md:ms-8 relative md:order-2'
                            }
                          >
                            {item?.icon?.url && (
                              <img
                                src={item?.icon?.url}
                                className={
                                  index % 2 === 0
                                    ? 'rounded-full h-9 w-9 md:ms-auto'
                                    : 'rounded-full h-9 w-9 md:me-auto'
                                }
                                alt={item.company_name}
                              />
                            )}

                            <h5 className="my-2 font-semibold text-lg">
                              {item.company_name}
                            </h5>
                            <h6 className="text-sm mb-0">{date}</h6>
                          </div>

                          <div
                            className={
                              index % 2 === 0
                                ? 'ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0'
                                : 'ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1'
                            }
                          >
                            <h5 className="title mb-1 font-semibold">
                              {item.jobTitle}
                            </h5>
                            <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                              <ul>
                                {item.bulletPoints.map((point, index) => {
                                  return <li key={index}>{point}</li>;
                                })}
                              </ul>
                            </p>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
