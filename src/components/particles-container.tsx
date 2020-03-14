import * as React from 'react';
import Particles from 'react-particles-js';
import {IOptions} from "tsparticles/dist/Interfaces/Options/IOptions";
import {RecursivePartial} from "tsparticles/dist/Types/RecursivePartial";

interface IProps {
    params: RecursivePartial<IOptions>;
}

export class ParticlesContainer extends React.PureComponent<IProps> {
    render() {
        return <Particles params={this.props.params} className="frame-layout__particles"/>
    }
}