import { readFileSync, writeFileSync } from "fs";

const target = {
	title: "完成 Leetcode/Neetcode 75 題",
	count: 75,
};

function countProblems(filePath) {
	try {
		const content = readFileSync(filePath, "utf8");

		// 計算各難度的題目數量
		const easyCount = (content.match(/難度: Easy/g) || []).length;
		const mediumCount = (content.match(/難度: Medium/g) || []).length;
		const hardCount = (content.match(/難度: Hard/g) || []).length;

		// 計算 H3 標題總數
		const h3Count = (content.match(/^###\s/gm) || []).length - 1;

		// 計算已發布的文章數量
		const postCount = (content.match(/\[X\] post/g) || []).length;

		console.log("題目難度統計：");
		console.log(`Easy: ${easyCount} 題`);
		console.log(`Medium: ${mediumCount} 題`);
		console.log(`Hard: ${hardCount} 題`);
		console.log(`總完成題數: ${easyCount + mediumCount + hardCount} 題`);
		console.log(`總題數: ${h3Count} 題`);
		console.log(`已發布文章數: ${postCount} 篇`);

		// 更新 README.md
		const readmeContent = readFileSync("./README.md", "utf8");
		const trackingSection = `## Tracking
- 題目完成統計:
	- Easy: ${easyCount} 題
	- Medium: ${mediumCount} 題
	- Hard: ${hardCount} 題
- 總完成題數: ${easyCount + mediumCount + hardCount}/${h3Count} 題
- 階段性目標："${target.title}", 共 ${target.count} 題
- 文章發布進度: ${postCount} 篇
	- 階段目標達成度: ${postCount}/${target.count} = ${(
			(postCount / target.count) *
			100
		).toFixed(2)}%
`;

		const updatedContent = readmeContent.replace(
			/## Tracking[\s\S]*?(?=##|$)/,
			`${trackingSection}\n\n`
		);

		writeFileSync("./README.md", updatedContent);

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
countProblems("./Notes.md");
