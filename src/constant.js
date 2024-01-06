export const GOOGLE_API_KEY = 'AIzaSyABp3SjORjUdWVOKVBks20zckVNBvDsBGs';
export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`
export const YOUTUBE_API_FOR_VIDEO_ID = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=xE_rMj35BIM&key=YOUR_KEY`
export const YOUTUBE_SEARCH_API = `https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=`