'use server';
/**
 * @fileOverview A flow for generating project ideas.
 *
 * - generateProjectIdea - A function that generates a project idea based on a topic.
 * - ProjectIdeaInput - The input type for the generateProjectIdea function.
 * - ProjectIdeaOutput - The return type for the generateProjectIdea function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ProjectIdeaInputSchema = z.object({
  topic: z.string().describe('The topic for the project idea.'),
});
export type ProjectIdeaInput = z.infer<typeof ProjectIdeaInputSchema>;

const ProjectIdeaOutputSchema = z.object({
  title: z.string().describe('A catchy and descriptive title for the project.'),
  description: z
    .string()
    .describe('A one-paragraph summary of the project idea.'),
  features: z
    .array(z.string())
    .describe('A list of 3-5 key features for the project.'),
});
export type ProjectIdeaOutput = z.infer<typeof ProjectIdeaOutputSchema>;

export async function generateProjectIdea(
  input: ProjectIdeaInput
): Promise<ProjectIdeaOutput> {
  return projectIdeaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectIdeaPrompt',
  input: { schema: ProjectIdeaInputSchema },
  output: { schema: ProjectIdeaOutputSchema },
  prompt: `You are a creative assistant that generates innovative project ideas for developers.
  
Given the topic "{{topic}}", generate a unique and interesting project idea.

Provide a short, catchy title, a one-paragraph description of the project, and a list of 3-5 key features a developer could implement.

Ensure the idea is practical for a portfolio project.`,
});

const projectIdeaFlow = ai.defineFlow(
  {
    name: 'projectIdeaFlow',
    inputSchema: ProjectIdeaInputSchema,
    outputSchema: ProjectIdeaOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
