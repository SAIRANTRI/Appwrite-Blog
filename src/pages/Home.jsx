import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className=" w-full py-8 mt-4 text-center h-screen">
        <Container>
          <div className="flex flex-wrap ">
            <div className="p-2 w-full items-center justify-center">
              <h1 className="text-xl p-52 font-bold hover:text-purple-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className='w-full py-8'>
            <Container>
                <div className='flex justify-center flex-wrap gap-4'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
  )
}

export default Home;
