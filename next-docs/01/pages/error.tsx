export async function getStaticProps() {
    // If this request throws an uncaught error, Next.js will
    // not invalidate the currently shown page and
    // retry getStaticProps on the next request.
    const res = await fetch('https://.../posts')
    const posts = await res.json()
  
    if (!res.ok) {
      // If there is a server error, you might want to
      // throw an error instead of returning so that the cache is not updated
      // until the next successful request.
      throw new Error(`Failed to fetch posts, received status ${res.status}`)
    }
  
    // If the request was successful, return the posts
    // and revalidate every 10 seconds.
    return {
      props: {
        posts,
      },
      revalidate: 10,
    }
  }