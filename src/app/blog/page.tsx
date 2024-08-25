import Section from "@/components/containers/section/section";
import { getSortedPostsData } from "@/lib/posts"
import { log } from "console"
import Link from "next/link";

log(getSortedPostsData())
export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="">
      <section className="">
        <h1 className="">This is my blog</h1>
      </section>

      <section className="">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`./blog/${id}`}> {title} </Link>
              <br />
              <small>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
