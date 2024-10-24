export default function ParseTopics(gptResponse:any) {
    const topicRegex = /\d+\.\s\[(.*?)\]\s+Topic Summary:\s(.*?)\s+Keywords\/Entities:\s(.*?)(?:\n|$)/gs;
    const topics = [];
    let match;
  
    while ((match = topicRegex.exec(gptResponse)) !== null) {
      console.log('Match Found:', match); // Debugging
  
      const category = match[1].trim(); // Extract the category in square brackets
      const summary = match[2].trim();
      const keywords = match[3].trim().split(',').map((k) => k.trim());
  
      topics.push({ category, summary, keywords });
    }
  
    // console.log('Parsed Topics:', topics);
    return topics;
  }
  