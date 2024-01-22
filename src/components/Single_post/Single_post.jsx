import { useEffect } from "react";
import axios, { Axios } from "axios";
import "./Single_post.css";
import { useState } from "react";
const API = 'http://139.59.24.180:3001/api/topics/4';


export default function Single_post() {
  const [myData, setMyData] = useState([]);
  console.log(myData,'myData');
  const getApidata = async(url)=>{
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url,
      headers: { }
    };
    try {
      const res = await  axios.request(config)
      .then((response) => {
        setMyData(response?.data?.data?.attributes);
      })
    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(()=>{
   
    getApidata(API);
  
  }, []); 

  return (
    <>
      <div className="post-container">
        <div className="post-date">
          <span className="date-span">{myData.Topic_date}</span>
          <hr />
          <span className="time-span">{myData.topic_readtime}</span>
        </div>
        <div className="post-content">
          <p>
            {myData.Topic_longdesc}
          </p>
        </div>
      </div>
    </>
  );
}
