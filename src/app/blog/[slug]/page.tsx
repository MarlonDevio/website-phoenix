
import { getPostData, getSortedPostsData } from "@/lib/posts"

export async function generateStaticParams() {
  const allPostsData = getSortedPostsData()
  return allPostsData.map((post) => ({
    slug: post.id,
  }))
}
export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  return (
    <article className="">
      <h1 className="text-5xl">{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}
