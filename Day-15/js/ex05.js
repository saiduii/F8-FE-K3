var a = 11;
var b = 10;
var c = 29;
var p1;
var p2;
var p3;

if(a > b && b > c){
p1 = c;
p2 = b;
p3 = a;
}
if(a > b && c > b){
p1 = b;
p2 = c;
p3 = a;
}
if(b > a && a > c){
p1 = c;
p2 = a;
p3 = b;
}
if(b > a && c > a){
p1 = a;
p2 = c;
p3 = b;
}
if(c > a && a > b){
p1 = b;
p2 = a;
p3 = c;
}
if(c > a && b > a){
p1 = a;
p2 = b;
p3 = c;
}
console.log(`Thứ tự sắp xếp: ${p1} ${p2} ${p3}`);

