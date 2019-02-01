import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '549556445793-lpocsoic4ohgjtq8atqpkl54hfo9us17.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return (
            <div>Google Auth</div>
        );
    }
};

export default GoogleAuth;