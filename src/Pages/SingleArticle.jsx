import Footer from "../components/Footer/Footer"
import Post_info from "../components/Post_info/Post_info"
import Related from "../components/Related_posts/Related"
import Single_post from "../components/Single_post/Single_post"
import Navbar from "../components/navbar/Navbar"
import "./SingleArticle.css"

export default function SingleArticle() {
  return (
    <>
    <Navbar/>
    <Single_post/>
    <Post_info/>
    <Related/>
    <Footer/>
    </>
  )
}
