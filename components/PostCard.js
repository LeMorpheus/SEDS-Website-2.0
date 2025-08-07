// components/PostCard.js
import Link from "next/link";
import style from "../pages/posts/Posts.module.css";

export default function PostCard({ post }) {
  // Use customRoute if provided, else fall back to `/posts/${slug}`
  const href = post.customRoute || `/posts/${post.slug}`;

  return (
    <Link href={href} passHref legacyBehavior>
      <a className={style.cardLink}>
        <div
          className={style.post}
          style={{ backgroundImage: `url(${post.coverImage})` }}
        >
          <div className={style.overlay}></div>
          <div className={style.post_content}>
            <span className={style.postCategory}>{post.category}</span>
            <h2 className={style.post_title}>{post.title}</h2>
          </div>
        </div>
      </a>
    </Link>
  );
}
