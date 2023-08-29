import React, { useState } from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, isFavorite }) => {
	return (
		<div className="fav-badge">
			<FavIcon displayAlert={!!isFavPhotoExist} selected={isFavPhotoExist} />
			<div className="fav-badge__count">
				<span>{isFavorite.length}</span>
			</div>
		</div>
	);
};

export default FavBadge;
