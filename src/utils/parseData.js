import axios from "axios";
import { parseVideoDuration } from "../utils/parseVideoDuration";
import { convertRawtoString } from "../utils/convertRawtoString";
import { timeSince } from "../utils/timeSince";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const parseData = async (items) => {
  try {
      const videoIds = [];
      const channelIds = [];
      items.forEach((item) => {
          channelIds.push(item.snippet.channelId);
          videoIds.push(item.id.videoId);
      });

      const channelResponse = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`
      );
      const parsedChannelsData = channelResponse.data.items.map((channel) => ({
          id: channel.id,
          image: channel.snippet.thumbnails.default.url,
      }));

      const videoResponse = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`
      );
      const parsedVideosData = videoResponse.data.items.map((video, index) => ({
          videoId: items[index].id.videoId,
          videoTitle: items[index].snippet.title,
          videoDescription: items[index].snippet.description,
          videoThumbnail: items[index].snippet.thumbnails.medium.url,
          videoLink: `https://www.youtube.com/watch?v=${items[index].id.videoId}`,
          videoDuration: parseVideoDuration(video.contentDetails.duration),
          videoViews: convertRawtoString(video.statistics.viewCount),
          videoAge: timeSince(new Date(items[index].snippet.publishedAt)),
          channelInfo: parsedChannelsData.find(data => data.id === items[index].snippet.channelId),
      }));

      return parsedVideosData;
  } catch (err) {
      console.log(err);
      return [];
  }
};

