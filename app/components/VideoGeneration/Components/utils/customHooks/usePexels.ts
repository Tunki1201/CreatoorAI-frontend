import axios from 'axios';

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const PEXELS_API_URL = 'https://api.pexels.com/videos/search';

export const usePexels = async (query:any, perPage = 5) => {
  try {
    const response = await axios.get(PEXELS_API_URL, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      params: {
        query, // Keywords for search
        per_page: perPage, // Number of videos to fetch
      },
    });

    return response.data.videos; // Return array of video objects
  } catch (error) {
    console.error('Error fetching videos from Pexels:', error);
    return [];
  }
};
