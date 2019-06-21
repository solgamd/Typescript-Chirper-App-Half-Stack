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
            this.setState({ chirp });

        } catch (error) {
            console.log(error);
        }
    };
    render() {
        return (
        <section className="row">
            {this.state.chirp.map(aChirp => <ChirpCard key={aChirp.id} chirp={aChirp} />)}
        </section>
      );
    }
    
}
 
export default EditChirp;