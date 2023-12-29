import React from "react";
import data from "./data.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useAnimate, stagger } from "framer-motion";

const Hero: React.FC = () => {
	const [dpLoading, setDpLoading] = React.useState(true);

	return (
		<>
			<div className="px-2 flex flex-col items-center text-center justify-center gap-6 min-h-[80vh]">
				<motion.div
					layout
					className="overflow-hidden p-2 rounded-full border-4 border-primary-500 w-fit h-fit"
				>
					<motion.img
						src="/tam.jpg"
						className="max-w-[220px] w-[95vw] rounded-full"
						initial={{
							// scale: 0.5,
							height: "10px",
						}}
						animate={{
							// scale: 1,
							height: dpLoading ? "10px" : "auto",
						}}
						onLoad={() => setDpLoading(false)}
						transition={{ type: "spring", stiffness: 50, when: "" }}
					/>
				</motion.div>
				<h1 className="text-2xl mt-8">
					Hi, I'm <span className="font-bold text-primary">{data.name}</span>
				</h1>
				<h2 className="text-4xl font-semibold max-w-md">{data.about}</h2>
				<div>
					{data.socials?.map((social, index) => (
						<React.Fragment key={index}>
							{index !== 0 && (
								<span className="text-slate-400 font-semibold">/</span>
							)}
							<Link
								to={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block text-primary 
                            font-semibold mx-2 hover:text-primary-500 transition-colors duration-300 tracking-widest"
							>
								{social.name}
							</Link>
						</React.Fragment>
					))}
				</div>
			</div>
			<div className="mix-blend-luminosity flex flex-row flex-wrap items-center justify-evenly gap-7 px-2">
				{data?.companies?.map((company, index) => (
					<div key={index}>
						<img
							src={company}
							className="h-16"
						/>
					</div>
				))}
			</div>
			<div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-2 my-20 gap-14">
				<p className="max-w-md text-xl md:text-2xl font-semibold text-center md:text-left">
					Collaborate with brands & agencies to create impactful result.
				</p>
				<Link
					to={`mailto:${data.email}`}
					className="px-10 py-3 bg-primary bg-opacity-10 rounded-full border-2 border-primary text-primary font-extrabold tracking-widest"
				>
					EMAIL ME
				</Link>
			</div>
		</>
	);
};

export default Hero;
