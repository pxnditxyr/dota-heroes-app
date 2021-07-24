import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
        id,
        hero_name,
        another_name,
        publisher,
        attack,
        information
    }) => {

    return (
        <div className="card mt-3" style={{ width: "18rem" }}>
            <div className="row no-gutters">
                    <img src={ `./assets/heroes/${ id }.jpg` } className="card-img-top" alt={ hero_name } />
                <div className="card-body">
                    <h5 className="card-title"> Name: { hero_name } </h5>
                    <p className="card-text font-weight-bold"> Name: { another_name } </p>
                    <p className="card-text font-weight-bold"> Attack: { attack } </p>
                    <p className="card-text" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>{ information }</p>
                    <Link to={ `./hero/${ id }` } className="btn btn-primary">
                        View more
                    </Link>
                </div>
            </div>
        </div>
    );

};
