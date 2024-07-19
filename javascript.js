// // 1.First program
for(let i=0;i<=100;i++)
{
    if((i%3==0) && (i%5==0))
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0) 
    {
        console.log("Fizz");
    }
    else if(i%5==0)
    {
        console.log("Buzz");
    }
}

// //2.plaindrome program
function plaindrome(n){
    let rev = "";
    for (let i = n.length - 1; i >= 0; i--) {
        rev += n[i];
    }
    if (rev == n) {
        console.log("Plaindrome");
    } else {
        console.log("Not a plaindrome");
    }
}
let n="radar";
console.log(plaindrome(n));

// //3.to find max program.
let arr=[1,2,3,4,5,6];
let m=arr[0];
function max(arr,m){
    for(let i=0;i<arr.length;i++)
    {     
          if(m<arr[i])
            m=arr[i]
    }
    return m;
}
console.log(max(arr,m));

// //4.letter count
let s = "hello world";

let res = {}
for(let i = 0;i< s.length;i++){
  let ch = s.charAt(i);
  if(res[ch]){
    res[ch]+=1;
  }
  else{
    res[ch]=1;
  }
}
console.log(res);


//5.longest word in string
let s="this is scripting language";
function lon(str) {
    str = str.match(/[a-zA-Z0-9]+/gi);
    let l = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > l.length) {
            l = str[i];
        }
    }
    return l;
}
console.log(lon(s));


// //6.number and its factorial
function fact(n){
    for(let i=0;i<n;i++)
    {
        if(n%i==0)
        {
            console.log(i);
        }
    }
}
fact(10);

// //7.Celsius to Fahrenheit
let c=24;
function f(c){
    return (9/5)*24+32;
}
console.log(f(c)+"f");


// //8.distinct numbers

let a=[1,2,3,4,5,6,8,9,10];
function dis(a){
    j=1
    for(i=0;i<a.length;i++,j++){
        if(a[i]!=j){
            console.log(j);
            break;
        }
    }
}
dis(a);
