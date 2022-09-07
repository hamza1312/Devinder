import Head from "next/head";
import { useRouter } from "next/router"
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useToast } from "@chakra-ui/react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RocketIcon from '@mui/icons-material/Rocket';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Editor from "@monaco-editor/react";
import SyntaxHighlighter from 'react-syntax-highlighter';

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
      const socket = io.connect(process.env.backendUrl);


      if (!authenticated) {
        location.href = "/login"
      }

    }


  }, []);
  const likePost = async (postId) => {
    await fetch(`${process.env.backendUrl}/post/like`, {
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
    await fetch(`${process.env.backendUrl}/post/dislike`, {
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



    await fetch(`${process.env.backendUrl}/post`, {
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


  return (
    <div>
      <Head>
        <title>Devinder | Home Page</title>
        <meta name="description" content="Devinder a dating app for Devs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen flex flex-col bg-gray-200 overflow-x-hidden">
        <div className="flex flex-col w-screen pt-28 p-2  h-screen bg-gray-200 items-center">
          <div className="rounded-lg w-full lg:w-2/4 bg-white p-6 mb-6 flex flex-row">
            <AccountCircleIcon className="text-5xl text-gray-600" />
            <input onClick={onOpen} placeholder="What's Your best code?" className="cursor-pointer w-full bg-gray-100  rounded-md outline-none ml-6 p-3"></input>
          </div>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className="font-mono">
              <ModalHeader>Create Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <input onChange={(e) => setPostTitle(e.target.value)} className="w-full p-4 outline-none bg-gray-100 rounded-md placeholder:font-gray-400" placeholder="Your amazing code title!" ></input>
                <Editor options={{
                  padding: {
                    top: 25,
                  }
                  
                }} onChange={setPostCode} height={"30vh"} className={"mt-6 "} defaultValue={"// My code!"} defaultLanguage="javascript"></Editor>
              </ModalBody>
              <ModalFooter>
                <button onClick={createPost} className="p-4 bg-blue-600 text-white rounded-lg">Submit</button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* <div className="w-full lg:w-2/4 bg-white p-3  rounded-lg h-fit flex flex-row items-center ">
            <div className="p-3 cursor-pointer mx-2 font-extrabold rounded-full bg-blue-100 flex flex-row justify-between text-blue-700">
              <RocketIcon className="mr-2" />
              <p className="mr-2">Best</p>
            </div>
            <div className="p-3 mx-2 cursor-pointer  font-extrabold rounded-full bg-gray-100 flex flex-row justify-between text-gray-700">
              <LocalFireDepartmentIcon className="mr-2" />
              <p className="mr-2">Hot</p>
            </div>
            <div className="p-3 mx-2 cursor-pointer font-extrabold rounded-full bg-gray-100 flex flex-row justify-between text-gray-700">
              <NewReleasesIcon className="mr-2" />
              <p className="mr-2" >New</p>
            </div>
          </div> */}
          <div className="w-full lg:w-2/4 p-1 lg:p-0">
            {data.data.map((val) =>
              <div className="rounded-lg  bg-white w-full p-6 mt-6" key={val._id}>
                <p className="italic font-light text-gray-400 text-xs mb-2">Posted by {val.creator}</p>
                <h1 className="text-xl font-sans mb-4 font-extrabold">{val.title}!</h1>
                <SyntaxHighlighter language="javascript" showLineNumbers className="rounded-lg" >
                  {val.code}
                </SyntaxHighlighter>
                <div className=" flex flex-row w-full  mt-2">
                  <button onClick={() => likePost(val._id)} className="bg-gray-100  rounded-lg w-fit p-2"><ThumbUpIcon className="mr-2" />{val.likes.length}</button>
                  <button onClick={() => dislikePost(val._id)} className="bg-gray-100 ml-2 rounded-lg w-fit p-2"><ThumbDownIcon className="mr-2" />{val.dislikes.length}</button>
                </div>
              </div>
            )}


          </div>
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.backendUrl}/feed`);

  const data = await res.json();
  return { props: { data } };
}
