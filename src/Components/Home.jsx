import React from "react";
import Header from "./Header";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";
import Navbar from "./Navbar";
import Latest from "./Latest";
import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews";

function Home(props) {
   
  const news = useLoaderData()
  console.log(news)
   
  return (
    <div>
      <Header></Header>
      <Latest></Latest>
      <Navbar></Navbar>

      <hr className="border border-black" />

      <div className="grid lg:grid-cols-4 gap-6 mt-10">
        <div className=" ">
          <LeftNavbar></LeftNavbar>
        </div>


        <div className="lg:col-span-2 ">
          {
            news.length && news?.map(aNews => <SingleNews key={aNews.id} news={aNews}></SingleNews>)
          }
        </div>


        <div className="">
          <RightNavbar></RightNavbar>
        </div>
      </div>
    </div>
  );
}

export default Home;
