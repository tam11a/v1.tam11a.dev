import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BaseRoutes from "./routes";
import firebaseConfig from "./config/firebase";
import React from "react";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
	React.useEffect(() => {
		getAnalytics(app);
	}, []);
	return (
		<>
			<BaseRoutes />
		</>
	);
}

export default App;
