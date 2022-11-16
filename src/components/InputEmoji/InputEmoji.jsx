import { useEffect, useRef, useState } from "react";
import POST from "../../data.json";
import "./InputEmoji.css";
import ShowEmoji from "../CardShowEmoji/ShowEmoji";

const InputEmoji = () => {
	const inputRef = useRef(null);
	const [emoji, setEmoji] = useState([]);
	const [title, setTitle] = useState([]);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const onChangeEmoji = () => {
		setEmoji(POST);
		setTitle(inputRef.current.value);
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="d-flex justify-content-center mt-3">
						<input
							onChange={onChangeEmoji}
							ref={inputRef}
							value={title}
							type="text"
							className="form-control w-25"
							placeholder="Search Your Favourite Emoji..."
						/>
					</div>
				</div>
			</div>
			<ShowEmoji title={title} emoji={emoji}/>
		</>
	);
};

export default InputEmoji;
