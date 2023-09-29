import { FC } from "react";

type TabProps = {
    num: number;
    activeTab: number;
    onClick: (num: number) => void;
}

const Tab: FC<TabProps> = function ({ num, activeTab, onClick }) {
	return (
		<button
			className={activeTab === num ? "tab active" : "tab"}
			onClick={() => onClick(num)}
		>
            Tab {num + 1}
		</button>
	);
};

export default Tab;