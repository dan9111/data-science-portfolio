
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { SkillsCarousel } from "@/components/skills-carousel";
import { Certificate } from "@/components/certificate";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { FadeInSection } from "@/components/fade-in-section";
import { TypingAnimation } from "@/components/typing-animation";
import { Mail, Github, Linkedin, FileText, Database, Code2, BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-24 bg-background text-foreground relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />

      <div className="absolute top-6 right-6 z-50">
        <ModeToggle />
      </div>

      {/* 1. Hero Section */}
      <FadeInSection>
        <section className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20 max-w-6xl mx-auto pt-10">

          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-full ring-4 ring-background p-1 bg-background">
              <Avatar className="w-64 h-64 md:w-80 md:h-80">
                <AvatarImage src="/avatar.png" alt="Zydan Priambada" className="object-cover" />
                <AvatarFallback className="text-4xl">ZP</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex flex-col text-center md:text-left space-y-6 max-w-2xl">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Muhammad Zydan Priambada
              </h1>
              <div className="text-md md:text-3xl text-primary font-semibold h-10 flex justify-center md:justify-start items-center">
                <TypingAnimation words={["Certified Data Scientist", "Python & SQL Developer", "Machine Learning Engineer"]} className="text-primary" />
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
              Transforming raw data into actionable insights. Specialized in building end-to-end data pipelines and predictive models.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" /> IBM Certified
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Python
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm flex items-center gap-2">
                <Database className="w-4 h-4" /> SQL
              </Badge>
            </div>

            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <Link href="mailto:dan80308@gmail.com" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Contact Me
              </Link>
              <Link href="https://www.linkedin.com/in/muhammadzydan" target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                LinkedIn
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      <Separator className="my-12 opacity-50" />

      {/* 2. Introduction Section (Bento Grid Style) */}
      <FadeInSection>
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center md:text-left border-l-4 border-primary pl-4">Introduction</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="w-6 h-6 text-primary" /> About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-7 text-lg">
                  I am a Certified <span className="font-semibold text-foreground">Data Scientist</span> with
                  strong foundation in <span className="font-semibold text-foreground">Python</span>-driven data science and <span className="font-semibold text-foreground">SQL</span> database management.
                  Experienced in building end-to-end data pipelines from scraping social media data to sentiment analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BrainCircuit className="w-6 h-6 text-primary" /> Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Physics</h4>
                    <p className="text-sm text-primary">Institut Teknologi Bandung</p>
                    <p className="text-xs text-muted-foreground">2021 - 2025</p>
                  </div>
                  <div className="flex items-center justify-between bg-secondary/50 p-3 rounded-lg">
                    <span className="font-medium">GPA</span>
                    <span className="font-medium">3.54 / 4.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeInSection>

      {/* 3. Skills */}
      <FadeInSection>
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center md:text-left border-l-4 border-primary pl-4">Technical Arsenal</h2>
          <SkillsCarousel />
        </section>
      </FadeInSection>

      {/* 4. Projects */}
      <FadeInSection>
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center md:text-left border-l-4 border-primary pl-4">Featured Projects</h2>
          <ProjectsCarousel />
        </section>
      </FadeInSection>

      {/* 5. Certificates */}
      <FadeInSection>
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center md:text-left border-l-4 border-primary pl-4">Certifications</h2>
          <Certificate />
        </section>
      </FadeInSection>

      <Separator className="my-12 opacity-50" />

      {/* 6. Footer / Contact */}
      <footer className="mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <p className="text-muted-foreground mb-8">Open for opportunities in Data Science and Machine Learning.</p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <Link href="mailto:dan80308@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
            <span>dan80308@gmail.com</span>
          </Link>
          <Link href="https://www.linkedin.com/in/muhammadzydan" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>
          <Link href="https://github.com/dan9111" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
        </div>
        <div className="mt-12 text-sm text-muted-foreground opacity-50">
          © {new Date().getFullYear()} Muhammad Zydan Priambada. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
