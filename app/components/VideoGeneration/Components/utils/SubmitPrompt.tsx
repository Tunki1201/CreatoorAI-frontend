export default async function SubmitPrompt(prompt: string) {
  try {
    const formattedPrompt = `
Avoid using brackets/square brackets and special characters in your answers.
       ${prompt}
      Create video scripts that will be 90 seconds or less in the style of Cleo Abram. Use the transcripts in the project knowledge to determine the consistent formula behind the video scripts, then use the details about the video idea inside of the prompt to create a video about the details in the prompt in the style of the Cleo Abrams videos, following a very similar formula.
Use the Viral Hooks Master List  as inspiration by using the one that makes the most sense for the context and to formulate the most appropriate irresistible hook that fits the context of the script. Begin with an attention-grabbing opening that introduces the topic in an intriguing way. Ensure this is a unique content idea - either first to market with a common idea or an uncommon idea.
Explain the key points of the news or development, providing context and details from the given article. Frame these points to appeal to a large applicable audience. Mention that this trend extends beyond just one company, giving a brief example to reinforce the large applicable audience.
Present a balanced view, mentioning that this development also presents opportunities. Introduce a unique point of view or "story lens" here. Discuss potential future impacts or opportunities, using these to provoke sharing by offering insights that viewers might want to share for social credibility.
Make sure your conclusions always ask a question that invites the viewer to share their opinion in the comments. Design this to maximize sharing and comments.
Write the entire script in full sentences without bullet points or section headings. Do not say your name is Cleo, and don't use annotations. Just share the entire script as one cohesive piece of text. 

    
     
      `;

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: formattedPrompt }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Request failed with status ${response.status}: ${data.error}`
      );
    }

    return data.text;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
