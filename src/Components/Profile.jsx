import React from 'react';

class Profile extends React.Component {

    render() {
        let userdata = this.props.userData;
        let followers = `${userdata.homeUrl}/followers`;
        let following = `${userdata.homeUrl}/following`;
        let repos = `${userdata.homeUrl}/repositories`;

        if (userdata.message === 'Not found') {
            return (
                <div className="not Found">
                    <h1>ERROR</h1>
                </div>
            );
        } else {
            return (
                <section className="github-profile">
                    <div className="github-profile-info">
                        <a href={userdata.homeUrl} target="_blank" title={userdata.name || userdata.username}><img src={userdata.avatar} /></a>
                        <h2><a href={userdata.homeUrl} title={userdata.username} target="_blank">{userdata.name || userdata.username}</a></h2>
                        <h3>{userdata.location}</h3>
                    </div>
                    <div className="github-profile-state">
                        <ul>
                            <li>
                                <a href={followers} target="_blank" title="Number Of Followers"><i>{userdata.followers}</i><span>Followers</span></a>
                            </li>
                            <li>
                                <a href={repos} target="_blank" title="Number Of Repositoriy"><i>{userdata.repos}</i><span>Repositoriy</span></a>
                            </li>
                            <li>
                                <a href={following} target="_blank" title="Number Of Following"><i>{userdata.following}</i><span>Following</span></a>
                            </li>
                        </ul>
                    </div>
                </section>
            );
        }

    }
}

export default Profile;