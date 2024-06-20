import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkill } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocial } from "@/utils/fetchSocials";
import { useEffect } from "react";

type Props = {
  pageInfo: PageInfo;
  // experiences: Experience[];
  // skills: Skill[];
  // projects: Project[];
  // socials: Social[];
};
export default function Home({
  pageInfo,
  // experiences,
  // skills,
  // projects,
  // socials,
}: Props) {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
    console.log("what a life i live");
  }, []);
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a84b4b]/80">
      <Head>
        <title>Next Js Portfolio</title>
      </Head>

      {/* <Header socials={socials} /> */}

      {/* Hero section  */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* <div>
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </div> */}

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  // const experiences: Experience[] = await fetchExperiences();
  // const skills: Skill[] = await fetchSkill();
  // const projects: Project[] = await fetchProjects();
  // const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      // experiences,
      // skills,
      // projects,
      // socials,
    },
    revalidate: 10,
  };
};
