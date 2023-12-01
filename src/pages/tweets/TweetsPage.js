//import './TweetsPage.css';
import { useEffect, useState } from 'react';
import style from './TweetsPage.module.css';
import getLatestTweets from './service';
import AppTitle from '../../components/AppTitle';

const TweetsPage = ({ dark, onLogout }) => {
  const [tweets, setTweet] = useState([]);
  // se ejecuta despues del render
  useEffect(() => {
    getLatestTweets().then((response) => setTweet(response));
  }, []);
  return (
    <div>
      <AppTitle title={'Twiter Clone'} color={'cornflowerblue'} />
      <ul
        className={dark ? style.dark : style.app}
        style={{ listStyle: 'none' }}
      >
        {tweets.map((tweet) => {
          return <li key={tweet.id}>{tweet.content}</li>;
        })}
      </ul>
    </div>
  );
};

export default TweetsPage;
