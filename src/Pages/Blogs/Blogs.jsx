import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BlogsCard from "./BlogsCard";
import { format, formatDistanceToNow } from "date-fns";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SeactionTitle from "../../Components/SeactionTitle";

const Blogs = () => {
    const [search, setSearch] = useState("");

    const axiosPublic = useAxiosPublic();
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs', search],
        queryFn: async () => {
            const res = await axiosPublic.get(`/blogs?search=${search}`)
            return res.data;
        }
    })

    const { data: blogFirst = {} } = useQuery({
        queryKey: ['blogFirst'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/blogsFirst`)
            return res.data;
        }
    })
    console.log(blogs)
    console.log(blogFirst)
    return (
        <div>
            <div className="flex  items-center justify-between" >
                <div className="flex flex-col justify-start items-start gap-4 my-7" >
                    <p className="text-[18px] text-center sriracha px-2 rounded-md text-white  -rotate-6 bg-[#076aa5] " >Bloogs</p>
                    <h2 className="text-3xl font-bold " >Explore Our All Blogs</h2>
                </div>
                <div>
                <label className="input input-bordered flex items-center gap-2 w-full">
                            <input type="text" onChange={e => setSearch(e.target.value)} className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>

                </div>
            </div>

            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-full p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full  hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        {/* <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" /> */}
                        <Link className="relative flex justify-center lg:h-[370px] border-2 object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
                            <Swiper
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}

                                modules={[Autoplay]}
                                className="mySwiper h-full"
                            >
                                <SwiperSlide>
                                    <div className="relative group">

                                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                            {/* love  */}
                                            {
                                                blogFirst?.date && <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                                                    {formatDistanceToNow(new Date(blogFirst?.date))} ago
                                                </button>
                                            }
                                        </div>

                                        <img width={300} height={370} className="h-[370px] w-full rounded-lg bg-black/40" src={blogFirst?.image?.[0] || 'https://source.unsplash.com/300x300/?macbook'} alt="card navigate ui" />
                                        <div className=" size-1 p-[3px]  flex justify-center items-center absolute top-3 right-1 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">

                                            <svg width={30} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-60.000000, -2079.000000)" fill="#0095FF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z" id="male-[#1364]"></path></g></g></g> </g></svg>

                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="relative group">

                                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                            {
                                                 blogFirst?.date && <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                                                 {formatDistanceToNow(new Date(blogFirst?.date))} ago
                                             </button>
                                            }
                                        </div>
                                        <img width={300} height={370} className="h-[370px] w-full rounded-lg bg-black/40" src={blogFirst?.image?.[1] || 'https://source.unsplash.com/300x300/?macbook'} alt="card navigate ui" />
                                        <div className=" size-1 p-[3px]  flex justify-center items-center absolute top-3 right-1 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">

                                            <svg width={30} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-60.000000, -2079.000000)" fill="#0095FF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z" id="male-[#1364]"></path></g></g></g> </g></svg>

                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="relative group">

                                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                            {
                                                     blogFirst?.date && <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                                                     {formatDistanceToNow(new Date(blogFirst?.date))} ago
                                                 </button>
                                            }

                                        </div>
                                        <img width={300} height={370} className="h-[370px] w-full rounded-lg bg-black/40" src={blogFirst?.image?.[2] || 'https://source.unsplash.com/300x300/?macbook'} alt="card navigate ui" />
                                        <div className=" size-1 p-[3px]  flex justify-center items-center absolute top-3 right-1 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">

                                            <svg width={30} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-60.000000, -2079.000000)" fill="#0095FF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z" id="male-[#1364]"></path></g></g></g> </g></svg>

                                        </div>
                                    </div>

                                </SwiperSlide>




                            </Swiper>
                            <img className="w-[160px] h-[160px] absolute -right-11 -top-11  z-50" src="https://i.ibb.co/5X056tj/best-seller-vectors-982952-8827-1-removebg-preview.png" alt="" />

                        </Link>
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline mb-11">This is Most Popular Blog!</h3>

                            <h3 className="text-[16px]  font-[500px] sm:text-2xl group-hover:underline group-focus:underline">{blogFirst?.title?.slice(0, 50)}</h3>
                            <span className="text-xs dark:text-gray-600">

                                {blogFirst?.date && format(new Date(blogFirst?.date), 'P')}

                            </span>
                            <p>{blogFirst?.content?.slice(0, 200)}.</p>
                        </div>
                    </a>

                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 " >
                {
                    blogs?.map(blog => <BlogsCard key={blog?._id} blog={blog} refetch={refetch} ></BlogsCard>)
                }
            </div>

        </div>

    );
};

export default Blogs;