import * as React from 'react';
import AiAPI from '../../apis/aiAPI';

import Fetching from '../basics/fetching'

export default function UploadPictures(){
    const [image, setImage] = React.useState(null);
    const [imageURL, setImageURL] = React.useState(null);
    const [imageBase64, setImageBase64] = React.useState(null);

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        if(!image) return;
        const newImage = URL.createObjectURL(image);
        setImageURL(newImage)

        var reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = function() {
            setImageBase64(reader.result.slice(23));
        }
        if(imageBase64) {
            getAmountOfFlowers(imageBase64);
        }
        console.log('end');
    }, [image, imageBase64, data])

    async function getAmountOfFlowers(base64String){
      const result = await AiAPI.getResultFromBase64(base64String);
      setData(result);
    }

    return (
        <div>
            <h1>Upload pictures</h1>
                <div className="picture">
                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
                    {data && (
                        <>
                            <div>{data}</div>
                            <div className='pictures'>
                                <img src={imageURL} alt={imageURL} className="imagePreview"/>
                            </div>
                        </>
                    )}
                    
                    {(image && !data) && (
                            <div className='pictures'>
                                <Fetching />
                            </div>
                    )}
                </div>
        </div>
    )

    function onImageChange(e){
        setImage(...e.target.files)
    }
}