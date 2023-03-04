function reverseString(str){
    var newString = "";
    for(var i = str.length-1; i>=0; i--){
        newString += str[i];
    }
    return newString;
}
let string= "gajendra";
const result = reverseString(string);
console.log(result);



function largestNumber(arr=[2,3,4,5,6]){
      let max=arr[0];
      for(let i =0; i<5; ++i){
        if(arr[i]>max){
            max= arr[i];
        }
      }
      const ans = console.log('max',max);
}
largestNumber();


function mergearray(){
    const arr1 = ["23", "34", "45", "67"];
    const arr2 = ["10", "11","12","13"];
    const merge = arr1.concat(arr2);
    console.log("array is", merge);
}
mergearray();


//Avarage of an array

const arr = [2,3,4,5,6,7];
var sum = 0;

for(let i = 0 ; i<arr.length; i++){
    sum=sum+arr[i];
}

var avg = sum/arr.length;
console.log(avg);

//Remove duplicates from an array

var myinputarr=[];
var size=5; 
   
    for(var a=0;a<size;a++){
        myinputarr[a] = prompt('Enter array Element ' + (a+1));
    }
    
    for(a=0;a<5;a++){
        for(j=a+1;j<5;j++)    
        if( myinputarr[a]== myinputarr[j]){
            for ( k = j; k < a - 1; k++)  
                    {  
                        arr[k] = arr [k + 1];  
                    }  
                    size--;
                    j--;
        }
        for(a=0;a<size;a++){
            console.log(myinputarr[j]);
        }
}
//remove white space 
let str = "  hello Gajendra   ";
let trimStr = str.trim();

console.log(trimStr); 


// Count the number of vowels

const string1="Gajendra";








// Sort an array

function sortarray(arr){
    let i;
    let j;
    for(i=0;i<5;i++){
        for(j=i+1;j<5;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    for(i=0;i<5;i++){
        console.log(arr[i]);
    }
}
sortarray([2,3,4,5,6]);




