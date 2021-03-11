import Link from "next/link"

import { Score } from "./Score"
import { formatDate } from "../utils/formatDate"

const ListItem = ({ story }) => (
  <article
    className="flex flex-wrap items-start justify-between py-4"
    key={story.id}
  >
    <h2 className="w-full sm:w-4/5 text-lg font-semibold text-black mb-2">
      <a href={story.url} target="_blank" rel="noopener noreferrer">
        {story.title}
      </a>
    </h2>

    <Score className="w-auto sm:w-1/5">{story.score}</Score>

    <div className="w-auto sm:w-full flex text-sm font-medium whitespace-pre sm:mt-2">
      <span className="sr-only">Created</span>
      {`${formatDate(story.time)} - By `}
      <Link href="/user/[id]" as={`/user/${story.by}`}>
        <a className="text-green-500">{story.by}</a>
      </Link>
    </div>
  </article>
)

export default ListItem
