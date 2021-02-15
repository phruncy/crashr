import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animation from '../assets/data.json';

class LottieDemo extends Component 
{
    state = {
        isStopped : false, 
        isPaused: false
    }

    animationOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {preserveAspectRatio: 'xMidYMid slice',}
    };

    render() {
        return(
            <div 
                onClick={() => {this.setState({isPaused: !this.state.isPaused})}}
                style={{cursor: 'pointer'}
                }>
                <h1>Dummy Component</h1>
                <p>Click on the animation to pause / unpause it</p>
                <Lottie 
                    options={this.animationOptions} 
                    height={200} 
                    width={200}
                    isStopped={this.state.isStopped} 
                    isPaused={this.state.isPaused}/>
                <p>{this.state.isPaused ? "PAUSED" : ""}</p>
            </div>
        );
    }
}

export default LottieDemo;