import { Skill } from "@/typings";

export const fetchSkill = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  // const res = await fetch(`http://localhost:3000/api/getSkills`);
  const res = await fetch(`api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  //   console.log("fetching ", skills);

  return skills;
};
