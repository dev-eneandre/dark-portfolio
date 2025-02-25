import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkill } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocial } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div className="bg-[#0a0c15] text-white h-screen snap-y overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0891B2]/80">
      <Head>
        <title>Andre Ene</title>
        <link rel="icon" href="/image/small-logo.png" />
      </Head>
      <Header socials={socials} />
      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="projects">
        <Projects projects={projects} />
      </section>
      <section id="skills">
        <Skills skills={skills} />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              src="/image/Andre1565.jpeg"
              alt="andre's picture"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkill();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // revalidate: 10,
  };
};
