import style from "./Posts.module.css";
import PostCard from "../../components/PostCard";
import MetaTags from "../../components/Metatags";

const demoPosts = [
  {
    slug: "project1",
    title: "Stability in Rocket Flight",
    coverImage: "/project1.png",
    customRoute: "/project1",
  },
  {
    slug: "project2",
    title: "Rocket Fuel",
    coverImage: "/project2.png",
    customRoute: "/project2",
  },
  {
    slug: "project3",
    title: "Spaceport America Cup",
    coverImage: "/project3.png",
    customRoute: "/project3",
  },
    {
    slug: "project4",
    title: "Working of Rockets",
    coverImage: "/image3.jpg",
    customRoute: "/project4",
  },
    {
    slug: "project5",
    title: "Rockets Staging",
    coverImage: "/image89.png",
    customRoute: "/project5",
  },

];

export default function PostsPage() {
  return (
    <main className={style.main}>
      <MetaTags title="SEDS - Projects" description="Our latest projects" />
      <div className={style.header}>
        <h1>Our Projects</h1>
        <p className={style.subtitle}>Explore our latest work and research</p>
      </div>
      <div className={style.grid}>
        {demoPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}