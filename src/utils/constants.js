export const GOOGLE_API_KEY = "AIzaSyClz6FO-rgHHdEZFF_mA6QfzZln8UWxVeM";

export  const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key="
  + GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const VIDEO_DETAILS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="
  + GOOGLE_API_KEY + "&id=";