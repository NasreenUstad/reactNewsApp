
import { useContext } from "react"
import Pagination from "./screens/pagination/Pagination"
import Search from "./screens/search/Search"
import Stories from "./screens/stories/Stories"
import NewsContext from "./context/NewsContext"

const App = () => {
  // const a = useContext(NewsContext);
  setTimeout(() => {
    // a.setText("hello contextapi")
    // console.log(a)
  }, 3000);
  return (
    <>
      <h1>Welcome to the latest news channel</h1>
      <Search />
      <Pagination />
      <Stories />

    </>
  )
}

export default App
