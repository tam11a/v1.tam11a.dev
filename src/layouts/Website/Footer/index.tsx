import React from "react";
import { Icon } from "@iconify/react";

const WebsiteFooter: React.FC = () => {
	return (
		<footer className="max-w-6xl mx-auto border-t-primary-900 border-opacity-65 border-t pt-7 pb-10">
			<div className="flex items-center gap-2 justify-center text-sm font-semibold tracking-widest text-slate-400">
				Designed by{" "}
				<Icon
					icon="pixelarticons:heart"
					className="text-primary"
				/>{" "}
				<span className="text-white">TAM</span>
			</div>
		</footer>
	);
};

export default WebsiteFooter;
