import Head from "next/head";
import { useRouter } from "next/router"
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useToast } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { pojoaque } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from '@chakra-ui/react'
import React from "react";
import io from "socket.io-client"

export default function Home({ data }) {
  const [browsingState, setBrowsingState] = React.useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter();
  const [postTitle, setPostTitle] = React.useState(null);
  const [postCode, setPostCode] = React.useState(null);
  const toast = useToast();
  const currentData = data.data[browsingState];



  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const authenticated = localStorage.getItem("token");
      const socket = io.connect("http://localhost:9000");
      socket.on("newPost", (post) => {
       
        data.data = [...data.data, post.fullDocument]
      })
      if (!authenticated) {
        location.href = "/login"
      }
      const state = localStorage.getItem("state");
      if (state) {
        const numbered_state = parseInt(state);
        if(numbered_state >= data.data.length){
         
          setBrowsingState(data.data.length - 1);
          localStorage.setItem( "state",data.data.length - 1);
        }
        else{
          setBrowsingState(state);
        }
      }
    }


  }, []);
  const likePost = async (postId) => {
    await fetch("http://localhost:9000/post/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == "ERROR") {
          toast({
            title: data.message,
            status: "error",
            varient: "left-accent",
            duration: 9000,
            isClosable: true,
          })
        }
        else {
          router.replace(router.asPath);
        }
      });
  };
  const dislikePost = async (postId) => {
    await fetch("http://localhost:9000/post/dislike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId,
      })
    }).then((res) => res.json())
      .then((data) => {
        if (data.code == "ERROR") {
          toast({
            title: data.message,
            status: "error",
            varient: "left-accent",
            duration: 9000,
            isClosable: true,
          })
        }
        else {
          router.replace(router.asPath);
        }



      })

  }
  const createPost = async () => {
  


    await fetch('http://localhost:9000/post', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token")
      },
      body: JSON.stringify({
        title: postTitle,
        code: postCode
      })
    }).then((res) => res.json()).then((data) => {

      onClose();
      if (data.code == "ERROR") {
        toast({
          title: "Duplicated Code!",
          status: "error",
          varient: "left-accent",
          duration: 9000,
          isClosable: true,
        })
      }
    })

  }
  const nextPost = () => {
    if (data.data.length - 1 > browsingState || data.data.length  == browsingState) {
      setBrowsingState(browsingState + 1);
      localStorage.setItem("state", browsingState + 1)
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
      localStorage.setItem("state", browsingState - 1)
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
          <h1 className="text-3xl font-bold text-blue-500 font-mono mb-6 ">
            {currentData.title}
          </h1>
          <p className="mb-2 font-mono font-bold">By: <span className="p-2 rounded-lg bg-blue-600 bg-gradient-to-r from-blue-700 via-blue-600 text-gray-200 cursor-pointer ">{currentData.creator}</span></p>

          <SyntaxHighlighter wrapLines showLineNumbers className="font-mono  rounded-lg mt-6 "language="javascript" style={pojoaque}>
            {currentData.code}
          </SyntaxHighlighter>
          <div className="w-full flex flex-row justify-evenly mt-6">
            <button
              onClick={() => likePost(currentData._id)}
              className="bg-blue-600 w-fit p-8 flex flex-row items-center justify-center  cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              <ThumbUpIcon />
              <p className="ml-3 font-mono font-bold">
                {currentData.likes.length}
              </p>
            </button>
            <button onClick={() => dislikePost(currentData._id)} className="bg-gray-600 w-fit p-8 flex flex-row items-center justify-center  cursor-pointer  text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2">
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
                width: `${(currentData.likes.length / currentData.dislikes.length) * 100
                  }%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
          <div className="w-full flex flex-row items-center justify-between font-mono mt-6">
            <button
              onClick={previousPost}
              className="bg-gray-600 w-fit  flex flex-row items-center justify-center  cursor-pointer  text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center "
            >
              <ArrowBackIcon className="text-lg mr-1" />
              Previous
            </button>

            <button
              onClick={nextPost}
              className="bg-gray-600 w-fit  flex flex-row items-center justify-center  cursor-pointer  text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center "
            >
              <ArrowForwardIcon className="text-lg mr-1" />
              Next
            </button>
          </div>
        </div>
        <div onClick={onOpen} className="absolute bottom-0 cursor-pointer right-0 border-b-4  bg-blue-700 bg-gradient-to-r from-blue-500 hover:p-8  transition-all   via-blue-600  m-6 border-l-4 border-blue-800 p-6 rounded-lg text-white"><AddIcon /></div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="font-mono bg-blue-900 text-white">
            <ModalHeader>Create Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <input
                type="text"


                placeholder="Title"
                className=" mb-2 border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"
                required
                onChange={(e) => setPostTitle(e.target.value)}

              />
              <Editor
                type="text"

                defaultLanguage="javascript"
                defaultValue="// Your Code!"
                height="65vh"
                theme="vs-dark"


                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm mt-2 focus:ring-primary-600 focus:border-primary-600 block w-full border-none outline-none  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
                onChange={setPostCode}

              />
            </ModalBody>
            <ModalFooter className="flex w-full justify-between">
              <button onClick={onClose} className="font-mono p-4 bg-gray-600 text-white rounded-lg">Close</button>
              <button onClick={createPost} className="font-mono p-4 bg-blue-600 text-white rounded-lg">Create</button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:9000/feed");

  const data = await res.json();
  return { props: { data } };
}
