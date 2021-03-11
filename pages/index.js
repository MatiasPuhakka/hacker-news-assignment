import { useState } from "react"
import Head from "next/head"

import List from "../components/List"
import ListItem from "../components/ListItem"
import { PageDescription } from "../components/PageDescription"

import { useStories } from "../context/stories"

import DescIcon from "../icons/descending.svg"
import AscIcon from "../icons/ascending.svg"

const Home = () => {
  const { stories } = useStories()
  const [sortBy, setSortBy] = useState("asc")

  return (
    <>
      <Head>
        <title>Top 20 Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageDescription>
        These are the best 20 stories on Hacker News as of right now.
      </PageDescription>

      <button
        onClick={() =>
          setSortBy((prevSort) => (prevSort === "asc" ? "desc" : "asc"))
        }
      >
        {sortBy === "asc" ? <AscIcon /> : <DescIcon />}
      </button>

      <List>
        {stories
          .sort((a, b) => {
            if (sortBy === "asc") {
              return b.score - a.score
            } else {
              return a.score - b.score
            }
          })
          .map((story) => (
            <ListItem story={story} />
          ))}
      </List>
    </>
  )
}

export default Home
