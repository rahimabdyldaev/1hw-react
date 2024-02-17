import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import classes from './About.module.css'

const About = () => {
    const [shop, setShop] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const onBack = () => navigate(-1);
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
        .then((res) => res.json())
        .then((data) => setShop(data));
    }, [params.id]);
    console.log(params);
    
    return (
      <div className={classes.photo}>
        {shop && (
          <>
            <button onClick={onBack}>Back</button>
            <img src={shop.url} alt="" />
            <h1>{shop.id} </h1>
            <h2>{shop.title}</h2>
          </>
        )}
      </div>
    );
}

export default About;