$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var pauseBtn = $('#pauseBtn');
  var breakBtn = $('#breakBtn');
  var countdown;
  var countdown1;
  var snd = new Audio("http://www.websites-graphics1.de/songs/wavs/1wav_geraeuche/click_one.wav");
  var audio = new Audio('http://www.soundjay.com/switch/sounds/switch-4.mp3');


  start.on('click', startReverseCountdown);
  pauseBtn.on('click', pauseOn);
  breakBtn.on('click', breakOn);
  // breakBtn.on('click', startCountdown);

  function pauseOn(){
    snd.play();
    clearTimeout(countdown);
    clearTimeout(countdown1);
  }


  function breakOn(){
    minutes.text('00');
    seconds.text('10');
    startCountdown();
  }

  function startReverseCountdown(){
           snd.play();
          countdown = setInterval(function(){
            audio.play();
      var secondsVal=+seconds.text();
      var minutesVal=+minutes.text();

      if(minutesVal>=25){
        breakBtn.removeAttr('disabled');
      }
      if(secondsVal<59){
        if(secondsVal<9){
          seconds.text("0"+(secondsVal+1))
        }
        else{
          seconds.text(secondsVal+1);
        }
      }
        else if (secondsVal>58) {
        seconds.text("00");
      }

        if(secondsVal===59){
          if(minutesVal<9){
            minutes.text('0' + (minutesVal+1));
          }
          else{
            minutes.text(minutesVal+1);
          }
        }
    },1000);
  }


  function startCountdown(){
           snd.play();
           pauseBtn.attr('disabled', true);
      clearInterval(countdown);
            countdown1 = setInterval(function(){
              clearInterval(countdown);
        audio.play();
      var secondsVal1=+seconds.text();
      var minutesVal1=+minutes.text();
      if(secondsVal1===0 && minutesVal1===0){
        clearInterval(countdown1);
        pauseBtn.removeAttr('disabled');
        breakBtn.attr('disabled', true);
        startReverseCountdown();
        return;
      }

      if(secondsVal1===0){
        seconds.text(59);
      }else {
        if(secondsVal1<11){
          seconds.text("0" + (secondsVal1 -1))
        }
        else{
          seconds.text(secondsVal1 - 1);
        }
      }

      if(secondsVal1===0){
        if(minutesVal1<11){
          minutes.text("0" + (minutesVal1 - 1))
        }
        else{
          minutes.text(minutesVal1-1);
        }
      }

    }, 1000);
  }

});
