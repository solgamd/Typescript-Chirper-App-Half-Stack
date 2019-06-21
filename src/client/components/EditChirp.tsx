import * as React from 'react';
import ChirpCard from "./ChirpCard";

export interface IEditProps {}
export interface IEditState {
    chirp: {
        id: number,
        user: string,
        text: string
    }[]
};

class EditChirp extends React.Component<IEditProps, IEditState> {
    
    constructor(props: IEditProps) {
        super(props)
        this.state = { chirp: [] }
    }

    async componentWillMount() {
        try {
            let res = await fetch("/api/chirps/:id");
            let chirp = await res.json();
            this.setState({ chirp: chirp.id });

        } catch (error) {
            console.log(error);
        }
    };
    render() {
        return (
        <section className="row">
            <h1>Individual Chirp Goes Here</h1>
            {/* {this.state.chirp.map(aChirp => <ChirpCard key={aChirp.id} chirp={aChirp} />)} */}
        </section>
      );
    }
    
}
 
export default EditChirp;