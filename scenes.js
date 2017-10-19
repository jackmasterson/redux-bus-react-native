/* @flow */

import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Launch from './containers/Launch';
import PostInfo from './containers/PostInfo';
import BusStatus from './containers/BusStatus';
import Filtered from './containers/Filtered';

const scenes = Actions.create(
    <Scene key="app">
        <Scene key="welcome" component={Launch} title="Welcome" />
        <Scene key="postInfo" component={PostInfo} title="Post Bus Info" />
        <Scene key="busStatus" component={BusStatus} title="View Bus Status" />
        <Scene key="filtered" component={Filtered} title="Filtered By Destination" />
    </Scene>
)

/* @flow */

export default () => (
    <Router
        scenes={scenes}
    />
);