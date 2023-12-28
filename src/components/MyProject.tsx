import React from "react";
import Image from "next/image";
import BlogImage from "../../public/blog.png";
import Link from "next/link";
const MyProject = () => {
  return (
    <div className="flex flex-col pt-40   items-center justify-center space-y-20">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="w-96 h-16  text-neutral-500 text-base font-normal ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>

      <div className="grid grid-cols-3 gap-28 ">
        <div>
          <Link href="https://blog-re.vercel.app" target="_blank">
            <Image src={BlogImage} alt="blog" width={300} height={200} />
          </Link>
        </div>
        <div>
          <Link href="https://blog-re.vercel.app" target="_blank">
            <Image src={BlogImage} alt="blog" width={300} height={200} />
          </Link>{" "}
        </div>
        <div>
          <Link href="https://blog-re.vercel.app" target="_blank">
            <Image src={BlogImage} alt="blog" width={300} height={200} />
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default MyProject;
