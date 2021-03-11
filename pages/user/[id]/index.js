import Head from "next/head"
import { useRouter } from "next/router"

import { PageDescription } from "../../../components/PageDescription"
import { PageTitle } from "../../../components/PageTitle"

const User = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle>{id}</PageTitle>
      <PageDescription></PageDescription>
    </>
  )
}

export default User
