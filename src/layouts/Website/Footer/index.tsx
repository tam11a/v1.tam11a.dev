import React from "react";
import { Icon } from "@iconify/react";

const WebsiteFooter: React.FC = () => {
	return (
		<footer className="bg-[#020000] border-t-primary-900 border-opacity-65 border-t mt-7 py-7">
			<div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl px-4 mx-auto">
				<div className="flex items-center gap-2 justify-center text-xs font-semibold tracking-widest text-slate-400">
					Designed by{" "}
					<Icon
						icon="pixelarticons:heart"
						className="text-primary"
					/>{" "}
					<span className="text-white">TAM</span>
				</div>
				<p className="text-xs font-semibold tracking-widest text-slate-400">
					tam11a.dev &copy;{" "}
					<span className="text-primary">{new Date().getFullYear()}</span>
				</p>
			</div>
		</footer>
	);
};

export default WebsiteFooter;
