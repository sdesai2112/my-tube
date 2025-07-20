export const API = {
  POPULAR_VIDEOS:
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    process.env.REACT_APP_API_KEY,
  SEARCH_SUGGESTION:
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=",
  VIDEO_CATEGORIES:
    "https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
    process.env.REACT_APP_API_KEY,
};

export const LIVE_CHAT_COUNT = 20;
