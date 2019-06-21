import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IChirpCardProps {
    chirp: {
        id: number,
        user: string,
        text: string
    }
}

const ChirpCard: React.SFC<IChirpCardProps> = (props) => {
    return (
        <article className="col-md-6 offset-3">
            <div className="card m-1 shadow">
                <div className="card-body">
                    <h4 className="card-title">{props.chirp.user}</h4>
                    <p className="card-text">{props.chirp.text}</p>
                    <Link to="/:id" className="btn btn-primary shadow">Edit Chirp</Link>
                </div>
            </div>
        </article>
    );
};

export default ChirpCard;