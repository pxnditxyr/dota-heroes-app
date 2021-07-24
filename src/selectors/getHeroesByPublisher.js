import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = [ "Strength", "Agility", "Intelligence" ];

    if ( !validPublishers.includes( publisher ) )
        throw new Error( `Publisher "${ publisher }" is incorrect` );

    return heroes.filter( hero => hero.publisher === publisher );

};
