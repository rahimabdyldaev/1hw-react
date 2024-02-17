import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {
    const [shop, setShop] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((data) => setShop(data))
    }, []);
  return (
    <div className={classes.home}>
            {shop.length &&
                shop.map((photo) => {
                    const onPhoto=() => navigate(`/about/${photo.id}`)
                    if (photo.id < 12) {
                        return (
                            <div key={photo.id} className={classes.block}>
                                <div className={classes.photo}>
                                    <img onClick={onPhoto} src={photo.url} alt="" />
                                    
                                </div>
                                <div>
                                    <h2>Photoshop - Web Design</h2>
                                    
                                </div>
                                <div className={classes.text}>
                                    <span className={classes.price} >$290</span>
                                    <h2>{photo.title}</h2>
                                    <h2>{photo.id}</h2>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
        </div>
  );
};

export default Home;