/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { requireNativeComponent } from 'react-native';

class SampleTableView extends React.Component {
    render() {
        return <RCTTableView {...this.props} />;
    }
}

SampleTableView.propTypes = {
    stringArray: React.PropTypes.array,
};

var RCTTableView = requireNativeComponent('RCTTableView', SampleTableView);

module.exports = SampleTableView;
