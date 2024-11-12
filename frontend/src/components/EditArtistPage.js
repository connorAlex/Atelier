import React, { useState } from 'react';
import ToolBar from '../shared-components/Toolbar';
import EditArtist from './EditArtist'

const EditArtistPage = ({ myProfile}) => {
    return (
        <div>
            <ToolBar />
            <EditArtist artist={myProfile}/>
        </div>
    );
};

export default EditArtistPage