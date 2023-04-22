import React, {useEffect, useState} from 'react';
import {projectFirestore, projectStorage} from "../../Firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    // Monitor any changes in the collection of images in the database
    useEffect(() => {
        // Listen to the documents inside firestore collection
       const unsub = projectFirestore.collection(collection)
            .onSnapshot((snap) => {
                let documents =  [];


                snap.forEach(doc => {
                    // store the data and id of each doc inside the array documents
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });

        // Clean up function that unsubscribe from the collection when we no longer using it
        return () => unsub();
    }, [collection])

    return { docs };
}

export default useFirestore;