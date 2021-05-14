var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var a = document.getElementById("textbox"); 

function start()
{
    a.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    a.innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    var speak_data = "Taking you Selfie in 10 seconds. ten. nine. eight. seven. six. five. four. three. two. one";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_selfie(); 
        save();
    }, 15000);
}

 
var camera = document.getElementById("camera");
Webcam.set({
    width:340,
    height:220,
    image_format : 'png',
    png_quality: 100
});

function take_selfie()
{
    Webcam.snap(function(data) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data+'"/>';
    });
}


function save() {
  var link = document.getElementById("link");
  var image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
