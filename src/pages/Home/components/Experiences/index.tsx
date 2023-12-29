import React from "react";
import data from "./data.json";
import Card from "./components/Card";

const Experiences: React.FC = () => {
	return (
		<div>
			{data?.jobs?.map((job, index) => {
				return (
					<div
						key={index}
						className={`
                        flex flex-col md:${
													!(index % 2) ? "flex-row-reverse" : "flex-row"
												} items-start justify-evenly  max-w-5xl mx-auto px-3 gap-7 my-20
                    `}
					>
						<Card job={job} />
					</div>
				);
			})}
		</div>
	);
};

export default Experiences;
