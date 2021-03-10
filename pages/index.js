import Head from "next/head"

import List from "../components/List"
import ListItem from "../components/ListItem"

const HOST_NAME = "https://hacker-news.firebaseio.com"

const Home = ({ best20Ids }) => {
  console.log(best20Ids)

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Top 20 Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto">
        <div className="mx-auto pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-green-500">Top 20</span> Hacker News
            </h1>
            <p className="mt-3 mb-8 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              These are the best 20 stories on Hacker News as of right now.
            </p>
            <List>
              {best20Ids.map((id) => (
                <ListItem key={id} id={id} />
              ))}
            </List>
          </main>
        </div>
      </div>
    </div>
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
