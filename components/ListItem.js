import { useState, useEffect } from "react"
import Link from "next/link"

import { Score } from "./Score"
import { formatDate } from "../utils/formatDate"

const HOST_NAME = "https://hacker-news.firebaseio.com"

const ListItem = ({ id }) => {
  const [story, setStory] = useState({})

  const fetchStory = async () => {
    const res = await fetch(`${HOST_NAME}/v0/item/${id}.json`)
    res.json().then((res) => setStory(res))
  }

  useEffect(() => {
    fetchStory()
  }, [])

  return (
    <article className="p-4 flex space-x-4">
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">Created</dt>
            <dd>{formatDate(story.time)}</dd>
          </div>
          {" - By "}
          <Link href="/user/[id]" as={`/user/${story.by}`}>
            <a className="text-green-500">{story.by}</a>
          </Link>
          <Score style={{ position: "absolute", top: 0, right: 0 }}>
            {story.score}
          </Score>
        </dl>
      </div>
    </article>
  )
}

export default ListItem
