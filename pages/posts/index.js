import style from "./Posts.module.css";
import PostCard from "../../components/PostCard";
import MetaTags from "../../components/Metatags";

const demoPosts = [
  {
    slug: "project1",
    title: "Project 1",
    coverImage: "/project1.png",
    customRoute: "/project1",
  },
  {
    slug: "project2",
    title: "Project 2",
    coverImage: "/project2.png",
    customRoute: "/project2",
  },
  {
    slug: "post-3",
    title: "Project 3",
    coverImage: "/project3.png",
    customRoute: "/project3",
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