import React, {useEffect} from 'react';
import useStorage from "./Hooks/useStorage";
import {motion} from 'framer-motion';

const ProgressBar = ({file, setFile, carpetValues}) => {
    const {progress, url} = useStorage(file, carpetValues); // instantly triggers the useEffect in useStorage.js

    useEffect(() => {
        // check to see if there is a valid url, if it is then set the fill back to null so the progress bar animation no longer shows.
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
                    initial={{width: 0}}
                    animate={{width: progress + '%'}}
        />
    );
}
export default ProgressBar;