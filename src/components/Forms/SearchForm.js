import React, {useState} from 'react';
import ImageGrid from "../ImageGrid";

function SearchForm(props) {
    const [inputValue, setInputValue] = useState(null);
    const [searchRugNum, setSearchRugNum] = useState('');

    const onChangeTextHandler = (e) => {
      setInputValue(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
    }

    function submitCarpetNum() {
        setSearchRugNum(inputValue);

    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Rug Number: </label> <input type="text" onChange={onChangeTextHandler} />
                <label>Height: </label> <input type="text" onChange={onChangeTextHandler} />
                <label>Width: </label> <input type="text" onChange={onChangeTextHandler} />
            </form>
            <button onClick={submitCarpetNum}>Done</button>
            <section>
                <ImageGrid userVal={searchRugNum}/>
            </section>
        </div>
    );
}

export default SearchForm;