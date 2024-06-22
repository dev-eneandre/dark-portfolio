import { Social } from "@/typings";

export const fetchSocial = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  // const res = await fetch(`http://localhost:3000/api/getSocials`);
  const res = await fetch(`api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  //   console.log("fetching ", socials);
  return socials;
};
