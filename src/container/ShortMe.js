import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import './ShortMe.css';

class ShortMe extends React.Component {

    state = {
        submitted: false,
        url: "",
        slug: "",
        status: 0
    }

    inputURL = event => {
        this.setState({ url: event.target.value });
    }

    shortenURL = () => {
        axios.post('https://nvkex-short-me.herokuapp.com/url', {
            url: this.state.url
        })
            .then(res => {
                this.setState({ submitted: true, slug: res.data.slug, status: 1 });
                document.getElementById("url").value = "https://nvkex-short-me.herokuapp.com/" + res.data.slug;
                // document.getElementById("url").value = this.props.location.pathname + "/" + res.data.slug;
                // console.log(res.data.slug);
            })
            .catch(err => {
                this.setState({status:-1});
                console.log(err, "ERROR");
            })
    }

    copyURL = () => {
        const shortenedURL = document.getElementById("url");
        shortenedURL.select();
        document.execCommand("copy");
        this.setState({status: 2});
    }

    render() {
        let status = null;
        let btnContent = (
            <button
                className="btn btn-outline-light btn-lg my-4"
                onClick={this.shortenURL}
            >Shorten</button>
        );

        if(this.state.status === -1){
            status = (
                <div className = "error-container my-4 text-center text-danger">
                    <strong>An error has occured! Please check the url.</strong>
                </div>
            );
        }
        else if(this.state.status === 1){
            status = (
                <div className = "error-container my-4 text-center text-success">
                    <strong>Success!</strong>
                </div>
            )
        }
        else if(this.state.status === 2){
            status = (
                <div className = "error-container my-4 text-center text-info">
                    <strong>Copied to clipboard!</strong>
                </div>
            )
        }

        if (this.state.submitted) {
            btnContent = (
                <button
                    className="btn btn-outline-light btn-lg my-4"
                    onClick={this.copyURL}
                >Copy</button>
            )
        }

        return (
            <div>
                <NavBar />
                <div className="container my-4 shortener">
                    <div className=" jumbotron bg-dark text-white">
                        <div className="container my-4 text-center">
                            <h1 className="display-4">URL Shortener</h1>
                            <p className="lead">Shorten and simplify your URLs.</p>
                            <input
                                className="form-control form-control-lg shadow-lg"
                                type="text"
                                placeholder="Paste URL here.."
                                id="url"
                                onChange={this.inputURL}
                            ></input>
                            {btnContent}
                        </div>
                    </div>
                </div>

                {status}
            </div>
        );
    }
}

export default withRouter(ShortMe);