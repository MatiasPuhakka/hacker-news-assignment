import Head from "next/head"

import List from "../components/List"
import ListItem from "../components/ListItem"
import { PageDescription } from "../components/PageDescription"

import { useStories } from "../context/stories"

const Home = () => {
  const { stories } = useStories()

  return (
    <>
      <Head>
        <title>Top 20 Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageDescription>
        These are the best 20 stories on Hacker News as of right now.
      </PageDescription>
      <List>
        {stories.map((story) => (
          <ListItem story={story} />
        ))}
      </List>
    </>
  )
}

export default Home
