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
import SampleTableView from './sampleTableView';

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
                                <SampleTableView
                                    style={{flex: 1}}
                                    stringArray={SAMPLE_TABLE_DATA} />
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



//////////////////

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
    { label: ROUTE_TABVIEW_5, title: 'TableView', image: require('SampleProject/images/tab.png'), selectedImage: require('SampleProject/images/tab_active.png') },
];

const SAMPLE_TABLE_DATA: Array = [
    "Gorsuch Calls Trump Critique of Federal Court ‘Demoralizing’",
    "Watch: Mr. Trump called the courts “so political.”",
    "Sessions Confirmed as Partisan Rancor Racks the Senate",
    "In Silencing Warren, G.O.P. Hands Her a Megaphone",
    "Texas Democrats grew angry over Mr. Trump’s remark on destroying a state senator’s career.",
    "Cabinet Picks Have Faced Record-Setting Opposition",
    "Mitch McConnell, the Senate majority leader, is very happy with the Trump presidency thus far.",
    "Trump’s Criticism of Nordstrom Raises Ethics Issues",
    "Yemen backtracked on a suspension of U.S. raids it imposed after a mission that left civilian casualties.",
    "Showing support for the president, Intel will invest $7 billion to complete an Arizona factory first conceived in 2011.",
    "A third New England Patriots player said he would skip the team’s White House visit.",
    "Take a trip along the Texas portion of the 1,900-mile border between the United States and Mexico.",
    "Stuck on the Treadmill of Temporary Work in Europe",
    "After Mr. Trump’s Din, the Quiet Grandeur of the Courts",
    "Donald Trump, Middle-School President",
    "Elizabeth Warren Was Told to Be Quiet. Women Can Relate.",
    "Shouldn’t Israel Care About Anti-Semitism?",
    "How Meditation Changes the Brain and Body",
    "Why Cooks Love the Instant Pot",
    "Review: In ‘The Lego Batman Movie,’ What’s Not to Like?",
    "Celebrities Vanish From Fashion’s Front Row",
    "Rarely Seen Photos of Japanese Internment",
    "Years of Compliance With Immigration, Now Deportation",
    "Lost Letters Offer Glimpse Into the Heart of Jacqueline Kennedy",
    "Your Daily Mini Crossword",
    "New York Closes Schools as Winter Storm Approaches",
    "Tackling a Problem Decades in the Making: Overloaded Investigators",
    "Tornado Rips Through New Orleans",
    "Investigating a Son’s ‘Houdini Suicide’ in a Locked Police Car",
    "See the stories that Times readers are recommending most.",
    "Arizona Man Gets 30-Year Sentence in Texas Attack Inspired by ISIS",
    "Blame Is Ricocheting in Deaths of Rebel Army Leaders in Ukraine",
    "Weak Reporting System Let Risky Surgical Device Stay in Use",
    "Growing Concern for Euro as Italy and Greece Pile Up Debt",
    "Judge, Citing Harm to Customers, Blocks $48 Billion Anthem-Cigna Merger",
    "31 Years Old, 5 Albums, Best New Artist Nominee",
    "Meet BJ the Chicago Kid, Nineteen85 and Gallant, three new faces at the award show.",
    "Do you have the next big story?",
    "Family Has Come a Long Way Since Receiving $289 Seven Years Ago"
];
