export default function ErorrPage404() {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <h1 className="my-10 text-5xl font-dmsansBold text-vert-green">
          Page Not Found
        </h1>
      </div>
      <>
        {' '}
        <div className="bg-vert-green-lightest py-12 lg:py-32">
          <h2 className="text-center mb-8 text-4xl font-dmsansBold text-vert-green-dark">
            Recent Posts
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-col xl:flex-row justify-center xl:space-x-5">
              {/* {recentPosts.map(article => (
                <PostCard post={article} key={article.fields.slug} />
              ))} */}
            </div>
          </div>
        </div>
        <div className="hidden lg:block bg-vert-green-lightest h-40 w-full -mb-40" />
      </>
    </div>
  )
}