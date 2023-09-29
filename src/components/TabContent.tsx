import { FC, useState } from "react";
import { TContent } from "../App";

type TabContentProps = {
    item: TContent;
}

const TabContent: FC<TabContentProps> = function ({ item }) {
	const [showDetails, setShowDetails] = useState(true);
	const [likes, setLikes] = useState(0);

	function handleInc() {
		setLikes(likes + 1);
	}

	if (item === undefined) return <h1>контент не найден</h1>;

	return (
		<div className="tab-content">
			<h4>{item.summary}</h4>
			{showDetails && <p>{item.details}</p>}

			<div className="tab-actions">
				<button onClick={() => setShowDetails((h) => !h)}>
					{showDetails ? "Hide" : "Show"} details
				</button>

				<div className="hearts-counter">
					<span>{likes} ❤️</span>
					<button onClick={handleInc}>+</button>
					<button>+++</button>
				</div>
			</div>

			<div className="tab-undo">
				<button>Undo</button>
				<button>Undo in 2s</button>
			</div>
		</div>
	);
};

export default TabContent;