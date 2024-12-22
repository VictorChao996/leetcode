import { readFileSync } from "fs";

function countDifficulties(filePath) {
	try {
		const content = readFileSync(filePath, "utf8");

		// 計算各難度的題目數量
		const easyCount = (content.match(/難度: Easy/g) || []).length;
		const mediumCount = (content.match(/難度: Medium/g) || []).length;
		const hardCount = (content.match(/難度: Hard/g) || []).length;

		// 計算 H3 標題總數
		const h3Count = (content.match(/^###\s/gm) || []).length;

		// 計算已發布的文章數量
		const postCount = (content.match(/\[X\] post/g) || []).length;

		console.log("題目難度統計：");
		console.log(`Easy: ${easyCount} 題`);
		console.log(`Medium: ${mediumCount} 題`);
		console.log(`Hard: ${hardCount} 題`);
		console.log(`總完成題數: ${easyCount + mediumCount + hardCount} 題`);
		console.log(`總題數: ${h3Count} 題`);
		console.log(`已發布文章數: ${postCount} 篇`);

		return {
			easy: easyCount,
			medium: mediumCount,
			hard: hardCount,
			total: h3Count,
			posted: postCount,
		};
	} catch (error) {
		console.error("讀取檔案時發生錯誤:", error);
		return {
			easy: 0,
			medium: 0,
			hard: 0,
			total: 0,
			posted: 0,
		};
	}
}

// 執行統計
countDifficulties("./Notes.md");
