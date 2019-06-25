import * as React from 'react';
import ChirpCard from './ChirpCard';

interface IHomeProps { }
interface IHomeState {
    chirps: {
        id: string,
        user: string,
        text: string
    }[],
    user: string, // for input value
    text: string  // for input value
}

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props)

        this.state = {  
            chirps: [],
            user: '',
            text: ''
        }
    }

    // async _getAllChirps() {
    //     try {
    //         let res = await fetch("/api/chirps");
    //         let data = await res.json();        //JSon converted to JS
    //         let chirps = Object.keys(data).map(key => {
    //             return {
    //                 id: key,
    //                 user: data[key].user,
    //                 text: data[key].text
    //             };
    //         });
    //         chirps.pop();
    //         chirps.reverse();
    //         this.setState({ chirps });

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async componentDidMount() {
        // this._getAllChirps
        try {
            let res = await fetch('/api/chirps');
            let data = await res.json();        //JSon converted to JS
            let chirps = Object.keys(data).map(key => {
                return {
                    id: key,
                    user: data[key].user,
                    text: data[key].text
                };
            });
            chirps.pop();
            chirps.reverse();
            this.setState({ chirps });
        } catch (error) {
            console.log(error);
        }
    };


    async handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        // this._getAllChirps();
        try {
            await fetch('/api/chirps', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: this.state.user, text: this.state.text })
            })
            let res = await fetch('/api/chirps');
            let data = await res.json();
            let chirps = Object.keys(data).map(key => {
                return {
                    id: key,
                    user: data[key].user,
                    text: data[key].text
                }
            });
            chirps.pop();
            chirps.reverse();
            this.setState({ chirps });
        } catch (error) {
            console.log(error);
        };
        this.setState({ user: '', text: '' });
    }

    render() {
        let chirpFeed = this.state.chirps.map((chirp) => {
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
                                    <input
                                        className="form-control"
                                        value={this.state.user}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ user: e.target.value })}
                                    />

                                    <label>Chirp:</label>
                                    <input
                                        className="form-control"
                                        value={this.state.text}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value })}
                                    />
                                    <button onClick={(e) => this.handleClick(e)} className="btn btn-primary" type="submit">Chirp It!</button>
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