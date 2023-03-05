// http://localhost:3000/api/posts/1

import posts from "@/pages/api/post.json";
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  id: number;
  Title: string;
  Body: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { postid } = <{ postid: string }>req.query;
  console.log("🚀 ~ file: post.ts:15 ~ postid", postid);
  const post = posts.find((post: Data) => post.id === parseInt(postid));
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404);
  }
}
