import React from 'react';
import YouTube from 'react-youtube';

export default function  YoutubeEmbed(props){
    const {id} = props
    console.log(id)
    function _onReady(event) {
    }

        const opts = {
            height: 1080,
            width: 1920,
            playerVars: {
                autoplay: 1,
                controls: 0,
                mute: 1
            },
        };

        return <YouTube videoId={id} opts={opts} onReady={_onReady} />;



}