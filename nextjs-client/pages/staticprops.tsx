function StaticPropsExample({ posts }: any) {
    return (
      <ul>
        {posts.map((post: any) => (
          <li key={posts.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
  export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
      revalidate: 1,
    };
  }
  export default StaticPropsExample;