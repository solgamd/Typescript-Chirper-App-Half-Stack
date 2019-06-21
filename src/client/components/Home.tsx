import * as React from 'react';
import ChirpCard from './ChirpCard';


interface IHomeProps {}
interface IHomeState {
    chirps: {
        id: number,
        user: string,
        text: string
    }[]
}

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props)
        this.state = { chirps: [] }
    }

    async componentWillMount() {
        try {
            let res = await fetch("/api/chirps");
            let chirps = await res.json();
            this.setState({ chirps });

        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <section className="row m-5">
                {this.state.chirps.map(chirp => <ChirpCard key={chirp.id} chirp={chirp} />)}
            </section>
        )
    };
};

export default Home;