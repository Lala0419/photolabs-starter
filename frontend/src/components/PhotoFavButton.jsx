import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
	const [toggle, setToggle] = useState(false);

	const clickHandler = () => {
		setToggle((prev) => !prev);
	};
	return (
		<div className="photo-list__fav-icon">
			<div className="photo-list__fav-icon-svg" onClick={clickHandler}>
				{toggle && FavIcon}
			</div>
		</div>
	);
}

export default PhotoFavButton;
