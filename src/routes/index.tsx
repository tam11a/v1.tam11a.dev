import React, { Suspense, lazy } from "react";

// 3rd Party Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import { publicRoutes } from "./publicRoutes";
import NProgressSuspense from "@components/NProgressSuspense";

// Layouts
const WebsiteLayout = lazy(() => import("@layouts/Website"));

const BaseRoutes: React.FC = () => {
	return (
		<Suspense fallback={<NProgressSuspense />}>
			<BrowserRouter>
				<Routes>
					<Route
						path={"*"}
						element={<WebsiteLayout />}
					>
						{publicRoutes.map(({ path, Component }) => (
							<Route
								key={path}
								path={path}
								element={
									<Suspense fallback={<NProgressSuspense />}>
										<Component />
									</Suspense>
								}
							/>
						))}
					</Route>
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
};

export default BaseRoutes;
