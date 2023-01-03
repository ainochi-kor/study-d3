export interface ICity {
  label: string;
  population: string;
  country: string;
  x: string;
  y: string;
}

export interface ITweet {
  user: string;
  content: string;
  timestamp: string;
  retweets: string[];
  favorites: string[];
  numTweets?: number;
}
