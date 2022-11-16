import Card from "react-bootstrap/Card";

const ShowEmoji = ({ emoji, title }) => {
	return (
		<>
			<Card className="d-flex justify-content-center mt-4">
				{emoji.length == 0 && <div>Please Search Title of Emoji... </div>}
				<ul>
					{emoji
						.filter((data) => data.title.includes(title))
						.map((filteredName) => (
							<li>{filteredName.symbol}</li>
						))}
				</ul>
			</Card>
		</>
	);
};

export default ShowEmoji;
