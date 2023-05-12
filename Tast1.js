console.log("Hello, World!");
const array1 = [1 , 2, 3];
const array2 = [2, 3, 4];
const array3 = [3 , 4, 5];

// const notCommanElements = array1.filter((element) => {
//   return !array2.includes(element) && !array3.includes(element);mmm
// });
// console.log(notCommanElements);

const comibinedArray = array1.concat(array2,array3);

const elementCount = comibinedArray.reduce((acc ,curr) =>{
  acc[curr] =(acc[curr] || 0) + 1;
  return acc;
},{});
const notCommanElements = Object.keys(elementCount).filter((key) =>{
  return elementCount[key] === 1;
  
}
)
console.log(notCommanElements)

