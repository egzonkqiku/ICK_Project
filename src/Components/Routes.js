import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Favourites from './Favourites/Favourites'
import AllData from './AllData/AllData'

function Routes() {
    return <>
        <Switch>
            <Route exact path='/nature'>
                <AllData topic ="nature" category = 'Nature' />
            </Route>
            <Route exact path='/travel'>
                <AllData topic ="travel" category = 'Travel' />
            </Route>
            <Route exact path='/film'>
                <AllData topic ="film" category = 'Film' />
            </Route>
            <Route exact path ='/favourites'>
                <Favourites/>
            </Route>
        </Switch>
    </>
}

export default Routes