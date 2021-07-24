import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () =>  {

    const { heroId } = useParams();

    const hero = getHeroById( heroId );

    if ( !hero )
        return <Redirect to="/"/>


    const {
        id,
        hero_name,
        another_name,
        publisher,
        attack,
        information,
    } = hero;
    return (

        <>
            <h1> Hero Screen </h1>
            <hr />
        </>

    );

};
