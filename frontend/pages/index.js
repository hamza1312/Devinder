import Head from "next/head";
import Image from "next/image";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useToast } from "@chakra-ui/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

export default function Home({ data }) {
  const [browsingState, setBrowsingState] = React.useState(0);
  const toast = useToast();
  const currentData = data.data[browsingState];

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const authenticated = localStorage.getItem("token");
    }
  }, []);
  const likePost = async (postId) => {
    await fetch("http://localhost:9000/post/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        postId,
      }),
    }).then(res => res.json()).then((data)=>{
      
      console.log(data)
    });
    
  };
  const nextPost = () => {
    if (data.data.length > browsingState + 1) {
      setBrowsingState(browsingState + 1);
    } else {
      toast({
        title: "There is no more posts!",
        status: "error",
        variant: "left-accent",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const previousPost = () => {
    if (browsingState != 0) {
      setBrowsingState(browsingState - 1);
    } else {
      toast({
        title: "There is no more posts!",
        status: "error",
        variant: "left-accent",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Devinder | Home Page</title>
        <meta name="description" content="Devinder a dating app for Devs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen bg-gray-700 h-screen lg:px-36 px-8 py-8 flex flex-col items-center justify-center">
        <div className="rounded-lg   bg-gray-900  text-white p-8 py-6 lg:w-3/6 t w-full  ">
          <h1 className="text-3xl font-bold text-green-500 font-mono mb-6">
            {currentData.title}
          </h1>

          <iframe
            src={`https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=coffeescript&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=JetBrains+Mono&fs=15.5px&lh=163%25&si=false&es=2x&wm=false&code=${currentData.code}`}
            sandbox="allow-scripts allow-same-origin"
            className="w-full h-fit outline-none"
          ></iframe>
          <div className="w-full flex flex-row justify-evenly mt-6">
            <button onClick={()=>likePost(currentData._id)} className="bg-blue-600 w-fit p-8 flex flex-row items-center justify-center  cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              <ThumbUpIcon />
              <p className="ml-3 font-mono font-bold">
                {currentData.likes.length}
              </p>
            </button>
            <button className="bg-gray-600 w-fit p-8 flex flex-row items-center justify-center  cursor-pointer  text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2">
              <ThumbDownIcon />
              <p className="ml-3 font-mono font-bold">
                {currentData.dislikes.length}
              </p>
            </button>
          </div>
          <div className="w-full mt-8 bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
            <div
              className="bg-blue-600 h-2.5 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
              style={{
                width: `${
                  (currentData.likes.length / currentData.dislikes.length) * 100
                }%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
          <div className="w-full flex flex-row items-center justify-evenly font-mono mt-6">
            <button
              onClick={previousPost}
              className="bg-gray-600 w-fit  flex flex-row items-center justify-center  cursor-pointer  text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center "
            >
              <ArrowBackIcon className="text-lg mr-1" />
              Previous
            </button>
            <h1 className="text-sm font-mono text-blue-400">
              Post Id: {currentData._id}
            </h1>
            <button
              onClick={nextPost}
              className="bg-gray-600 w-fit  flex flex-row items-center justify-center  cursor-pointer  text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center "
            >
              <ArrowForwardIcon className="text-lg mr-1" />
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:9000/feed");

  const data = await res.json();
  return { props: { data } };
}
