import React, { useState, useEffect } from "react";

type PropType = {
	startingCount: number;
	callbackFunction: () => void;
};

export default function CountDown({
	startingCount,
	callbackFunction,
}: Readonly<PropType>) {
	const [count, setCount] = useState(startingCount);

	useEffect(() => {
		if (count === 0) {
			callbackFunction();
		} else {
			const interval = setInterval(() => {
				setCount(count - 1);
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [callbackFunction, count]);

	return (
		<div id="countdown_container">
			<div id="countdown">
				<p>{count}</p>
			</div>
		</div>
	);
}
