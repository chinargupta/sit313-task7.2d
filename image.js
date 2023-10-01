import React from 'react';
import { useState } from 'react';
import {storage} from './firebase'
import {ref, uploadBytes} from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
import { upload } from '@testing-library/user-event/dist/upload';
import './image.css';

function Image(){
    const [imageUpload, setImageUpload ] = useState(null)
    const uploadImage = () =>{
       if(imageUpload == null) return;

       const uniqueFileName = `${uuidv4()}_${imageUpload.name}`;
       const imageRef = ref(storage, `images/${uniqueFileName}`);
       uploadBytes(imageRef, imageUpload).then(() => {
        alert("Image Uploaded!");
       
       })
    }
     
    return(
        <div className="img">
            <input type="file" onChange={(event) => 
                {setImageUpload(event.target.files[0])}}/>
            <button onClick={uploadImage}>Upload image</button>
       
        </div>
    )
}
export default Image;