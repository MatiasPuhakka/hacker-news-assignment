import Head from "next/head"

import List from "../components/List"
import ListItem from "../components/ListItem"
import { PageDescription } from "../components/PageDescription"
import { PageTitle } from "../components/PageTitle"

const HOST_NAME = "https://hacker-news.firebaseio.com"

const Home = ({ best20Ids }) => {
  console.log(best20Ids)

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
        {best20Ids.map((id) => (
          <ListItem key={id} id={id} />
        ))}
      </List>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const bestIdsRes = await fetch(`${HOST_NAME}/v0/beststories.json`)
  const bestIds = await bestIdsRes.json()
  const best20Ids = bestIds.slice(0, 20)

  return {
    props: {
      best20Ids,
    },
  }
}
