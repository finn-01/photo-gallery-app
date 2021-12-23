import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) => {
	const [process, setProcess] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		//references
		const storageRef = projectStorage.ref(file.name);
		storageRef.put(file).on(
			"state_changed",
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProcess(percentage);
			},
			(error) => {
				setError(err);
			},
			async () => {
				const url = await storageRef.getDownloadUrl();
				setUrl(url);
			}
		);
	}, [file]);

	return { process, url, error };
};

export default useStorage;
