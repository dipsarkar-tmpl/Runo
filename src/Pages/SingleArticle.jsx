import Footer from "../components/Footer/Footer";
import Post_info from "../components/Post_info/Post_info";
import Related from "../components/Related_posts/Related";
import Single_Banner from "../components/SingleBanner/Single_Banner";
import Single_post from "../components/Single_post/Single_post";
import Navbar from "../components/navbar/Navbar";
import "./SingleArticle.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loaderImg from "../../src/images/Spinner-1s-200px.svg"

export default function SingleArticle() {
  const { id } = useParams();
  const [bannerData, setbannerData] = useState({});
  const[loader,setLoader]=useState(false);

  useEffect(() => {
    const getApidata = async () => {

      try {
        setLoader(true);
        const API = `https://runo1.onrender.com/topic/${id}`;
        const response = await axios.get(API);
        setbannerData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally{
        setLoader(false);
      }
    };

    getApidata();
  }, [id]);

  
  return (
    <>
    {loader &&
     <div className="gif_img">
          <img className="loader-image" src={loaderImg} alt="Loader" />
        </div>
       }
      {bannerData?.headerimage ? (
          <Single_Banner
            image={bannerData?.headerimage}
            category={bannerData?.categories[0]?.title?.toUpperCase()}
            title={bannerData?.title}
            info={bannerData?.description?.slice(0, 174)}
            auth_name={bannerData?.authors[0]?.name}
          />
      ) : null}

      <Single_post />
    {bannerData?.headerimage ? (
      <Post_info auth_name={bannerData?.authors[0]?.name}
                 auth_img={bannerData?.authors[0]?.photo}
                 auth_pro={bannerData?.authors[0]?.author_categories[0]?.title.toUpperCase()}
                 cat1={bannerData?.categories[0]?.title.toUpperCase()}
                 cat2={bannerData?.categories[1]?.title.toUpperCase()}
                 cat3={bannerData?.categories[1]?.title.toUpperCase()}
       />
       ) : null}
      <Related />
      <Footer />
    </>
  );
}
