import Post1Content from "./Post1Content";
import MetaTags from "../components/Metatags";

export default function Project1Page() {
  return (
    <>
      <MetaTags title="Project 1" description="Details about Project 1" />
      <main style={{ padding: "2rem" }}>
        <h1> </h1>
        <Post1Content />
      </main>
    </>
  );
}
