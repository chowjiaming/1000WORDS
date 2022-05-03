export const populateAndShuffleArray = (length: number): number[] => {
  // Populates array from 1 to length
  const array = Array.from({ length }, (_, i) => i + 1);
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export const generateRandom = (max: number, exclude: number[]): number => {
  let random;
  // While random number that is not excluded is found
  while (!random) {
    const x = Math.floor(Math.random() * (max + 1));
    // Only set random number if it is not found in exclusion array
    if (exclude.indexOf(x) === -1) random = x;
  }
  return random;
};
