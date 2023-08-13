import React from 'react';
import {Episodes} from "../componrnts/EpisodesContainer/Episodes/Episodes";
import {EpisodePagination} from "../componrnts/EpisodesContainer/EpisodePagination/EpisodePagination";

const EpisodesPage = () => {
    return (
        <div>
            <Episodes/>
            <EpisodePagination/>
        </div>
    );
};

export default EpisodesPage;