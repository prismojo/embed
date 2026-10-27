// Prismojo widget for React (generated from https://prismojo.com/embed; MIT).
// <PrismojoWidget tool="hotel-lobby-ai" /> — keep the caption: it is the credit line.

const TOOLS = {
	"hotel-lobby-ai": {
		"name": "Hotel Lobby AI",
		"page": "https://prismojo.com/features/hotel-lobby-ai",
		"title": "Hotel Lobby AI video generator by Prismojo"
	},
	"ai-zombie": {
		"name": "AI Zombie Love Story",
		"page": "https://prismojo.com/features/ai-zombie",
		"title": "AI zombie love story video generator by Prismojo"
	}
};

export function PrismojoWidget({ tool }) {
	const t = TOOLS[tool];
	if (!t) return null;
	return (
		<figure style={{ maxWidth: 360, margin: "24px auto" }}>
			<iframe
				src={`https://prismojo.com/widget/${tool}`}
				title={t.title}
				loading="lazy"
				style={{ display: "block", width: "100%", aspectRatio: "9 / 16", border: 0, borderRadius: 16 }}
			/>
			<figcaption style={{ marginTop: 8, fontSize: 14, textAlign: "center" }}>
				<a href={t.page} rel="nofollow">
					{t.name}
				</a>{" "}
				by Prismojo
			</figcaption>
		</figure>
	);
}
