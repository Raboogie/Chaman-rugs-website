import React, {useState} from 'react';
import ImageGrid from "../ImageGrid";

function SearchForm(props) {
    const [inputValue, setInputValue] = useState(null);

    const onChangeTextHandler = (e) => {
      setInputValue(e.target.value);
    }

    return (
        <div>
            <form>
                <label>Rug Number: </label> <input type="text" onChange={onChangeTextHandler} />
            </form>
            <section>
                <ImageGrid userVal={inputValue}/>
            </section>
        </div>
    );
}

export default SearchForm;