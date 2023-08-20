import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoData from "./mocks/photos";
import TopicData from "./mocks/topics";
import Modal from "./routes/PhotoDetailsModal";
// Note: Rendering a single component to build components in isolation
const App = () => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal((prev) => !prev);
	};

	return (
		<div className="App">
			<HomeRoute
				photoData={PhotoData}
				topicData={TopicData}
				setModal={toggleModal}
			/>
			{modal && <Modal setModal={toggleModal} />}
		</div>
	);
};

export default App;
