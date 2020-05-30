import React, {Component} from 'react';
import {View} from 'react-native';
import ImageWithText from '../component/ImageWithText';

// adressing local images

/* 
    If you're using remote images with uri they can be dynamic but require() for local images 
    needs to resolve the paths at build time. So, the path strings cannot be passed as props.
    Therefore, create a hash for the paths of local images.
*/

const images = {
    boat: require('../assets/testImages/boat.png'),
    hill: require('../assets/testImages/goldhill.png')
}

export default class Screen3 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}} >
                <ImageWithText 
                    type = 'url'
                    text = 'Airplane'
                    source = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
                />

                <ImageWithText 
                    type = 'local'
                    text = 'Boat'
                    source = {images.boat}
                />

                <ImageWithText 
                    type = 'local'
                    text = 'Hill'
                    source = {images.hill}
                />
            </View>
        )
    }
}