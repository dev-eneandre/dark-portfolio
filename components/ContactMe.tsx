"use client";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (formData) => {};
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-arvo">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-[500] text-center font-arvo ">
          {`I've got just what you need `}
          <span className="underline decoration-[#a84b4b]/50 underline-offset-8">
            Lets Talk.
          </span>
        </h4>
        <div className="font-nuni-sans">
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#a84b4b] h-6 w-6 animate-pulse" />
            <p className="text-xl">iameneandre@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#a84b4b] h-6 w-6 animate-pulse" />
            <p className="text-xl">123, Developer Lane</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#a84b4b] h-6 w-6 animate-pulse" />
            <p className="text-xl">+23490909090</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput "
          />

          <button
            type="submit"
            className="bg-[#a84b4b] py-5 px-10 rounded-md text-black font-bold text-lg uppercase tracking-[7px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
