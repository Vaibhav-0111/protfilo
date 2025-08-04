'use client';

import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  generateProjectIdea,
  type ProjectIdeaInput,
  type ProjectIdeaOutput,
} from '@/ai/flows/project-idea-flow';
import { Lightbulb, Loader2, ListChecks } from 'lucide-react';

const formSchema = z.object({
  topic: z.string().min(2, {
    message: 'Topic must be at least 2 characters.',
  }),
});

export default function ProjectIdeaGenerator() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [idea, setIdea] = useState<ProjectIdeaOutput | null>(null);

  const form = useForm<ProjectIdeaInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
    },
  });

  async function onSubmit(values: ProjectIdeaInput) {
    setLoading(true);
    setIdea(null);
    try {
      const response = await generateProjectIdea(values);
      setIdea(response);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'There was a problem generating your idea. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="idea-generator" className="bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              AI Project Idea Generator
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stuck in a creative rut? Enter a topic and let AI spark your next
              brilliant project.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-12">
          <div className="glass-card w-full">
            <CardHeader>
              <CardTitle>Generate an Idea</CardTitle>
              <CardDescription>
                Enter a technology or concept (e.g., "React", "Data
                Visualization", "Next.js").
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Topic</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Python, AI, MERN..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Lightbulb className="mr-2 h-4 w-4" />
                        Generate Idea
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </div>

          {loading && (
             <div className="glass-card mt-8 animate-pulse">
              <CardHeader>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                   <div className="h-4 bg-muted rounded w-full"></div>
              </CardContent>
            </div>
          )}

          {idea && (
            <div className="glass-card mt-8 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  {idea.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{idea.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <ListChecks className="h-5 w-5 text-primary" />
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {idea.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
