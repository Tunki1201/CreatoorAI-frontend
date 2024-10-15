import { NextResponse } from 'next/server';
import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: process.env.RUNWAY_API_KEY, // Use your secret key here
});

export async function POST(req: any) {
  try {
    const { promptImage, promptText } = await req.json();

    // Create the image-to-video task
    const imageToVideo = await client.imageToVideo.create({
      model: 'gen3a_turbo',
      promptImage,
      promptText,
    });

    const taskId = imageToVideo.id;

    let task;
    // Poll for task completion
    do {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      task = await client.tasks.retrieve(taskId);
    } while (!['SUCCEEDED', 'FAILED'].includes(task.status));

    // Check the final status
    if (task.status === 'SUCCEEDED') {
      // Retrieve task details using a GET request
      const taskDetails = await client.tasks.retrieve(taskId); // Use the SDK method to get task details

      // Check if output exists and has at least one URL
      if (taskDetails.output && taskDetails.output.length > 0) {
        const outputUrl = taskDetails.output[0]; // Get the output URL from the response
        return NextResponse.json({ outputUrl });
      } else {
        return NextResponse.json({ error: 'No output available' }, { status: 400 });
      }
    } else {
      return NextResponse.json({ error: 'Video generation failed' }, { status: 400 });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
