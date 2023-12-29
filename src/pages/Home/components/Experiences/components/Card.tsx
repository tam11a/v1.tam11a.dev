import React from "react";
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";

const Card: React.FC<{ job: CardType }> = ({ job }) => {
	return (
		<>
			<div className="border border-primary p-2 bg-primary bg-opacity-5 rounded-xl">
				<Link
					to={job.showcase.url}
					target="_blank"
				>
					<img
						src={job.showcase.image}
						alt={job.company}
						className="w-[80vw] max-w-sm max-h-[270px] object-cover object-top rounded mb-2"
					/>
				</Link>
				<div className="flex flex-row items-center gap-2">
					<Icon
						icon="typcn:link"
						className="text-3xl text-primary"
					/>
					<Link
						to={job.showcase.url}
						target="_blank"
						className="underline text-slate-200 underline-offset-2"
					>
						{job.showcase.url}
					</Link>
				</div>
			</div>
			<div className="flex-1">
				<Link
					to={job.company_url}
					target="_blank"
				>
					<h3 className="font-extrabold tracking-wider underline-offset-4 mb-2 text-2xl text-primary underline">
						{job.company}
						<InlineIcon
							icon="majesticons:open-line"
							className="text-base ml-2 inline-flex"
						/>
					</h3>
				</Link>
				<h4 className="font-semibold text-slate-400 text-sm">
					{job.company_location}
				</h4>
				<p className="text-justify text-sm mt-2 mb-6">{job.description}</p>
				<ol
					className={`relative ${
						job.positions.length > 1 ? "border-s border-slate-400" : ""
					}
				}`}
				>
					{job.positions.map((position: Position, index: number) => {
						return (
							<li
								className="mb-7 ms-4"
								key={index}
							>
								<div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 border border-black -start-1.5"></div>
								<h3 className="font-semibold text-lg">
									{position.title}{" "}
									<span className="text-primary">
										({position.location_type})
									</span>
								</h3>
								<time className="mb-1 text-sm font-medium leading-none text-slate-400">
									{position.start_date} - {position.end_date} &bull;{" "}
									{position.job_type}
								</time>
							</li>
						);
					})}
				</ol>
			</div>
		</>
	);
};

export interface CardType {
	company: string;
	company_url: string;
	company_location: string;
	description: string;
	positions: Position[];
	showcase: Showcase;
}

export interface Position {
	title: string;
	start_date: string;
	end_date: string;
	duration: string;
	location_type: string;
	job_type: string;
}

export interface Showcase {
	image: string;
	url: string;
}

export default Card;
