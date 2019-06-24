import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IEditProps extends RouteComponentProps <{id: string}>{}
export interface IEditState {
    chirp: {
        id: string,
        user: string,
        text: string
    }[],
    user: string,
    text: string
};

class AdminOps extends React.Component<IEditProps, IEditState> {

    constructor(props: IEditProps) {
        super(props)
        this.state = {
            chirp: [],
            user: '',
            text: ''
        }
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        try {
            let res = await fetch(`/api/chirps/${id}/admin`);
            let chirp = await res.json();
            this.setState({ chirp });
        } catch (error) {
            console.log(error);
        };
    };

    async updateChirp(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        alert('edit button works!')
    }

    async deleteChirp(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        alert(' delete button works!')
    }
    render() {
        return (
            <section className="row">
                <article className="col-md-6 offset-3">
                    <div className="card m-1 shadow">
                        <div className="card-body">
                            <h4 className="card-title">Your Chirp</h4>
                            <form className="form-group">
                                <label>Username:</label>
                                <input
                                    className="form-control"
                                    placeholder={this.state.user}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ user: e.target.value })}
                                />
                                <label>Chirp:</label>
                                <input
                                    className="form-control"
                                    placeholder={this.state.text}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value })}
                                />
                                <button onClick={(e) => this.updateChirp(e)} className="btn btn-primary m-1" type="submit">Edit</button>
                                <button onClick={(e) => this.deleteChirp(e)} className="btn btn-primary m-1" type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                </article>
            </section>
        );
    }

}

export default AdminOps;