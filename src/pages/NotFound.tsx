import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="min-h-[90vh] px-3 flex flex-col gap-5 items-center justify-center">
			<img
				src="/404.svg"
				className="max-w-xl mx-auto w-[60vw]"
			/>
			<p className="text-sm mt-7 mb-3 font-semibold text-center">
				The page you're visiting is not available. Try again or visit back.
			</p>
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
