"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PageInfo } from "@/typings";
import SectionHeader from "./SectionHeader";
import { defaultTransition, fadeInUp } from "@/lib/motion";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  const prefersReducedMotion = useReducedMotion();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = () => {};

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  const contactItems = [
    {
      icon: EnvelopeIcon,
      label: pageInfo.email,
      href: `mailto:${pageInfo.email}`,
    },
    {
      icon: MapPinIcon,
      label: pageInfo.address,
    },
    {
      icon: PhoneIcon,
      label: pageInfo.phoneNumber,
      href: `tel:${pageInfo.phoneNumber?.replace(/\s/g, "")}`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center max-w-7xl px-4 md:px-10 py-24 md:py-28 mx-auto">
      <SectionHeader
        label="Contact"
        title="Let's talk"
        subtitle="Have a role in mind or want to learn more? Reach out — I typically respond within 24 hours."
        className="mb-10 md:mb-12"
      />

      <motion.div
        variants={fadeInUp}
        transition={defaultTransition}
        {...motionProps}
        className="flex flex-col items-center space-y-8 max-w-lg mx-auto w-full"
      >
        <div className="font-nuni-sans w-full space-y-4">
          {contactItems.map(({ icon: Icon, label, href }) => (
            <div
              key={label}
              className="flex items-center justify-center md:justify-start gap-4 text-gray-300"
            >
              <Icon className="text-[#0891B2] h-5 w-5 shrink-0" />
              {href ? (
                <Link
                  href={href}
                  className="text-base hover:text-[#0891B2] transition-colors"
                >
                  {label}
                </Link>
              ) : (
                <p className="text-base">{label}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          <Link href={`mailto:${pageInfo.email}`}>
            <button className="bg-[#0891B2] hover:bg-[#0e7490] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors">
              Email Me
            </button>
          </Link>
          <Link href="/resume/Andre.pdf" target="_blank" rel="noopener noreferrer">
            <button className="heroButton">Resume</button>
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 w-full pt-4 border-t border-[#242424]"
        >
          <p className="text-xs text-gray-500 text-center">
            Form submission coming soon — use email above for now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full"
              type="text"
              disabled
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full"
              type="email"
              disabled
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput w-full opacity-50"
            type="text"
            disabled
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput w-full opacity-50"
            disabled
          />
          <button
            type="submit"
            disabled
            className="bg-[#0891B2]/40 py-3 px-10 rounded-full text-gray-400 font-semibold text-sm uppercase tracking-widest cursor-not-allowed"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactMe;
