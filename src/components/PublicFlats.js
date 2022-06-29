import React from 'react'
import Loading from './Loading'
import FlatList from './FlatList'

const PublicFlats = ({flats, loading}) => {
    if(loading){
        return <Loading/>
    }
console.log(flats,"PublicFlats")
  return (
    // <div className='row'>
    //   {flats.map((flat)=>(
    //     <div className='col-4'>
    //         <img 
    //         src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"}
    //         alt=""
    //         height={200}
    //         width={200}/>

    //     </div>
    //   )
    //   )}
    // </div>
    <FlatList rooms={flats}/>
  )
}

export default PublicFlats
