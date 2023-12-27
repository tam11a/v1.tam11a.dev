import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="min-h-[80vh] flex flex-col gap-5 items-center justify-center">
			<img
				src="/404.svg"
				className="max-w-xl mx-auto"
			/>
			<p className="text-4xl my-7 font-semibold">No Page Found</p>
			<button
				className="transition-colors duration-300  text-base bg-primary hover:bg-primary-dark text-black py-3 px-5 rounded-full font-extrabold tracking-widest uppercase"
				onClick={() => navigate(-1)}
			>
				Go back
			</button>
		</div>
	);
};

export default NotFound;
