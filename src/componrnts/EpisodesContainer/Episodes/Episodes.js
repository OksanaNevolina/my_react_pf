import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {episodesService} from "../../../services/episodesService";
import {episodesAction} from "../../../redux/actions/episodesAction";
import css from './Episodes.module.css'
import {Episode} from "../Episode/Episode";

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes}= useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(()=>{
        episodesService.getAll(query.get('page')).then(({data})=>{
            dispatch(episodesAction.set(data))
            setQuery(prev => ({...prev,page: prev.get('page')}))
        },[query,dispatch])
    })
    return (
        <div className={css.Episodes}>
            {episodes.map(episode=><Episode key={episode.id}
                                            episode={episode}
                />
                )}

        </div>
    );
};

export {Episodes};