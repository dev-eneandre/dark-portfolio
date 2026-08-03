import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkill } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocial } from "@/utils/fetchSocials";
import { profileImages } from "@/lib/profileImages";

export const revalidate = 60;

export default async function Home() {
  const [pageInfo, experiences, skills, projects, socials] = await Promise.all([
    fetchPageInfo(),
    fetchExperiences(),
    fetchSkill(),
    fetchProjects(),
    fetchSocial(),
  ]);

  return (
    <div
      data-scroll-container
      className="bg-[#0a0c15] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0891B2]/80"
    >
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-start">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer z-30">
          <div className="flex items-center justify-center">
            <div className="rounded-full p-0.5 bg-[#0891B2]/20 ring-1 ring-[#0891B2]/30 transition-all duration-300 hover:ring-[#0891B2]/60 hover:bg-[#0891B2]/30">
              <img
                src={profileImages.footer}
                alt="Back to top"
                className="h-10 w-10 rounded-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
}
