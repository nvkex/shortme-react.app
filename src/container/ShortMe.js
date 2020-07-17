import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import './ShortMe.css';

class ShortMe extends React.Component {

    state = {
        submitted: false,
        url: "",
        slug: ""
    }

    componentDidMount() {
        console.log(this.props);
    }

    inputURL = event => {
        this.setState({ url: event.target.value });
    }

    shortenURL = () => {
        axios.post('https://nvkex-short-me.herokuapp.com/url', {
            url: this.state.url
        })
            .then(res => {
                this.setState({ submitted: true, slug: res.data.slug });
                document.getElementById("url").value = "https://shortme.netlify.app/" + res.data.slug;
                // document.getElementById("url").value = this.props.location.pathname + "/" + res.data.slug;
                console.log(res);
                // console.log(res.data.slug);
            })
            .catch(err => {
                console.log(err, "ERROR");
            })
    }

    copyURL = () => {
        const shortenedURL = document.getElementById("url");
        shortenedURL.select();
        document.execCommand("copy");
        alert("Copied");
    }

    render() {
        let btnContent = (
            <button
                className="btn btn-outline-light btn-lg my-4"
                onClick={this.shortenURL}
            >Shorten</button>
        );

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
            </div>
        );
    }
}

export default withRouter(ShortMe);