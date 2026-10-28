// Prismojo widget for React (generated from https://prismojo.com/embed; MIT).
// <PrismojoWidget tool="hotel-lobby-ai" /> — keep the caption: it is the credit line.
// lang (optional): en, es, pt, fr, de, fi, ms, th; the card and its links follow it.

const TOOLS = {
	"hotel-lobby-ai": {
		"name": "Hotel Lobby AI",
		"pages": {
			"en": "https://prismojo.com/features/hotel-lobby-ai",
			"es": "https://prismojo.com/es/features/hotel-lobby-ai",
			"pt": "https://prismojo.com/pt/features/hotel-lobby-ai",
			"fr": "https://prismojo.com/fr/features/hotel-lobby-ai",
			"de": "https://prismojo.com/de/features/hotel-lobby-ai",
			"fi": "https://prismojo.com/fi/features/hotel-lobby-ai",
			"ms": "https://prismojo.com/ms/features/hotel-lobby-ai",
			"th": "https://prismojo.com/th/features/hotel-lobby-ai"
		},
		"titles": {
			"en": "Hotel Lobby AI video generator by Prismojo",
			"es": "Generador de vídeo Hotel Lobby AI de Prismojo",
			"pt": "Gerador de vídeo Hotel Lobby AI da Prismojo",
			"fr": "Générateur de vidéo Hotel Lobby AI par Prismojo",
			"de": "Hotel Lobby AI Videogenerator von Prismojo",
			"fi": "Hotel Lobby AI -videogeneraattori, Prismojo",
			"ms": "Penjana video Hotel Lobby AI oleh Prismojo",
			"th": "ตัวสร้างวิดีโอ Hotel Lobby AI โดย Prismojo"
		}
	},
	"ai-zombie": {
		"name": "AI Zombie Love Story",
		"pages": {
			"en": "https://prismojo.com/features/ai-zombie",
			"es": "https://prismojo.com/es/features/ai-zombie",
			"pt": "https://prismojo.com/pt/features/ai-zombie",
			"fr": "https://prismojo.com/fr/features/ai-zombie",
			"de": "https://prismojo.com/de/features/ai-zombie",
			"fi": "https://prismojo.com/fi/features/ai-zombie",
			"ms": "https://prismojo.com/ms/features/ai-zombie",
			"th": "https://prismojo.com/th/features/ai-zombie"
		},
		"titles": {
			"en": "AI zombie love story video generator by Prismojo",
			"es": "Generador de vídeo de historia de amor zombi con IA de Prismojo",
			"pt": "Gerador de vídeo de história de amor zumbi com IA da Prismojo",
			"fr": "Générateur d'histoire d'amour zombie par IA, par Prismojo",
			"de": "KI-Zombie-Liebesgeschichten-Generator von Prismojo",
			"fi": "Tekoälyn zombirakkaustarinageneraattori, Prismojo",
			"ms": "Penjana kisah cinta zombi AI oleh Prismojo",
			"th": "ตัวสร้างเรื่องรักซอมบี้ AI โดย Prismojo"
		}
	}
};

const BYLINES = {
	"en": [
		"",
		" by Prismojo"
	],
	"es": [
		"",
		" de Prismojo"
	],
	"pt": [
		"",
		" da Prismojo"
	],
	"fr": [
		"",
		" par Prismojo"
	],
	"de": [
		"",
		" von Prismojo"
	],
	"fi": [
		"",
		" – Prismojo"
	],
	"ms": [
		"",
		" oleh Prismojo"
	],
	"th": [
		"",
		" โดย Prismojo"
	]
};

export function PrismojoWidget({ tool, lang = "en" }) {
	const t = TOOLS[tool];
	if (!t) return null;
	const l = t.pages[lang] ? lang : "en";
	const [before, after] = BYLINES[l];
	return (
		<figure style={{ maxWidth: 360, margin: "24px auto" }}>
			<iframe
				src={`https://prismojo.com/widget/${tool}${l === "en" ? "" : `?lang=${l}`}`}
				title={t.titles[l]}
				loading="lazy"
				style={{ display: "block", width: "100%", aspectRatio: "9 / 16", border: 0, borderRadius: 16 }}
			/>
			<figcaption style={{ marginTop: 8, fontSize: 14, textAlign: "center" }}>
				{before}
				<a href={t.pages[l]} rel="nofollow">
					{t.name}
				</a>
				{after}
			</figcaption>
		</figure>
	);
}
