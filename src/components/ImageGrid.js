import React from 'react';
import {motion} from "framer-motion";
import useFirestore from "./Hooks/useFirestore";

function ImageGrid(props) {
    const { docs } = useFirestore("Carpets"); // Carpets is the name of the collection in firestore.
    let input = props.userVal;
    let arrOfCarpets = docs.filter(rugNum => rugNum.carpetNum === input);

    return (
        <div>
            { arrOfCarpets && arrOfCarpets.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                            layout
                            whileHover={{opacity: 1}}
                            onClick={() => props.setSelectedImg(doc.url)}>
                    <motion.img src={doc.url} alt="pic"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 1}}/>
                </motion.div>
            ))}
        </div>
    );
}

export default ImageGrid;