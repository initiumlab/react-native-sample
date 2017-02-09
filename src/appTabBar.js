/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

export default class MainTabBar extends Component {

    constructor(props) {
        super(props);
        this._onPressIndex = this._onPressIndex.bind(this);
        this.state = {
            selectedIndex: props.initialIndex || 0,
        }
    }

    render() {
        return (
            <View {...this.props}>
                <View style={styles.container}>
                    {this._renderTabs(this.props.items, this.state.selectedIndex)}
                </View>
            </View>
        );
    }

    _renderTabs(items, selectedIndex) {
        var tabViews = [];
        for (var i = 0; i < items.length; i++) {
            let index = i; // do not use 'i' directly
            let item = items[i];
            let selected = (index == this.state.selectedIndex);
            tabViews.push(
                <TouchableWithoutFeedback
                    key={`tab-${index}`}
                    style={styles.tabTouchable}
                    underlayColor={'rgba(0, 0, 0, 0.1)'}
                    onPress={ () => this._onPressIndex(index) }>
                    <View style={styles.tabWrapper}>
                        <Image
                            style={styles.tabImage}
                            source={selected ? item.selectedImage : item.image} />
                        <Text style={[styles.tabText, (selected ? styles.tabTextSelected : null)]}>{item.title}</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        };
        return tabViews;
    }

    _onPressIndex(index) {
        if (this.state.selectedIndex != index) {
            this.setState({
                selectedIndex: index,
            });
            this.props.onIndexChange && this.props.onIndexChange(index);
        }
    }

}

MainTabBar.propTypes = {
    items: PropTypes.array.isRequired,
    initialIndex: PropTypes.number,
    onIndexChange: PropTypes.func,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        borderRadius: MainTabBar.defaultHeight / 2,
        overflow: 'hidden',
        minHeight: 49,
    },
    tabTouchable: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabImage: {

    },
    tabText: {
        fontSize: 10,
        color: '#B3B3B3',
        marginTop: 2,
    },
    tabTextSelected: {
        color: '#2bb6c9',
    },
});
