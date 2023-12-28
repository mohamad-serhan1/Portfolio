import React from "react";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";

function mainSidebar() {
  return (
    <div>
      <div className="flex flex-col  bg-white dark:bg-gray-900 p-5">
        <div className="mt-[50px] border-b pb-2 flex flex-col justify-evenly">
          <div className="flex flex-row items-center justify-center ">
            <img
              className="w-36 h-36 rounded-full "
              src="https://via.placeholder.com/150x150"
            />
          </div>

          <p className="text-center font-semibold pt-2">Mohammad Serhan</p>
          <p className="text-center pt-2 font-thin">Front-end Developer</p>

          <div className="flex flex-row justify-evenly pt-2">
            <svg
              className=" bg-yellow-500 rounded-lg p-[2px]"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_6956)">
                <path
                  d="M8.16683 7.87484H9.62516L10.2085 5.5415H8.16683V4.37484C8.16683 3.774 8.16683 3.20817 9.3335 3.20817H10.2085V1.24817C10.0183 1.22309 9.30025 1.1665 8.54191 1.1665C6.95816 1.1665 5.8335 2.13309 5.8335 3.90817V5.5415H4.0835V7.87484H5.8335V12.8332H8.16683V7.87484Z"
                  fill="#2B2B2B"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_6956">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              className=" bg-yellow-400 rounded-lg p-[2px]"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_6946)">
                <path
                  d="M6.99984 1.1665C8.58475 1.1665 8.7825 1.17234 9.40434 1.2015C10.0256 1.23067 10.4485 1.32809 10.8207 1.47275C11.2057 1.62092 11.53 1.82159 11.8543 2.14534C12.151 2.43694 12.3805 2.78968 12.5269 3.179C12.671 3.55059 12.769 3.97409 12.7982 4.59534C12.8256 5.21717 12.8332 5.41492 12.8332 6.99984C12.8332 8.58475 12.8273 8.7825 12.7982 9.40434C12.769 10.0256 12.671 10.4485 12.5269 10.8207C12.3809 11.2102 12.1513 11.563 11.8543 11.8543C11.5626 12.1509 11.2099 12.3804 10.8207 12.5269C10.4491 12.671 10.0256 12.769 9.40434 12.7982C8.7825 12.8256 8.58475 12.8332 6.99984 12.8332C5.41492 12.8332 5.21717 12.8273 4.59534 12.7982C3.97409 12.769 3.55117 12.671 3.179 12.5269C2.78953 12.3808 2.43673 12.1512 2.14534 11.8543C1.84866 11.5628 1.61913 11.21 1.47275 10.8207C1.32809 10.4491 1.23067 10.0256 1.2015 9.40434C1.17409 8.7825 1.1665 8.58475 1.1665 6.99984C1.1665 5.41492 1.17234 5.21717 1.2015 4.59534C1.23067 3.9735 1.32809 3.55117 1.47275 3.179C1.61873 2.78944 1.84831 2.43661 2.14534 2.14534C2.43681 1.84856 2.78959 1.61901 3.179 1.47275C3.55117 1.32809 3.9735 1.23067 4.59534 1.2015C5.21717 1.17409 5.41492 1.1665 6.99984 1.1665ZM6.99984 4.08317C6.22629 4.08317 5.48442 4.39046 4.93744 4.93744C4.39046 5.48442 4.08317 6.22629 4.08317 6.99984C4.08317 7.77339 4.39046 8.51525 4.93744 9.06223C5.48442 9.60921 6.22629 9.9165 6.99984 9.9165C7.77339 9.9165 8.51525 9.60921 9.06223 9.06223C9.60921 8.51525 9.9165 7.77339 9.9165 6.99984C9.9165 6.22629 9.60921 5.48442 9.06223 4.93744C8.51525 4.39046 7.77339 4.08317 6.99984 4.08317ZM10.7915 3.93734C10.7915 3.74395 10.7147 3.55848 10.5779 3.42174C10.4412 3.28499 10.2557 3.20817 10.0623 3.20817C9.86895 3.20817 9.68348 3.28499 9.54674 3.42174C9.40999 3.55848 9.33317 3.74395 9.33317 3.93734C9.33317 4.13072 9.40999 4.31619 9.54674 4.45294C9.68348 4.58968 9.86895 4.6665 10.0623 4.6665C10.2557 4.6665 10.4412 4.58968 10.5779 4.45294C10.7147 4.31619 10.7915 4.13072 10.7915 3.93734ZM6.99984 5.24984C7.46397 5.24984 7.90909 5.43421 8.23727 5.7624C8.56546 6.09059 8.74984 6.53571 8.74984 6.99984C8.74984 7.46397 8.56546 7.90909 8.23727 8.23727C7.90909 8.56546 7.46397 8.74984 6.99984 8.74984C6.53571 8.74984 6.09059 8.56546 5.7624 8.23727C5.43421 7.90909 5.24984 7.46397 5.24984 6.99984C5.24984 6.53571 5.43421 6.09059 5.7624 5.7624C6.09059 5.43421 6.53571 5.24984 6.99984 5.24984Z"
                  fill="#2B2B2B"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_6946">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              className=" bg-yellow-400 rounded-lg p-[2px]"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_6936)">
                <path
                  d="M12.9277 3.29953C12.4823 3.49652 12.0101 3.62589 11.5265 3.68337C12.0362 3.37854 12.4177 2.89879 12.5998 2.33353C12.1215 2.6182 11.5971 2.8177 11.0505 2.92562C10.6834 2.53279 10.1967 2.27226 9.66624 2.18454C9.13575 2.09682 8.59115 2.18682 8.11709 2.44055C7.64303 2.69428 7.26607 3.09752 7.04483 3.58758C6.82359 4.07764 6.77045 4.62707 6.89368 5.15045C5.92366 5.10183 4.97471 4.84976 4.10843 4.41059C3.24216 3.97142 2.47792 3.35498 1.86535 2.60128C1.64852 2.97371 1.53457 3.39708 1.53518 3.82803C1.53518 4.67387 1.96568 5.42112 2.62018 5.85862C2.23285 5.84642 1.85405 5.74182 1.51535 5.55354V5.58387C1.51546 6.14719 1.7104 6.69314 2.06709 7.12915C2.42379 7.56516 2.9203 7.8644 3.47243 7.97612C3.11287 8.07356 2.73586 8.08792 2.36993 8.01812C2.5256 8.503 2.82902 8.92707 3.23769 9.23093C3.64637 9.5348 4.13984 9.70325 4.64901 9.7127C4.14296 10.1101 3.56353 10.4039 2.94386 10.5773C2.32419 10.7507 1.67642 10.8002 1.0376 10.723C2.15275 11.4402 3.4509 11.8209 4.77676 11.8197C9.26435 11.8197 11.7184 8.10212 11.7184 4.87804C11.7184 4.77304 11.7155 4.66687 11.7108 4.56303C12.1885 4.2178 12.6008 3.79013 12.9283 3.30012L12.9277 3.29953Z"
                  fill="#2B2B2B"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_6936">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              className=" bg-yellow-400 rounded-lg p-[2px]"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_6926)">
                <path
                  d="M4.04818 2.91676C4.04802 3.22618 3.92496 3.52287 3.70606 3.74155C3.48715 3.96023 3.19035 4.083 2.88093 4.08285C2.57151 4.08269 2.27482 3.95963 2.05614 3.74072C1.83746 3.52182 1.71469 3.22501 1.71484 2.9156C1.715 2.60618 1.83806 2.30949 2.05697 2.09081C2.27587 1.87213 2.57267 1.74936 2.88209 1.74951C3.19151 1.74967 3.4882 1.87273 3.70688 2.09163C3.92556 2.31053 4.04833 2.60734 4.04818 2.91676ZM4.08318 4.94676H1.74984V12.2501H4.08318V4.94676ZM7.76984 4.94676H5.44818V12.2501H7.74651V8.4176C7.74651 6.2826 10.529 6.08426 10.529 8.4176V12.2501H12.8332V7.62426C12.8332 4.0251 8.71484 4.15926 7.74651 5.92676L7.76984 4.94676Z"
                  fill="#2B2B2B"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_6926">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              className=" bg-yellow-500 rounded-lg p-[2px]"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_6916)">
                <path
                  d="M12.5666 3.79066C12.8332 4.83016 12.8332 7.00016 12.8332 7.00016C12.8332 7.00016 12.8332 9.17016 12.5666 10.2097C12.4184 10.7842 11.985 11.2363 11.4361 11.3892C10.4392 11.6668 6.99984 11.6668 6.99984 11.6668C6.99984 11.6668 3.56225 11.6668 2.56359 11.3892C2.01234 11.234 1.5795 10.7825 1.43309 10.2097C1.1665 9.17016 1.1665 7.00016 1.1665 7.00016C1.1665 7.00016 1.1665 4.83016 1.43309 3.79066C1.58125 3.21608 2.01467 2.764 2.56359 2.61116C3.56225 2.3335 6.99984 2.3335 6.99984 2.3335C6.99984 2.3335 10.4392 2.3335 11.4361 2.61116C11.9873 2.76633 12.4202 3.21783 12.5666 3.79066ZM5.83317 9.04183L9.33317 7.00016L5.83317 4.9585V9.04183Z"
                  fill="#2B2B2B"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_6916">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="pt-3 border-b pb-2 flex flex-col  items-center">
          <div className="flex flex-row justify-between w-full  pb-2">
            <p className="bg-yellow-400 px-2 py-[1px] rounded-md text-sm">
              Age
            </p>
            <p className="text-sm">24</p>
          </div>
          <div className="flex flex-row justify-between w-full pb-2">
            <p className="bg-yellow-400 px-2 py-[1px] rounded-md text-sm">
              Residence
            </p>
            <p className="text-sm"></p>
          </div>
          <div className="flex flex-row justify-between w-full pb-2">
            <p className="bg-yellow-400 px-2 py-[1px] rounded-md text-sm">
              Freelance
            </p>
            <p className="text-sm text-green-600">Available</p>
          </div>
          <div className="flex flex-row justify-between w-full pb-2">
            <p className="bg-yellow-400 px-2 py-[1px] rounded-md text-sm">
              Address
            </p>
            <p className="text-sm">Lebanon,Tripoli</p>
          </div>
        </div>

        <div className=" pt-3 border-b pb-4 flex flex-col">
          <h2 className="font-semibold">Languages</h2>

          <div className="flex flex-row justify-between w-56 pt-2">
            <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
              Arabic
            </div>
            <h2 className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
              100%
            </h2>
          </div>

          <div className="w-56 h-1 relative">
            <div className="w-56 h-1 left-0 top-0 absolute rounded-3xl border border-yellow-500" />
            <div className="w-56 h-0.5 left-[1px] top-[1px] absolute bg-yellow-500 rounded-3xl" />
          </div>

          <div className="flex flex-row justify-between w-56 pt-2">
            <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
              English
            </div>
            <h2 className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
              80%
            </h2>
          </div>

          <div className="w-56 h-1 relative">
            <div className="w-56 h-1 left-0 top-0 absolute rounded-3xl border border-yellow-500" />
            <div className="w-44 h-0.5 left-[1px] top-[1px] absolute bg-yellow-500 rounded-3xl" />
          </div>
        </div>

        <div className="pt-3 border-b pb-4 flex flex-col">
          <h2 className="font-semibold">Skills</h2>

          <div className="pt-2 ">
            <div className="py-1">
              <div className="flex flex-row justify-between w-56">
                <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  Html
                </div>
                <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  90%
                </div>
              </div>

              <div className="w-56 h-1 relative">
                <div className="w-56 h-1 left-0 top-0 absolute rounded-3xl border border-yellow-500" />
                <div className="w-52 h-0.5 left-[1px] top-[1px] absolute bg-yellow-500 rounded-3xl" />
              </div>
            </div>

            <div className="py-1">
              <div className="flex flex-row justify-between w-56">
                <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  CSS
                </div>
                <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  90%
                </div>
              </div>

              <div className="w-56 h-1 relative">
                <div className="w-56 h-1 left-0 top-0 absolute rounded-3xl border border-yellow-500" />
                <div className="w-52 h-0.5 left-[1px] top-[1px] absolute bg-yellow-500 rounded-3xl" />
              </div>
            </div>

            <div className="py-1">
              <div className="flex flex-row justify-between w-56">
                <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  JS
                </div>
                <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  80%
                </div>
              </div>

              <div className="w-56 h-1 relative">
                <div className="w-56 h-1 left-0 top-0 absolute rounded-3xl border border-yellow-500" />
                <div className="w-44 h-0.5 left-[1px] top-[1px] absolute bg-yellow-500 rounded-3xl" />
              </div>
            </div>

            <div className="py-1">
              <div className="flex flex-row justify-between w-56">
                <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  PHP
                </div>
                <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  70%
                </div>
              </div>

              <div className="w-56 h-1 relative">
                <div className="w-56 h-1 left-0 top-0 absolute rounded-3xl border border-yellow-500" />
                <div className="w-36 h-0.5 left-[1px] top-[1px] absolute bg-yellow-500 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-b pb-4 flex flex-col">
          <h2 className="font-semibold">Extra Skills</h2>
          <div className="pt-2 flex flex-row gap-2 items-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
              <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
            </svg>
            <p className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
              Tailwind, SCSS
            </p>
          </div>

          <div className="pt-2 flex flex-row gap-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
              <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
            </svg>
            <p className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
              React, React Vite, NextJs{" "}
            </p>
          </div>

          <div className="pt-2 flex flex-row gap-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
              <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
            </svg>
            <p className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
              GIT & GITHUB{" "}
            </p>
          </div>

          <div className="pt-2 flex flex-row gap-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
              <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
            </svg>
            <p className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
              Hygraph, Graphql ,Prisma{" "}
            </p>
          </div>
        </div>

        <Button className="mt-3 " variant="mycolor">
          <div className="flex flex-row gap-2 items-center">
            <h2>Download CV</h2>
            <FaDownload />
          </div>
        </Button>
      </div>
      <div>

      </div>
    </div>
  );
}

export default mainSidebar;
