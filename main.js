
let ch=document.getElementsByClassName("ch");
let d=document.getElementsByClassName("d");
let s=document.getElementsByClassName("s");

let ds=document.getElementsByClassName("ds");
let m=document.getElementsByClassName("m");
let b=document.getElementsByClassName("b");

let g=document.getElementsByClassName("g");


let imgch=[
"pic/ch1.png",
"pic/ch2.png",
"pic/ch3.png",
"pic/ch4.png",
"pic/ch5.png",
"pic/ch6.png",
"pic/ch7.png",
"pic/ch8.png"

];
let imgd=[
"pic/dr1.jpg",
"pic/dr2.jpg",
"pic/dr3.jpg",
"pic/dr4.jpg",
"pic/dr5.jpg",
"pic/dr6.jpg",
"pic/dr7.jpg",
"pic/dr8.jpg"


];
let imgs=[
"pic/sa1.jpg",
"pic/sa2.jpg",
"pic/sa3.jpg",
"pic/sa4.jpg",
"pic/sa5.jpg",
"pic/sa7.jpg",
"pic/sa8.jpg",
"pic/sa9.jpg"

];
let imgds=[
"pic/ds1.jpg",
"pic/ds2.jpg",
"pic/ds3.jpg",
"pic/ds4.jpg",
"pic/ds5.jpg",
"pic/ds6.jpg",
"pic/ds7.jpg",
"pic/ds8.jpg"
];
let imgm=[
"pic/m1.webp",
"pic/m2.webp",
"pic/m3.webp",
"pic/m4.webp",
"pic/m5.webp",
"pic/m6.webp",
"pic/m.jpg",
"pic/m5.jpg"
];
let imgb=[
"pic/b1.jpg",
"pic/b2.jpg",
"pic/b3.jpg",
"pic/b4.jpg",
"pic/b5.jpg",
"pic/b6.jpg",
"pic/b7.jpg",
"pic/b8.jpg"

];
let imgg=[
"pic/g1.jpg",
"pic/g2.jpg",
"pic/g3.jpg",
"pic/g4.jpg",
"pic/g5.jpg",
"pic/g6.jpg",
"pic/g7.jpg",
"pic/g8.jpg"

];
for(let i=0;i<8;i++){
    if(ch[0])
        ch[i].style.backgroundImage=`url(${imgch[i]})`
    else if(d[0])
        d[i].style.backgroundImage=`url(${imgd[i]})`
    else if(ds[0])
        ds[i].style.backgroundImage=`url(${imgds[i]})`
    else if(m[0])
        m[i].style.backgroundImage=`url(${imgm[i]})`
    else if(b[0])
        b[i].style.backgroundImage=`url(${imgb[i]})`
    else if(g[0])
        g[i].style.backgroundImage=`url(${imgg[i]})`
    else
        s[i].style.backgroundImage=`url(${imgs[i]})`
}