export const API = {
  POPULAR_VIDEOS:
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    process.env.REACT_APP_API_KEY,
};
