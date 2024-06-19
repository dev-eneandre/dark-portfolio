import { Skill } from "@/typings";

export const fetchSkill = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const res = await fetch(
    `https://dark-portfolio-git-main-deveneandres-projects.vercel.app/api/getSkills`
  );

  const data = await res.json();
  const skills: Skill[] = data.skills;

  //   console.log("fetching ", skills);

  return skills;
};
