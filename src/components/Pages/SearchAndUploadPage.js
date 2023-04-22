import React from 'react';
import fire from "../../Firebase/config";
import TabsLayout from "../Tabs/TabsLayout";

function SearchAndUploadPage(props) {

    const handleSignOut = () => {
        fire.auth().signOut();
    };

    return (
        <div className="search">
            <div>
                <h1 className="main-header">Admin Search and Upload</h1>
                <button className="button-admin" onClick={handleSignOut}>LOGOUT</button>
            </div>
            <div>
                <TabsLayout/>
            </div>
        </div>
    );
}

export default SearchAndUploadPage;