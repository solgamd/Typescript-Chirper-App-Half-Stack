import * as React from 'react';
import ChirpCard from './ChirpCard';


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

    async componentDidMount() {
        try {
            let res = await fetch("/api/chirps");
            let data = await res.json();
            let chirps = Object['keys'](data).map(key => {
                return {
                    id: key,
                    user: data[key].user,
                    text: data[key].text
                };
            });
            chirps.pop();
            chirps.reverse();
            this.setState({ chirps: data });

        } catch (error) {
            console.log(error);
        }
    };
    
    
    postChirp(value) {
        let newChirp = {
            user: value
            text,
            id
        }
        
    }
    render() {
        let chirpFeed = this.state.chirps.map((chirp, i) => {
            return <ChirpCard key={chirp.id} chirp={chirp} />
        })

        return (
            <>
                <section className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card border-info mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Start Chirpin'!</h5>
                                <form className="form-group">
                                    <label>Username:</label>
                                    <input className="form-control"
                                    value={this.state.user}></input>
                                    <label>Chirp:</label>
                                    <input className="form-control"
                                    value={this.state.text}></input>
                                    <button onClick={(value) => this.postChirp(value)} className="btn btn-primary" type="submit">Chirp It!</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row m-5">
                    {chirpFeed}
                </section>
            </>
        )
    };
};

export default Home;