const suffleArray = (array: number[]): number[] => {
  let currentIndex: number = array.length,
    randomIndex: number;
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

export const populateAndShuffleArray = (length: number): number[] => {
  // Populates array from 1 to length
  const array: number[] = Array.from({ length }, (_, i) => i + 1);
  // shuffle the populated array
  return suffleArray(array);
};

export const generateRandomArray = (
  arrLength: number,
  numOptions: number,
  inclusion: number,
): number[] => {
  const randomArray: number[] = [];
  // create random array short one item for the inclusion
  while (randomArray.length < arrLength - 1) {
    const randomNum: number = Math.floor(Math.random() * numOptions) + 1;
    if (randomArray.indexOf(randomNum) === -1) randomArray.push(randomNum);
  }
  // add inclusion and shuffle
  randomArray.push(inclusion);
  return suffleArray(randomArray);
};
