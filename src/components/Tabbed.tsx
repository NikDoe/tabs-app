import { FC, useState } from "react";
import { TContent } from "../App";
import DifferentContent from "./DifferentContent";
import Tab from "./Tab";
import TabContent from "./TabContent";

type TabbedProps = {
    content: TContent[];
}

const Tabbed: FC<TabbedProps> = function ({ content }) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div>
			<div className="tabs">
				<Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
				<Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
				<Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
				<Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
			</div>

			{activeTab <= 5 ? (
				<TabContent item={content[activeTab]} />
			) : (
				<DifferentContent />
			)}
		</div>
	);
};

export default Tabbed;