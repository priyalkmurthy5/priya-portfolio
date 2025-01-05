import { socialMedia } from "@/data";
import LitUpButton from "./ui/litUpButton";

const Footer = () => {
    return (
        <footer className=" bg-black-100 w-full pt-20 pb-10" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Reach Out - <span className="text-pink-500">Let&apos;s Make Ideas Happen!</span>
                </h1>
                <p className="text-white md:mt-10 my-5 text-center">
                    I&apos;m always open to exploring new opportunities—let&apos;s talk!
                </p>
                <a href="mailto:pkrish24@ncsu.edu">
                    <LitUpButton
                        title="Let's get in touch"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        }
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Priya Krishnamurthy
                </p>


            </div>
        </footer>
    );
};

export default Footer;