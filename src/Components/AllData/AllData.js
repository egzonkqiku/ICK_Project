import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ImgProfile from '../ImgProfile/ImgProfile'



function AllData(props) {

    const API_URL = `https://api.unsplash.com/topics/${props.topic}/photos?`;
    const API_KEY = 'client_id=iOZ2zhtozMMLB36JB8hXBzemEP3k6NwMykeBILmT24g'

    const[nature, setNature]=useState([]);

    const GetPhotos = async () => {
        const response = await axios.get(`${API_URL}${API_KEY}`)
        setNature(response.data)
    }
useEffect(() => {
        GetPhotos();
    }, [props.topic])
    
    return (
        <div>
            <h1>{props.category}</h1>
            <div style={{padding: 55, marginLeft: 275}}>
                {nature.map((element)=>{
                    return <ImgProfile isResult key={element.id} AllData={element}/>
                })}
            </div>
        </div>
    )
    
}

export default  AllData 