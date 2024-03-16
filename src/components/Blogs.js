import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../Data/data";
import * as Unicons from '@iconscout/react-unicons'

export default function Blogs(){
    return(
        <section className="relative md:py-24 py-16" id="blog">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Blogs or News</h3>

                <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">
                {blogData.map((item,index)=>{
                    return(
                        <div className="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden" key={index}>
                        <img src={item.image} alt=""/>

                        <div className="content p-6">
                            <Link to="" className="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5">{item.title}</Link>
                            <p className="text-slate-400 mt-3 text-[15px]">{item.desc}</p>
                            
                            <div className="mt-5">
                                <Link to="" className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1">Read More <Unicons.UilArrowRight width={16}/> </Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
    )
}