
const GOOGLE_API_KEY = "AIzaSyDlM3TaEoRlXcwRU4LNtjhVbdLTaLieyOs";

export  const YOUTUBE_VIDEOS_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=${GOOGLE_API_KEY}`

export const YOUTUBE_CHANNEL_INFO_API =
  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const VIDEO_DETAILS_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;
  

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  // "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
  "https://streamifyr.onrender.com/api/searchSuggestions?q=";

export const YOUTUBE_VIDEO_COMMENTS_API = 
  `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&maxResults=50&key=${GOOGLE_API_KEY}&videoId=`;

export const YOUTUBE_SEARCH_RESULTS_API = 
`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${GOOGLE_API_KEY}&q=`;

export const OFFSET_LIVE_CHAT = 75;

export const SHIMMER_CARD_COUNT = 8;





