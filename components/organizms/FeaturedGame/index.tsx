import React, { useCallback, useEffect, useState } from "react";
import GameItem from "@/components/molecules/GameItems";
import { getFeaturedGame } from "@/services/player";

// interface GameList {
// 	_id: string;
// 	name: string;
// 	thumbnail: string;
// 	category: Category;
// }

// interface Category {
// 	name: string;
// }

export default function FeaturedGame() {
	const [gameList, setData] = useState([]);
	// const [gameList, setData] = useState<GameList[]>([]);

	const getFeatureGameList = useCallback(async () => {
		const data = await getFeaturedGame();
		setData(data);
	}, [getFeaturedGame]);

	useEffect(() => {
		getFeatureGameList();
	}, []);
	return (
		<section className="featured-game pt-50 pb-50">
			<div className="container-fluid">
				<h2 className="text-4xl fw-bold color-palette-1 mb-30">
					Our Featured
					<br /> Games This Year
				</h2>
				<div
					className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
					data-aos="fade-up">
					{gameList.map((item, idx) => (
						<>
							<GameItem
								key={idx}
								title={item.name}
								category={item.category.name}
								thumbnail={`http://188.166.221.212:10001/uploads/${item.thumbnail}`}
							/>
						</>
					))}
				</div>
			</div>
		</section>
	);
}
