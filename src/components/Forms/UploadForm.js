import React, {useState} from 'react';
import "./UploadForm.css";
import ProgressBar from "../ProgressBar";


const UploadForm = () => {
    const [imageFile, setImageFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const [carpetValues, setCarpetValues] = useState(
        {
            carpetNum: "",
            carpetType: "",
            width: "",
            height: ""
        }
    );

    const handleCarpetNumInputChange = (e) => {
        setCarpetValues({...carpetValues, carpetNum: e.target.value});
    }

    const handleCarpetTypeInputChange = (e) => {
        setCarpetValues({...carpetValues, carpetType: e.target.value});
    }

    const handleCarpetWidthInputChange = (e) => {
        setCarpetValues({...carpetValues, width: e.target.value});
    }

    const handleCarpetHeightInputChange = (e) => {
        setCarpetValues({...carpetValues, height: e.target.value});
    }

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {

            if ((carpetValues.carpetNum !== "") && (carpetValues.carpetType !== "")) {
                setImageFile(selected);
                setError('');
                // const collectionRef = projectFirestore.firestore().collection('Carpets');
                /*collectionRef.add({
                    carpetNum: carpetValues.carpetNum,
                    carpetType: carpetValues.carpetType,
                    width: parseInt(carpetValues.width),
                    height: parseInt(carpetValues.height)
                }).then(() => {
                    console.log("Document successfully written!");

                }).catch((error) => {
                    console.error("Error writing document: ", error);
                });*/
            } else {
                setImageFile(null);
                setError('Please add a carpet number and Type');
            }
        } else {
            setImageFile(null);
            setError('Please select an image imageFile (png or jpeg)');
        }
    }

    return (
        <div>
            <div className="carpet-data">
                <form>
                    <label>Carpet # :</label>
                    <input onChange={handleCarpetNumInputChange} type="text" value={carpetValues.carpetNum}/> <br/>

                    <label>Carpet type:</label>
                    <input onChange={handleCarpetTypeInputChange} type="text" value={carpetValues.carpetType}/>

                    <label>Width:</label>
                    <input onChange={handleCarpetWidthInputChange} type="number" value={carpetValues.width}/>

                    <label>Height:</label>
                    <input onChange={handleCarpetHeightInputChange} type="number" value={carpetValues.height}/>
                </form>
            </div>

            <div className="image-upload">
                <form className="image-form">
                    <p>Upload images</p>
                    <label className="image-label">
                        <input type="file" multiple onChange={changeHandler}/>
                        <span>+</span>
                    </label>
                    <div className="output">
                        {error && <div className="error"> {error} </div>}
                        {imageFile && <div> {imageFile.name} </div>}
                        {imageFile && <ProgressBar file={imageFile} setFile={setImageFile} carpetValues={carpetValues}/>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadForm;




