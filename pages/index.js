import Head from "next/head"


const HOST_NAME = "https://hacker-news.firebaseio.com"

const Home = ({ best20Ids }) => {
  console.log(best20Ids)

  return (
    <div className="bg-white">
      <Head>
        <title>Top 20 Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto">
        <div className="pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="text-green-500">Top 20</span>
                <span> Hacker News</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
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
