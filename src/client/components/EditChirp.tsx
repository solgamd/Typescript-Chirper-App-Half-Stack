import * as React from 'react';
import ChirpCard from "./ChirpCard";


export interface IEditProps {
    chirp: {
        id: number,
        user: string,
        text: string
    }
}
 
const EditChirp: React.SFC<IEditProps> = (props) => {
    return (
        <section className="row">
            <ChirpCard chirp={chirp.id} />
        </section>
      );
}
 
export default EditChirp;