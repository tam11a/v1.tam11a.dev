import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

const WebsiteHeader = lazy(() => import("./Header"));
const WebsiteFooter = lazy(() => import("./Footer"));

const WebsiteLayout: React.FC = () => {
	return (
		<>
			<WebsiteHeader />
			<main className="max-w-6xl mx-auto min-h-[80vh]">
				<Outlet />
			</main>
			<WebsiteFooter />
		</>
	);
};

export default WebsiteLayout;
