/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    TouchableHighlight,
    View,
    Text,
} from 'react-native';

import AppTabBar from './appTabBar';
import Helper from './helper';

const ROUTE_TABVIEW_1 = 'ROUTE_TABVIEW_1';
const ROUTE_TABVIEW_2 = 'ROUTE_TABVIEW_2';
const ROUTE_TABVIEW_3 = 'ROUTE_TABVIEW_3';
const ROUTE_TABVIEW_4 = 'ROUTE_TABVIEW_4';
const ROUTE_TABVIEW_5 = 'ROUTE_TABVIEW_5';
const tabBarRoutes: Array = [
    { label: ROUTE_TABVIEW_1, title: 'Tab 1', image: require('SampleProject/images/tab.png'), selectedImage: require('SampleProject/images/tab_active.png') },
    { label: ROUTE_TABVIEW_2, title: 'Tab 2', image: require('SampleProject/images/tab.png'), selectedImage: require('SampleProject/images/tab_active.png') },
    { label: ROUTE_TABVIEW_3, title: 'Tab 3', image: require('SampleProject/images/tab.png'), selectedImage: require('SampleProject/images/tab_active.png') },
    { label: ROUTE_TABVIEW_4, title: 'Tab 4', image: require('SampleProject/images/tab.png'), selectedImage: require('SampleProject/images/tab_active.png') },
    { label: ROUTE_TABVIEW_5, title: 'Tab 5', image: require('SampleProject/images/tab.png'), selectedImage: require('SampleProject/images/tab_active.png') },
];


export default class MainController extends Component {

    tabNavigator = null;

    constructor(props: any) {
        super(props);

    }

    render() {        
        return (
            <View style={styles.container}>
                <Navigator
                    ref={ (tabNavigator) => this.tabNavigator = tabNavigator }
                    style={styles.tabNavigator}
                    initialRoute={tabBarRoutes[0]}
                    initialRouteStack={tabBarRoutes}
                    renderScene={(route, navigator) => {
                        if (route.label == ROUTE_TABVIEW_1) {
                            return (
                                <View style={styles.sampleView}>
                                    <Text style={styles.sampleViewText}>1</Text>
                                </View>
                            );

                        } else if (route.label == ROUTE_TABVIEW_2) {
                            return (
                                <View style={styles.sampleView}>
                                    <Text style={styles.sampleViewText}>2</Text>
                                </View>
                            );

                        } else if (route.label == ROUTE_TABVIEW_3) {
                            return (
                                <View style={styles.sampleView}>
                                    <Text style={styles.sampleViewText}>3</Text>
                                </View>
                            );

                        } else if (route.label == ROUTE_TABVIEW_4) {
                            return (
                                <View style={styles.sampleView}>
                                    <Text style={styles.sampleViewText}>4</Text>
                                </View>
                            );

                        } else {
                            return (
                                <View style={styles.sampleView}>
                                    <Text style={styles.sampleViewText}>5</Text>
                                </View>
                            );
                        }
                    }}
                    configureScene={(route, routeStack) => {
                        return Helper.NO_TRANSITION;
                    }} />

                <AppTabBar
                    style={styles.tabBar}
                    items={tabBarRoutes}
                    onIndexChange={(index) => {
                        let route = tabBarRoutes[index];
                        this.tabNavigator && this.tabNavigator.jumpTo(route);
                    }} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainNavigator: {
        flex: 1,
    },
    tabNavigator: {
        flex: 1,
    },
    tabBar: {
        flex: 0,
        backgroundColor: '#F2F2F2',
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
        height: 55,
        borderTopWidth: 1,
    },

    sampleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sampleViewText: {
        fontSize: 100,
    }
});

AppRegistry.registerComponent('MainController', () => MainController);
