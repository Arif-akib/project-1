console.log("welcome")

let songIndex=0;
let audioElement= new Audio('song/1.m4A');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let song= [
   
    {songname:"Bullet For My Valentine",filePath:"song/1.m4A",coverPath:"img/channels4_profile.jpg"},
    {songname:"Bullet For My Valentine",filePath:"song/1.m4A",coverPath:"img/channels4_profile.jpg"},
    {songname:"Bullet For My Valentine",filePath:"song/1.m4A",coverPath:"img/channels4_profile.jpg"},
    {songname:"Bullet For My Valentine",filePath:"song/1.m4A",coverPath:"img/channels4_profile.jpg"},
    {songname:"Bullet For My Valentine",filePath:"song/1.m4A",coverPath:"img/channels4_profile.jpg"},
    
]

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }

})
myprogressbar.addEventListener('timeupdate',()=>{
console.log('timeupdate');
})


