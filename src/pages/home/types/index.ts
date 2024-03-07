export interface FormValues {
  name: string;
  tweet: string;
}

export interface FormProps {
  initialName?: string;
  initialTweet?: string;
}

export interface ITweets {
  id: number;
  name: string;
  tweet: string;
}
