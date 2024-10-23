import Anthropic from "@anthropic-ai/sdk";

export async function POST(request: Request) {
  const anthropic = new Anthropic({
    apiKey: process.env.CLAUDE_API_KEY
  });

  const { messages } = await request.json(); // Get the messages from the request body
  if (!messages || messages.length === 0) {
    return new Response("Missing messages in request body", { status: 400 });
  }

  const prompt = "You are an advanced NLP system. I will provide you with a video transcript or captions. Your task is to: 1. Extract key topics, events, and themes mentioned in the text. 2. Arrange these topics in chronological order, as they appear in the transcript. 3. For each topic, provide: - Timestamp (if available or inferred) - Topic Summary (one sentence) - Keywords or Entities (related terms, names, or key phrases) 4. Make sure the list is ordered in sequence as they occur in the text. If timestamps are missing, try to infer breaks between topics from context. Here is the transcript: [Insert Transcript Here] Please return the result in the following format: 1. [Timestamp or Order] Topic Summary: [Brief summary of the topic] Keywords/Entities: [List of related terms] 2. [Timestamp or Order] Topic Summary: [Brief summary of the topic] Keywords/Entities: [List of related terms] Continue in this format for the rest of the topics."

  // Prepare the user message from the received data
  const userMessage = messages[0].content;

  try {
    const msg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 2551,
      temperature: 1,
      system: prompt,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `: ${userMessage}`,
            },
          ],
        },
      ],
    });

    // Type assertion here
    const responseText = (msg.content[0] as { text: string }).text;

    return new Response(JSON.stringify(responseText), { status: 200 });
  } catch (error) {
    console.error("Error communicating with Anthropic API:", error);
    return new Response("Failed to fetch response from Anthropic API", { status: 500 });
  }
}
