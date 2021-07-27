import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) =>  {

    const { heroId } = useParams();

    const hero = useMemo( () => getHeroById( heroId ), [ heroId ] )
    // const hero = getHeroById( heroId );

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

    const handleReset = () => {

        if ( history.length <= 2 )
            history.push( '/' );
        else
            history.goBack();

    };

    return (

        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ `../assets/heroes/${ heroId }.jpg` }
                    alt={ hero_name }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h1> { hero_name } </h1>
                <hr />
                <ul className="list-group list-group-flush animate__animated animate__fadeIn">
                    <li className="list-group-item"> <b> { another_name } </b> </li>
                    <li className="list-group-item"> <b> { attack } </b> </li>
                </ul>

                <h3> Information of hero </h3>
                <p> { information } </p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReset }
                >
                    Return
                </button>
            </div>
        </div>

    );

};
