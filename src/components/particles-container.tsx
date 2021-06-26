import * as React from 'react';
import Particles, { IParticlesParams } from 'react-particles-js';
import { createRef } from 'react';

interface IProps {
    params: IParticlesParams;
}

export class ParticlesContainer extends React.PureComponent<IProps> {

    ref = createRef<any>();

    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return <Particles particlesRef={this.ref} params={this.props.params} className="frame-layout__particles"/>
    }
}