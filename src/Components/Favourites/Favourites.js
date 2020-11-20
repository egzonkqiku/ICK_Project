import React from 'react'
import {useSelector} from 'react-redux'
import ImgProfile from '../ImgProfile/ImgProfile'

function Favourites() {
    
    const favourites = useSelector(state => state.favourite)

    return (
        <div style={{padding: 55, marginLeft: 275}}>
            {favourites.map((element)=>{
                return <ImgProfile  key={element.id} AllData={element}/>
            })}
        </div>
    )
}

export default Favourites

