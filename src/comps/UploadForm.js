import React, { useState } from "react";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const types = ["image/png", "image/jpeg"];

	const changeHanlde = (e) => {
		let selected = e.target.files[0];

		//if file not null and type cua file phai nam trong types
		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError("");
		} else {
			setFile(null);
			setError("Pls select an image file (png or jpeg)");
		}
	};

	return (
		<form>
			<input type="file" onChange={changeHanlde} />
			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div>{file.name}</div>}
			</div>
		</form>
	);
};

export default UploadForm;
