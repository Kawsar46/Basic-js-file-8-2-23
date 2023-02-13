var numbers = [45, 12, 56, 78, 23, 36, 42, 47, 155, 88];


for(var i = 0; i < numbers.length; i++){
   number = numbers[i];
   if(number > 50){
       continue;
   }
   console.log(number);
}
