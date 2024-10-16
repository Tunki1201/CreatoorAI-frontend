export default async function SubmitPrompt(message: string): Promise<string> {
  try {
    const messages = [
      { role: "user", content: message }, // Prepare the message format expected by the API
    ];

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }), // Send the messages in the request body
    });

    const data = await response.json();

    // Log the raw response data for debugging
    console.log("Raw response data:", data);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}: ${data.error}`);
    }
    
    // Log the expected response
    console.log("API response:", data.response);
    
    return data; 
    
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
