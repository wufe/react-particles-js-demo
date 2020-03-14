import * as React from 'react';
import Particles from 'react-particles-js';
import {IOptions} from "tsparticles/dist/Interfaces/Options/IOptions";
import {RecursivePartial} from "tsparticles/dist/Types/RecursivePartial";

interface IProps {
    id: string;
    params: RecursivePartial<IOptions>;
}

export class ParticlesContainer extends React.PureComponent<IProps> {
    render() {
        return <Particles id={this.props.id} params={this.props.params} className="frame-layout__particles"/>
    }
}