import { createContext, useContext, useState, useEffect } from "react"

const StoriesContext = createContext()

const HOST_NAME = "https://hacker-news.firebaseio.com"

const getStoryIDs = async () => {
  const bestIdsRes = await fetch(`${HOST_NAME}/v0/beststories.json`)
  const bestIds = await bestIdsRes.json()
  const best20Ids = bestIds.slice(0, 20)

  return best20Ids
}

const getStory = async (id) => {
  const res = await fetch(`${HOST_NAME}/v0/item/${id}.json`)
  const story = res.json()

  return story
}

export function StoriesProvider({ children }) {
  const [stories, setStories] = useState([])

  useEffect(() => {
    getStoryIDs().then((best20Ids) => {
      best20Ids.map((id) =>
        getStory(id).then((story) => {
          setStories((prevStories) => [...prevStories, story])
        })
      )
    })
  }, [])

  let sharedState = { stories }

  return (
    <StoriesContext.Provider value={sharedState}>
      {children}
    </StoriesContext.Provider>
  )
}

export function useStories() {
  return useContext(StoriesContext)
}
