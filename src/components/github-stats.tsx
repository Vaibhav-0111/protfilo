'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GITHUB_USERNAME = 'Vaibhav-0111';

interface LanguageStats {
  name: string;
  value: number;
}

const COLORS = ['#673AB7', '#E91E63', '#F3E5F5', '#9C27B0', '#3F51B5', '#00BCD4'];

export default function GithubStats() {
    const [langStats, setLangStats] = useState<LanguageStats[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGithubStats() {
            setLoading(true);
            try {
                const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
                if (!reposRes.ok) throw new Error('Failed to fetch repository data');
                const reposData = await reposRes.json();
                
                const languageCounts: { [key: string]: number } = {};

                for (const repo of reposData) {
                    if (repo.language) {
                        if (languageCounts[repo.language]) {
                            languageCounts[repo.language]++;
                        } else {
                            languageCounts[repo.language] = 1;
                        }
                    }
                }

                // Relabel TypeScript to MERN
                if (languageCounts['TypeScript']) {
                    languageCounts['MERN'] = (languageCounts['MERN'] || 0) + languageCounts['TypeScript'];
                    delete languageCounts['TypeScript'];
                }
                
                const sortedLangs = Object.entries(languageCounts)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 6) // Top 6 languages
                    .map(([name, value]) => ({ name, value }));

                setLangStats(sortedLangs);

            } catch (error) {
                console.error("Error fetching GitHub stats:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchGithubStats();
    }, []);

    const CustomTooltip = ({ active, payload }: any) => {
      if (active && payload && payload.length) {
        return (
          <div className="p-2 text-sm bg-background border rounded-lg shadow-lg">
            <p className="font-bold">{`${payload[0].name}: ${payload[0].value} repos`}</p>
          </div>
        );
      }
      return null;
    };

    return (
        <section id="github-stats" className="bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Language Distribution</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            A breakdown of my most used programming languages across my GitHub projects.
                        </p>
                    </div>
                </div>
                <div className="mx-auto flex justify-center py-12">
                    {loading ? (
                       <Skeleton className="h-[400px] w-[400px] rounded-full" />
                    ) : (
                        <div className="w-full h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={langStats}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={150}
                                        fill="#8884d8"
                                        dataKey="value"
                                        nameKey="name"
                                        paddingAngle={5}
                                        innerRadius={90}
                                    >
                                        {langStats.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'hsla(var(--background))'}}/>
                                    <Legend
                                        iconSize={12}
                                        layout="vertical"
                                        verticalAlign="middle"
                                        align="right"
                                        formatter={(value) => <span className="text-foreground/80">{value}</span>}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
                 <div className="text-center">
                    <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                    View GitHub Profile
                    </a>
                </div>
            </div>
        </section>
    );
}
