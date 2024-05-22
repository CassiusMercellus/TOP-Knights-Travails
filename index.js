function knightMoves(start, end) {
    const moves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    function isValid(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    function bfs(start, end) {
        const queue = [[start, [start]]];
        const visited = new Set([start.toString()]);

        while (queue.length > 0) {
            const [[x, y], path] = queue.shift();

            if (x === end[0] && y === end[1]) {
                return path;
            }

            for (const [dx, dy] of moves) {
                const nx = x + dx;
                const ny = y + dy;

                if (isValid(nx, ny) && !visited.has([nx, ny].toString())) {
                    visited.add([nx, ny].toString());
                    queue.push([[nx, ny], [...path, [nx, ny]]]);
                }
            }
        }
    }

    return bfs(start, end);
}

// Example usage:
console.log(knightMoves([0, 0], [1, 2]));
console.log(knightMoves([0, 0], [3, 3])); 
console.log(knightMoves([3, 3], [0, 0]));  
console.log(knightMoves([0, 0], [7, 7]));  

const start = [0, 0];
const end = [4, 3];
const path = knightMoves(start, end);
console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
path.forEach(step => console.log(step));
