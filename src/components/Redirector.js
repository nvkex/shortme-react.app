import axios from 'axios';
import { withRouter } from 'react-router-dom';

function Redirector(props){
    axios.get('https://nvkex-short-me.herokuapp.com'+props.location.pathname)
    .then(res => {
        window.location.href = res.data.url;
    })
    .catch(err => {
        console.log(err);
    });
    return null;
}

export default withRouter(Redirector);