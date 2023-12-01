import client from '../../api/client';

const tweetURL = '/api/tweets';

const getLatestTweets = () => {
  return client.get(tweetURL).then((response) => response);
};

export default getLatestTweets;
