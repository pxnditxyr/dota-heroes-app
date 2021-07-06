import React from 'react';

import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { StrengthScreen } from '../components/categories/strength/StrengthScreen';
import { AgilityScreen } from '../components/categories/agility/AgilityScreen';
import { IntelligenceScreen } from '../components/categories/intelligence/IntelligenceScreen';


export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/hero/:heroId" component={ HeroScreen } />
                    <Route exact path="/strength" component={ StrengthScreen } />
                    <Route exact path="/agility" component={ AgilityScreen } />
                    <Route exact path="/intelligence" component={ IntelligenceScreen } />
                    <Redirect to="/strength" />
                </Switch>
            </div>
        </>
    );

};
