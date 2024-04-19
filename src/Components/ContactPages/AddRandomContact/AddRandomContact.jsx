import React from "react";
import { getRandomUser } from "../../../utility/api";

const GetRandomContact = async () => {
	const responseFromAPI = await getRandomUser();
	console.log(responseFromAPI);
};

const AddRandomContact = () => {
	return (
		<div>
			<button
				className="btn btn-success form-control"
				onClick={() => GetRandomContact()}
			>
				Add Random Contact
			</button>
		</div>
	);
};

export default AddRandomContact;
