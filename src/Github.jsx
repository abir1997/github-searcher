import React from 'react';
import Search from './Components/Search';
import Profile from './Components/Profile';

const API = 'https://api.github.com/users';
class Github extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            username: 'abir1997',
            name: '',
            avatar: '',
            repos: '',
            followers: '',
            following: '',
            homeUrl: '',
            notFound: ''
        };
    }

    getProfile(username) {
        let finalUrl = `${API}/${username}`;

        fetch(finalUrl)
            .then((result) => result.json())
            .then((data) => {
                this.setState({
                    username: data.login,
                    name: data.name,
                    avatar: data.avatar_url,
                    repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    homeUrl: data.html_url,
                    notFound: data.message
                });
            })
        .catch ((error) =>
            console.log("Problem with fetching data"))
    }

    componentDidMount(){
        this.getProfile(this.state.username);
    }

    render() {
        return (
            <div>
                <section id="card">
                    <Search seachProfile = {this.getProfile.bind(this)} />

                </section>
            </div>
        );
    }
}

export default Github;