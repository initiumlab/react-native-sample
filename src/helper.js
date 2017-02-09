import React, { Component } from 'react';
import {
    Navigator,
} from 'react-native';


var NoTransition = {
    opacity: {
        value: 1.0,
        type: 'constant',
    }
};
const buildStyleInterpolator = require('buildStyleInterpolator');
const NO_TRANSITION = {
    ...Navigator.SceneConfigs.FadeAndroid,
    gestures: null,
    defaultTransitionVelocity: 1000,
    animationInterpolators: {
        into: buildStyleInterpolator(NoTransition),
        out: buildStyleInterpolator(NoTransition)
    }
};

export default {
	NO_TRANSITION: NO_TRANSITION,
}