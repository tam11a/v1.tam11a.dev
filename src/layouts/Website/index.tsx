import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

const WebsiteHeader = lazy(() => import("./Header"));
const WebsiteFooter = lazy(() => import("./Footer"));

const WebsiteLayout: React.FC = () => {
	return (
		<>
			<section className="bg-[url(/grid.svg)] bg-repeat-y bg-cover">
				<WebsiteHeader />
				<main className="max-w-6xl mx-auto min-h-[95vh]">
					<Outlet />
				</main>
				<WebsiteFooter />
			</section>
		</>
	);
};

export default WebsiteLayout;
