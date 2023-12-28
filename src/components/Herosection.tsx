import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";


function Herosection() {
  return (
    <div className="mt-[50px] pt flex flex-row gap-24 justify-center bg-white p-8 dark:bg-gray-900 ">
      <div className="space-y-8 pt-[80px]">
        <h2 className="font-bold text-5xl">I'm Mohammad Serhan </h2>
        <h2 className="font-bold text-5xl">
          <span className="text-yellow-400">Front-end</span> Developer
        </h2>

        <p className="w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <Button variant="mycolor">
            <h2 className="flex gap-2 items-center">
                HIRE ME <FaArrowRightLong />
            </h2>
        </Button>
      </div>

      <div>
      <img className="w-80 h-96" src="https://via.placeholder.com/326x459" />
      </div>
    </div>
  );
}

export default Herosection;
