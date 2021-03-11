import { useState, useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Link from "next/link"

import { PageDescription } from "../../../components/PageDescription"
import { Score } from "../../../components/Score"

import { formatDate } from "../../../utils/formatDate"

const HOST_NAME = "https://hacker-news.firebaseio.com"

const User = () => {
  const [user, setUser] = useState({})
  const router = useRouter()
  const { id } = router.query

  const fetchUser = async () => {
    const res = await fetch(`${HOST_NAME}/v0/user/${id}.json`)
    res.json().then((res) => setUser(res))
  }

  useEffect(() => {
    fetchUser()
  }, [id])

  return (
    <>
      <Head>
        <title>{user.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-5 sm:text-3xl md:text-4xl">
        {user.id}
      </h2>

      <PageDescription>
        User joined on {formatDate(user.created)}
        {console.log(user)}
      </PageDescription>

      <dl className="flex flex-wrap text-base font-normal whitespace-pre">
        <div className="flex">
          <dt>Karma: </dt>
          <dd className="text-sm">
            <Score>{user.karma}</Score>
          </dd>
        </div>
        <div className="w-full"></div>
        <div className="flex my-3 sm:my-5">
          <dt>Interactions: </dt>
          <dd>{user.submitted?.length}</dd>
        </div>
      </dl>
    </>
  )
}

export default User
