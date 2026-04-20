// leaderboard.ts

const scores = [];

export function addScore(playerName, score) {
    scores.push({ playerName, score });
}

export function getLeaderboard() {
    return scores.sort((a, b) => b.score - a.score);
}