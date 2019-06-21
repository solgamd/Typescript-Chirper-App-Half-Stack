import * as React from 'react';
import ChirpCard from './ChirpCard';
import { number, string } from 'prop-types';


interface IHomeProps { }
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

        this.state = {  // The onClick button value should be this.state.text. How can you pass down the state correctly?
            chirps: []
        }
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

    postChirp() {
        // console.log(this.state.chirpstext);
        // let newArray = this.state.chirps;
        // newArray.push(this.state.text)
        
    }
    render() {
        return (
            <>
                <section className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card border-info mb-5">
                            <div className="card-body">
                                <h5 className="card-title">What's Chirpin'?</h5>
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state}></textarea>
                                    <button onClick={() => this.postChirp()} className="btn btn-primary" type="submit">Chirp It!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row m-5">
                    {this.state.chirps.map(chirp => <ChirpCard key={chirp.id} chirp={chirp} />)}
                </section>
            </>
        )
    };
};

export default Home;