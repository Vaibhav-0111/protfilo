import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const certifications = [
  {
    name: 'SQL (Basic)',
    issuer: 'HackerRank',
  },
  {
    name: 'Introduction to Hardware and Operating Systems',
    issuer: 'Coursera',
  },
  {
    name: 'Digital Systems: From Logic Gates to Processors',
    issuer: 'Coursera',
  },
  {
    name: 'Fundamentals of Network Communication',
    issuer: 'Coursera',
  },
  {
    name: 'Bitcoin Theory Course Certificate',
    issuer: 'Udemy',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Certifications</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My commitment to continuous learning and professional development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium font-headline">{cert.name}</CardTitle>
                <BadgeCheck className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// updtaed certification tx
