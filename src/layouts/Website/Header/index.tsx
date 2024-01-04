import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const menu = [
// 	{
// 		label: "Home",
// 		key: "/",
// 	},
// 	{
// 		label: "Services",
// 		key: "/services",
// 		children: [
// 			{
// 				label: "AC Servicing",
// 				key: "/services/ac-servicing",
// 			},
// 			{
// 				label: "AC Repairing & Maintenance",
// 				key: "/services/ac-repairing-maintenance",
// 			},
// 			{
// 				label: "AC Installation & Shifting",
// 				key: "/services/ac-installation-shifting",
// 			},
// 			{
// 				label: "AC Supply",
// 				key: "/services/ac-supply",
// 			},
// 		],
// 	},
// 	{
// 		label: "Offer",
// 		key: "/offers",
// 	},
// 	{
// 		label: "Blogs",
// 		key: "/blogs",
// 	},
// 	{
// 		label: "Portfolio",
// 		key: "/portfolio",
// 	},
// 	{
// 		label: "About",
// 		key: "/about",
// 	},
// 	{
// 		label: "Contact",
// 		key: "/contact",
// 	},
// ];

const WebsiteHeader: React.FC = () => {
	// const [open, setOpen] = React.useState<boolean>(false);
	// const navigate = useNavigate();
	return (
		<>
			<header className="max-w-6xl mx-auto px-9 py-6 flex-row items-center justify-between hidden">
				<h1 className="text-3xl font-extrabold">
					T<span className="text-primary">.</span>
				</h1>
				<nav>
					<button className=" text-primary-500 hover:text-primary-600 transition-colors duration-300 font-extrabold text-lg tracking-widest uppercase">
						Menu
					</button>
				</nav>
			</header>
		</>
	);
};

export default WebsiteHeader;
