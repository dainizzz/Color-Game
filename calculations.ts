const COLORS: string[] = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "PURPLE"];
let containers: string[][] = [];

const setpGame = () => {
  let colorPool: any[] = [];
  for (let i = 0; i < 10; i++) {
    colorPool = [...colorPool, COLORS];
  }
  shuffleArray(colorPool);

  for (let i = 0; i < 5; i++) {
    const container = colorPool.splice(0, 10);
    containers.push(container);
  }
  containers.push([]);
  containers.push([]);
};

// fisher-yates shuffle algorithm
const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const checkContainer = (container: string[]) => {};
