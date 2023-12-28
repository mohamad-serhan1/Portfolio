import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GrMapLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-row pt-40 justify-between gap-10 ">
      <div className=" space-y-7 basis-2/3">
        <h2 className="text-3xl font-bold">Leave Us Your Info</h2>
        <div className="flex flex-col space-y-5  bg-white dark:bg-gray-900 p-8">
          <h2>Your Full Name</h2>
          <Input type="name" placeholder="Your Name" />

          <h2>Your Email</h2>
          <Input type="email" placeholder="Your Email" />

          <h2>Subject</h2>
          <Input type="title" placeholder="Subject" />

          <h2>Your Message</h2>
          <Textarea
            placeholder="Type your message here"
            className="resize-none"
            style={{ height: "150px", padding: "8px", width: "400px" }}
          />
          <Button variant="mycolor" className="w-52">
            Send Message{" "}
          </Button>
        </div>
      </div>

      <div className="space-y-7 w-1/2">
        <h2 className="text-3xl font-bold ">Contact information</h2>

        <div className="flex flex-col">
          <div className="bg-white dark:bg-gray-900 relative flex flex-col p-7 space-y-7">
            <p className="flex justify-center">
              <GrMapLocation />
            </p>
            <div className="flex flex-row justify-between">
              <h2>Country:</h2>
              <h2>Lebanon</h2>
            </div>
            <div className="flex flex-row justify-between">
              <h2>City:</h2>
              <h2>Tripoli</h2>
            </div>
            
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-white dark:bg-gray-900 relative flex flex-col p-7 space-y-7">
            <p className="flex justify-center">
              <MdEmail />
            </p>
            <div className="flex flex-row justify-between">
              <h2>Email:</h2>
              <h2>mohd.ser19@gmail.com</h2>
            </div>
            <div className="flex flex-row justify-between">
              <h2>Facebook:</h2>
              <h2>mohammad Serhan</h2>
            </div>
            <div className="flex flex-row justify-between">
              <h2>Instagram:</h2>
              <h2>@mohmad.serhan</h2>
            </div>
            
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-white dark:bg-gray-900 relative flex flex-col p-7 space-y-7">
            <p className="flex justify-center">
              <FaMobile />
            </p>
            <div className="flex flex-row justify-between">
              <h2>Personal:</h2>
              <h2>+96171653887</h2>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
