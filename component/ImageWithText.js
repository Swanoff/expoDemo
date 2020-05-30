import React, {Component} from 'react';
import {Image, Text} from 'react-native';

export default class ImageWithText extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <>
                {
                    this.props.type == 'url'
                    ?
                    (
                        <>
                            <Image 
                                source={{uri: this.props.source}}
                                style={{height: 150, width: 150}}
                            />
                            <Text>{this.props.text}</Text>
                        </>
                    )
                    :
                    (
                        <>
                            <Image 
                                source={this.props.source}
                                style={{height: 150, width: 150}}
                            />
                            <Text>{this.props.text}</Text>
                        </>
                    )
                }
            </>
        )
    }
}