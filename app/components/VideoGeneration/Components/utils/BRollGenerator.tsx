import React, { useEffect, useState, useCallback } from 'react';
import { usePexels } from './customHooks/usePexels'; // Custom hook
import { throttle } from 'lodash';

// Define types for props and state
interface Topic {
  category: string;
  keywords: string[];
}

interface VideoFile {
  link: string;
}

interface Video {
  id: number;
  video_files: VideoFile[];
}

interface BRoll {
  topic: string;
  videos: Video[];
}

// Props for the component
interface BRollGeneratorProps {
  topics: Topic[];
}

const BRollGenerator: React.FC<BRollGeneratorProps> = ({ topics }) => {
  const [bRolls, setBRolls] = useState<BRoll[]>([]);

  // Throttled function to fetch videos from Pexels
  const fetchVideosThrottled = useCallback(
    throttle(async (keyword: string, topic: Topic) => {
      const videos: Video[] = await usePexels(keyword);
      setBRolls((prevBRolls) => [
        ...prevBRolls,
        { topic: topic.category, videos },
      ]);
    }, 1000), // 1 second throttle interval
    []
  );

  useEffect(() => {
    const fetchAllVideos = async () => {
      for (const topic of topics) {
        const keyword = topic.keywords[0]; // Use the first keyword for search
        fetchVideosThrottled(keyword, topic); // Throttled API call
      }
    };

    fetchAllVideos();
  }, [topics, fetchVideosThrottled]);

  return (
    <div>
      <h2>B-Roll Videos</h2>
      {bRolls.map((bRoll, index) => (
        <div key={index}>
          <h3>{bRoll.topic}</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            {bRoll.videos.map((video) => (
              <video
                key={video.id}
                src={video.video_files[0].link}
                controls
                width="200"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BRollGenerator;
