import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IEditProps extends RouteComponentProps<{ id: string }> {

}
export interface IEditState {
    chirp: {
        user: string,
        text: string,
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
            text: '',
        };
    }

    async componentDidMount() {
        let id = this.props.match.params.id;

        try {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            this.setState({ user: chirp.user, text: chirp.text }); //Pulls user & text from the fetch res 'chirp'

        } catch (error) {
            console.log(error);
        };
    };

    async updateChirp(e: React.MouseEvent<HTMLButtonElement>) {
        let id = this.props.match.params.id;
        e.preventDefault();

        try {
            await fetch(`/api/chirps/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user: this.state.user, text: this.state.text })
            })
            
        } catch (error) {
            console.log(error);
        }
        this.props.history.push('/'); //rerouting back to Home 
    }

    async deleteChirp(e: React.MouseEvent<HTMLButtonElement>) { // DELETE REQUEST
        let id = this.props.match.params.id;

        e.preventDefault();
        alert(' delete button works!')
        try {
            await fetch(`/api/chirps/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
            
        } catch (error) {
            console.log(error);
        }
        this.props.history.replace('/'); //rerouting back to Home 
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
                                    value={this.state.user} // Doesn't work
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ user: e.target.value })}
                                />
                                <label>Chirp:</label>
                                <input
                                    className="form-control"
                                    value={this.state.text} // Doesn't work
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value })}
                                />
                                <button onClick={(id) => this.updateChirp(id)} className="btn btn-primary m-1" type="submit">Save Edit</button>
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