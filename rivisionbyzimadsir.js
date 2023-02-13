///////////////////////////////////////////////////////////////////////////////////

//(this is filter method of an array)//

const arr=[7,5,43,8,9,3,2,1,5]
const copyarr=arr.filter((item)=>item>5)
console.log(copyarr);

///////////////////////////////////////////////////////////////////////////////////

//(this is filter method of an array with (includes,startsWith,endsWith))

const arr1=["punjab","nanded","banglore","goa"]
const copyarr1=arr1.filter((item)=>item.includes("banglore"))
console.log(copyarr1);
const copyarr2=arr1.filter((item)=>item.startsWith("b"))
console.log(copyarr2);
const copyarr3=arr1.filter((item)=>item.endsWith("e"))
console.log(copyarr3);

///////////////////////////////////////////////////////////////////////////////////

