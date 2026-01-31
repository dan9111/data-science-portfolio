import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { FeaturedProjects } from "@/components/featured-projects";
import { SkillsGrid } from "@/components/skills-grid";
import { CertificationsGrid } from "@/components/certifications-grid";
import { TypingAnimation } from "@/components/typing-animation";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Header />

      <main className="flex flex-col items-center w-full pt-16">
        {/* Hero Section */}
        <section className="w-full px-4 md:px-10 lg:px-40 py-12 md:py-20 flex justify-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-glow pointer-events-none rounded-full blur-3xl opacity-50"></div>
          <div className="flex flex-col max-w-[960px] flex-1 relative z-10">
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
              <div className="flex flex-col gap-6 text-center md:text-left flex-1">
                <h1 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight glow-text">
                  Hi, I&apos;m Zydan.<br />
                  <span className="text-gradient">Data Scientist Fresh Graduate.</span>
                </h1>
                <div className="text-muted-foreground text-lg font-normal leading-relaxed max-w-xl h-16 md:h-auto">
                  <TypingAnimation
                    words={[
                      "Transforming raw data into actionable insights.",
                      "Building end-to-end data pipelines.",
                      "Specializing in Python & SQL development.",
                      "Creating predictive machine learning models."
                    ]}
                    className="text-muted-foreground"
                  />
                </div>
                <div className="flex gap-4 pt-2 justify-center md:justify-start flex-wrap">
                  <Link
                    href="#projects"
                    className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-primary-foreground text-base font-bold transition-transform hover:scale-105 btn-glow"
                  >
                    View Projects
                  </Link>
                  <a
                    href="/cv.pdf"
                    download
                    className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-secondary text-foreground text-base font-bold border border-transparent hover:border-primary hover:bg-transparent transition-all gap-2"
                  >
                    <span className="material-symbols-outlined text-xl">download</span>
                    Download CV
                  </a>
                  <a
                    href="/portfolio.pdf"
                    download
                    className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-secondary text-foreground text-base font-bold border border-transparent hover:border-primary hover:bg-transparent transition-all gap-2"
                  >
                    <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
                    Portfolio PDF
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-border">
                  <Image
                    src="/avatar.jpg"
                    alt="Muhammad Zydan Priambada"
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="w-full px-4 md:px-10 lg:px-40 py-12 flex justify-center" id="projects">
          <div className="flex flex-col max-w-[960px] flex-1">
            <h2 className="text-foreground text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary material-symbols-outlined text-3xl">rocket_launch</span>
              Featured Projects
            </h2>
            <FeaturedProjects />
          </div>
        </section>

        {/* About Me Section */}
        <section className="w-full px-4 md:px-10 lg:px-40 py-12 flex justify-center bg-card" id="about">
          <div className="flex flex-col max-w-[960px] flex-1">
            <h2 className="text-foreground text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary material-symbols-outlined text-3xl">person</span>
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-muted-foreground text-base leading-relaxed">
                  I am a <span className="font-semibold text-foreground">Certified Data Scientist</span> with a strong foundation in
                  <span className="font-semibold text-foreground"> Python</span>-driven data science and
                  <span className="font-semibold text-foreground"> SQL</span> database management.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Experienced in building end-to-end data pipelines from scraping social media data to sentiment analysis.
                  I am passionate about applying rigorous data integrity standards to solve real-world business problems.
                </p>
              </div>
              <div className="pl-0 md:pl-2">
                <div className="grid grid-cols-[40px_1fr] gap-x-2">
                  {/* Education Entry 1 */}
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div className="size-8 rounded-full bg-background border border-primary flex items-center justify-center text-primary z-10">
                      <span className="material-symbols-outlined text-sm font-bold">school</span>
                    </div>
                    <div className="w-[1px] bg-gradient-to-b from-primary to-border h-full grow min-h-[60px]"></div>
                  </div>
                  <div className="flex flex-col pb-8">
                    <h3 className="text-foreground text-lg font-bold">Bachelor of Physics</h3>
                    <p className="text-primary text-sm font-medium mb-2">Institut Teknologi Bandung • 2021 - 2025</p>
                    <p className="text-muted-foreground text-sm">GPA: 3.54 / 4.00. Focused on computational physics and data analysis.</p>
                  </div>

                  {/* Certification Entry */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-[1px] bg-border h-2"></div>
                    <div className="size-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground z-10 group-hover:border-primary group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-sm">verified</span>
                    </div>
                  </div>
                  <div className="flex flex-col pb-2">
                    <h3 className="text-foreground text-lg font-bold">IBM Data Science Professional</h3>
                    <p className="text-primary/70 text-sm font-medium mb-2">Coursera • 2026</p>
                    <p className="text-muted-foreground text-sm">Certified in Python, SQL, Machine Learning, and Data Visualization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="w-full px-4 md:px-10 lg:px-40 py-12 flex justify-center" id="certifications">
          <div className="flex flex-col max-w-[960px] flex-1">
            <h2 className="text-foreground text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary material-symbols-outlined text-3xl">verified</span>
              Certifications
            </h2>
            <CertificationsGrid />
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full px-4 md:px-10 lg:px-40 py-12 flex justify-center bg-card" id="skills">
          <div className="flex flex-col max-w-[960px] flex-1">
            <h2 className="text-foreground text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary material-symbols-outlined text-3xl">psychology</span>
              Skills &amp; Technologies
            </h2>
            <SkillsGrid />
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full px-4 md:px-10 lg:px-40 py-16 flex justify-center relative" id="contact">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col max-w-[960px] flex-1 z-10">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-foreground text-3xl font-bold mb-4">Let&apos;s Collaborate</h2>
                <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  Have a project in mind or want to discuss data science opportunities? I&apos;m always open to new challenges.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
                <Link href="mailto:dan80308@gmail.com" className="flex items-center gap-3 group">
                  <div className="size-10 rounded-lg bg-background flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Mail className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email</span>
                    <span className="text-foreground group-hover:text-primary transition-colors text-sm">
                      dan80308@gmail.com
                    </span>
                  </div>
                </Link>
                <Link href="https://github.com/dan9111" target="_blank" className="flex items-center gap-3 group">
                  <div className="size-10 rounded-lg bg-background flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Github className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">GitHub</span>
                    <span className="text-foreground group-hover:text-primary transition-colors text-sm">
                      github.com/dan9111
                    </span>
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/muhammadzydan" target="_blank" className="flex items-center gap-3 group">
                  <div className="size-10 rounded-lg bg-background flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Linkedin className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">LinkedIn</span>
                    <span className="text-foreground group-hover:text-primary transition-colors text-sm">
                      linkedin.com/in/muhammadzydan
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border py-8 text-center bg-background z-10">
        <p className="text-muted-foreground text-xs md:text-sm">© {new Date().getFullYear()} Muhammad Zydan Priambada. All rights reserved.</p>
      </footer>
    </div>
  );
}
