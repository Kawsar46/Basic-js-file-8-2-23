function getSumOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(index, element);
        
    }
}
const myNumbers = [23, 12, 56, 45, 78, 63, 97];
getSumOfAnArray(myNumbers);