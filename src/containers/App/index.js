import React, { Component } from 'react';
import * as firebase from 'firebase';
import config from './firebase-config';


class App extends Component {
  constructor() {
    super();

    //Initialize Firebase
    firebase.initializeApp(config);
  }

  state = {
      posts: [],
      loading: false
  };

    componentWillMount() {
        //Store db 'posts' reference in postsRef
        let postsRef = firebase.database().ref('posts');

        //I wonder if I should keep this or refactor to ES6
        //I understand how the author wants to avoid the window object to be picked up as this
        let _this = this;
        
        //Set up live update on val change
        postsRef.on('value', function(snapshot) {
            console.log(snapshot.val());
        
        //Store snapshot value in post state
            _this.setState({
                posts: snapshot.val(),
                loading: false
            });
        });
    }
    render () {
        return (
            <div className="App">
                Hello World
            </div>
        );
    }
  }


export default App;