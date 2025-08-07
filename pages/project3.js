import Post3Content from "./Post3Content";
import MetaTags from "../components/Metatags";

export default function Project2Page() {
  return (
    <>
      <MetaTags title="Project 2" description="Details about Project 2" />
      <main style={{ padding: "2rem" }}>
        <h1>Project 2</h1>
        <Post3Content />
      </main>
    </>
  );
}