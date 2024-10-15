import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  if (!openai.apiKey) {
    return NextResponse.json(
      {
        status: 500,
        error: "OpenAI API key not configured, please follow instructions in README.md",
      },
      { status: 500 }
    );
  }

  const data = await request.json();

  const prompt = data.prompt;

  if (!prompt) {
    return NextResponse.json(
      {
        error: "Invalid input! Expected 'prompt' string.",
      },
      { status: 400 }
    );
  }

  try {
    const completionResponse = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct", 
      prompt: prompt, 
      max_tokens: 2048,
      temperature: 0.8,
    });

    const responseText = completionResponse.choices[0].text?.trim();

    return NextResponse.json(
      {
        status: 200,
        text: responseText,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error from OpenAI API:", error);
    return NextResponse.json(
      {
        error: "Failed to get a response from OpenAI.",
      },
      { status: 500 }
    );
  }
}
