var a = 14;
var b = 12;
var c = 21;
if (a > b && b > c){
    console.log(`Số lớn nhất trong ba số là: ${a}`);
}else if (b > a && a > c){
    console.log(`Số lớn nhất trong ba số là: ${b}`);
}else{
    console.log(`Số lớn nhất trong ba số là: ${c}`);
}