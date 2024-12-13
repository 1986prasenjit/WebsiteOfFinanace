import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './BlogComponent.css';

function BlogComponent() {
  const [apiData, setApiData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);

  const URL = "https://dummyjson.com/posts";

  const fetchData = async () => {
    try {
      setLoadingData(true);
      let response = await axios.get(URL);
      setApiData(response.data.posts);
      setLoadingData(false);
    } catch (error) {
      setError(true);
      setLoadingData(false)
      console.warn(`Something Went Wrong`, error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if(loadingData)return <h3 className="loadingText">Loading.......</h3>
  if(error)return <h3 className="errorText">Error.....</h3>
  return (
    <>
      <section className="postMainContainer">
            {
                apiData && 
                        apiData.slice(0,20).map((data,index)=> {
                            return(
                                <div key={index} className="postsDiv">
                                    <h3 className="postTitle">{data.title}</h3>
                                    <p className="postPara">{data.body}</p>
                                </div>
                            );
                        })
            }
      </section>
    </>
  );
}

export default BlogComponent;
