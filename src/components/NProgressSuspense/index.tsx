import { FC, useEffect } from "react";
import nProgress from "nprogress";

const NProgressSuspense: FC = () => {
	useEffect(() => {
		nProgress.start();

		return () => {
			nProgress.done();
		};
	});

	return <></>;
};

export default NProgressSuspense;
