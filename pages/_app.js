import Link from "next/link"
import { PageTitle } from "../components/PageTitle"
import { StoriesProvider } from "../context/stories"
import "tailwindcss/tailwind.css"

function Application({ Component, pageProps }) {
  return (
    <StoriesProvider>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <PageTitle>
                <Link href="/">
                  <a>
                    <span className="text-green-500">Top 20</span> Hacker News
                  </a>
                </Link>
              </PageTitle>

              <Component {...pageProps} />
            </main>
          </div>
        </div>
      </div>
    </StoriesProvider>
  )
}

export default Application
