import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TumblrList from './TumblrList'
import TumblrProfile from './TumblrProfile'
import { StackNavigator } from 'react-navigation';

const blog = 'marvelentertainment.tumblr.com';
const api_key = 'hGp9r890CuKRTsGm7xGszgce1fBYr7bxm8mvfCtIHdXqFX8MC9';

const Routes = StackNavigator({
  TumblrList: {
    screen: TumblrList
  },
  TumblrProfile: {
    screen: TumblrProfile
  }
})

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 0
    }
    this.loadMore = this.loadMore.bind(this)
    this.fetchPost = this.fetchPost.bind(this)
  }

  async componentWillMount() {
    await this.fetchPost(0).then((posts) => {
      this.setState({
        posts
      })
    })
  }

  async fetchPost(page) {
    console.log(page)
    const api = `https://api.tumblr.com/v2/blog/${blog}/posts/photo?api_key=${api_key}&offset=${page * 4}`;
    let data = await fetch(api);
    let result = await data.json();

    return result.response.posts;
  }

  async loadMore() {
    const page = this.state.page + 1;

    this.setState({
      page,
    }, async () => {
      await this.fetchPost(page).then((newPosts) => {
        this.setState({
          posts: this.state.posts.concat(newPosts),
        })
      })
    })
  }

  render() {
    return (
      <Routes screenProps={{
        posts: this.state.posts,
        handleLoadmore: this.loadMore
      }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
