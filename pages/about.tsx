import Widget from "@/components/Widget";
import { NextSeo } from "next-seo";
import Image from "next/image";

function About() {
  return (
    <>
      <NextSeo
        title="Manage SEO in NextJS with Next SEO"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
        canonical="www.example.com/next-seo-blog"
        openGraph={{
          type: "article",
          article: {
            publishedTime: "2022-06-21T23:04:13Z",
            modifiedTime: "2022-01-21T18:04:43Z",
            authors: [
              "https://www.example.com/authors/@firstnameA-lastnameA",
              "https://www.example.com/authors/@firstnameB-lastnameB",
            ],
            tags: ["Tag A", "Tag B", "Tag C"],
          },
          url: "www.example.com/next-seo-blog",
          images: [
            {
              url: "https://www.test.ie/images/cover.jpg",
              width: 850,
              height: 650,
              alt: "Photo of text",
            },
          ],
          site_name: "Next Blog",
        }}
      />
      <h1>About Page</h1>
      <Image
        src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
        width={500}
        height={200}
        alt="A beautiful English Setter"
      />
      <div>
        <Widget pageName="index" />
      </div>
    </>
  );
}

export default About;
