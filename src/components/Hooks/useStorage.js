import { useState, useEffect } from 'react';
import { projectStorage, timestamp } from "../../Firebase/config";
import projectFirestore from '../../Firebase/config';

const useStorage = (file, carpetValues) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(`images/${file.name}`);
        const collectionRef = projectFirestore.firestore().collection('Carpets');
        //const collectionRef = projectFirestore.collection('images'); // was used for firegram

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            //await collectionRef.add({url, createdAt});
            await collectionRef.add({
                carpetNum: carpetValues.carpetNum,
                carpetType: carpetValues.carpetType,
                width: parseInt(carpetValues.width),
                height: parseInt(carpetValues.height),
                createdAt,
                url
            }).then(() => {
                console.log("Document successfully written!");

            }).catch((error) => {
                console.error("Error writing document: ", error);
            });
            setUrl(url);
        });
    }, [file]);

    return { progress, url, error };
}

export default useStorage;