(function(){
document.addEventListener("touchmove", function(evt) {
    evt.preventDefault();
}, false);

  $play = $("#playbutton, #cross");
  $html = $("html");
  // $html.css("transition", "transform, 0.3s, ease-in");
  $body = $("body");
  $m_happy = $(".m1");
  $m_sad = $(".m2");
  $m_fun = $(".m4");
  $m_angry = $(".m3");
  $happy_m = $(".happy_m");
  $hide = $(".hide");
  $date = $(".date");
  $title = $(".title");
  $audio_happy = $('.audio.happy_m')[0];
  $audio_sad = $('.audio.sad_m')[0];
  $audio_fun = $('.audio.fun_m')[0];
  $audio_angry = $('.audio.angry_m')[0];
  $audio_sound = $('.audio.sound01_m')[0];
  $audio_news_ = $('.audio.news');
  $audio_news = $('.audio.news')[0];
  $happy_t = false;
  $sad_t = false;
  $angry_t = false;
  $fun_t = false;  
  $menu = $('#menu');
  $html = $('html');
  $favorite = $('.favorite');
  $history = $('.history');
  $setting = $('.setting');
  $m_menu = $('.modal-menu');
  $ctg = $('.ctg');
  $switch = $('.swt');
  $box = $('.video-cta');
  $mask = $("div.mask-main");
  
  $d = new Date();
  $y = $d.getFullYear();
  $m = $d.getMonth() + 1;
  $da = $d.getDate();
  $date.text($y + "年" + $m + "月" + $da + "日");
  
  $news_happy = {1:['小6が遮断機くぐり62歳救助', 15],2:['遭難の外国人スキー客6人無事', 13]};
  $news_sad = {1:['福原愛 19歳にまさかの敗戦', 26],2:['幼児死亡　母らＬＩＮＥで“虐待”方法相談', 17]};
  $news_angry = {1:['堀北夫妻来店ばらす 業者謝罪', 18],2:['ココイチの廃棄品 業者が転売', 18]};
  $news_fun = {1:['「妖怪ウォッチ」と「三國志」のコラボ「妖怪三国志」発売日決定！', 15],2:['『修造かるた』力作レビューが話題', 12]};
  
  $play.click(function(){
    $body.toggleClass("show");
    if($body.hasClass("show") === false) {
      $audio_news.pause();
      $title.text("");
      $body.removeClass("play").removeClass("happy").removeClass("sad").removeClass("fun").removeClass("angry");
      $audio_happy.pause();
      $audio_sad.pause();
      $audio_angry.pause();
      $audio_fun.pause();
    }
    clearInterval($happy_t);
    clearInterval($sad_t);
    //$audio_sound.play();
  });
  
  $m_happy.click(function(){
    $audio_news.pause();
    $title.text("");
    clearInterval($sad_t);
    clearInterval($angry_t);
    clearInterval($fun_t);
    $body.removeClass("sad").removeClass("fun").removeClass("angry");
    $body.addClass("happy").addClass("play");
    $audio_sad.pause();
    $audio_angry.pause();
    $audio_fun.pause();
    //$audio_happy.play();
    var count = 0;
    var span = 0;
    $happy_t = setInterval((function() {
      console.log(count);
      if ($news_happy[count] === undefined && count === 0) {
        count++;
      } else if ($news_happy[count] === undefined && count !== 0) {
          clearInterval($happy_t);
          $audio_news_.attr("src", "");
          $title.text(""); 
          $audio_news.pause();
          $body.removeClass("play").removeClass("happy").removeClass("sad").removeClass("fun").removeClass("angry");
          $audio_happy.pause();
          $audio_sad.pause();
          $audio_angry.pause();
          $audio_fun.pause();       
      } else {
        $title.text("#" + count + " " + $news_happy[count][0]);
        if ($audio_news_.attr("src") !== "./sounds/h" + count + ".mp3") {
          span = $news_happy[count][1];
          $audio_news_.attr("src", "./sounds/h" + count + ".mp3");
          //$audio_news.play();
        }
        span--;
        if (span < 0) {
          count++;
        }
      }
    }), 1000);
  });
  
  $m_sad.click(function(){
    $audio_news.pause();
    $title.text("");
    clearInterval($happy_t);
    clearInterval($angry_t);
    clearInterval($fun_t);
    $body.removeClass("happy").removeClass("fun").removeClass("angry");
    $body.addClass("sad").addClass("play");
    $audio_happy.pause();
    $audio_angry.pause();
    $audio_fun.pause();
    //$audio_sad.play();
    var count = 0;
    var span = 0;
    $sad_t = setInterval((function() {
      if ($news_sad[count] === undefined && count === 0) {
        count++;
      } else if ($news_sad[count] === undefined && count !== 0) {
          clearInterval($sad_t);
          $audio_news_.attr("src", "");
          $title.text(""); 
          $audio_news.pause();
          $body.removeClass("play").removeClass("happy").removeClass("sad").removeClass("fun").removeClass("angry");
          $audio_happy.pause();
          $audio_sad.pause();
          $audio_angry.pause();
          $audio_fun.pause();       
      } else {
        $title.text("#" + count + " " + $news_sad[count][0]);
        if ($audio_news_.attr("src") !== "./sounds/s" + count + ".mp3") {
          span = $news_sad[count][1];
          $audio_news_.attr("src", "./sounds/s" + count + ".mp3");
          //$audio_news.play();
        }
        span--;
        if (span < 0) {
          count++;
        }
      }
    }), 1000);
  });
  
  $m_fun.click(function(){
    $audio_news.pause();
    $title.text("");
    clearInterval($happy_t);
    clearInterval($sad_t);
    clearInterval($angry_t);
    $body.removeClass("happy").removeClass("sad").removeClass("angry");
    $body.addClass("fun").addClass("play");
    $audio_happy.pause();
    $audio_angry.pause();
    $audio_sad.pause();
    //$audio_fun.play();
    var count = 0;
    var span = 0;
    $fun_t = setInterval((function() {
      if ($news_fun[count] === undefined && count === 0) {
        count++;
      } else if ($news_fun[count] === undefined && count !== 0) {
          clearInterval($fun_t);
          $audio_news_.attr("src", "");
          $title.text(""); 
          $audio_news.pause();
          $body.removeClass("play").removeClass("happy").removeClass("sad").removeClass("fun").removeClass("angry");
          $audio_happy.pause();
          $audio_sad.pause();
          $audio_angry.pause();
          $audio_fun.pause();       
      } else {
        $title.text("#" + count + " " + $news_fun[count][0]);
        if ($audio_news_.attr("src") !== "./sounds/f" + count + ".mp3") {
          span = $news_fun[count][1];
          $audio_news_.attr("src", "./sounds/f" + count + ".mp3");
          //$audio_news.play();
        }
        span--;
        if (span < 0) {
          count++;
        }
      }
    }), 1000);
  });
  
  $m_angry.click(function(){
    $audio_news.pause();
    $title.text("");
    clearInterval($happy_t);
    clearInterval($sad_t);
    clearInterval($fun_t);
    $body.removeClass("happy").removeClass("sad").removeClass("angry");
    $body.addClass("angry").addClass("play");
    $audio_sad.pause();
    $audio_happy.pause();
    $audio_fun.pause();
    //$audio_angry.play();
    var count = 0;
    var span = 0;
    $angry_t = setInterval((function() {
      if ($news_angry[count] === undefined && count === 0) {
        count++;
      } else if ($news_angry[count] === undefined && count !== 0) {
          clearInterval($angry_t);
          $audio_news_.attr("src", "");
          $title.text(""); 
          $audio_news.pause();
          $body.removeClass("play").removeClass("happy").removeClass("sad").removeClass("fun").removeClass("angry");
          $audio_happy.pause();
          $audio_sad.pause();
          $audio_angry.pause();
          $audio_fun.pause();       
      } else {
        $title.text("#" + count + " " + $news_angry[count][0]);
        if ($audio_news_.attr("src") !== "./sounds/a" + count + ".mp3") {
          span = $news_angry[count][1];
          $audio_news_.attr("src", "./sounds/a" + count + ".mp3");
          //$audio_news.play();
        }
        span--;
        if (span < 0) {
          count++;
        }
      }
    }), 1000);
  });
  $menu.click(function(){
      $html.toggleClass('side');
  });
  $favorite.click(function(){
    $body.toggleClass('on-favorite');
  });
  $history.click(function(){
    $body.toggleClass('on-history');
  });
  $setting.click(function(){
    $body.toggleClass('on-setting');
  });
  $m_menu.click(function(){
    $body.removeClass('on-favorite').removeClass('on-history').removeClass('on-setting');
  });
  $ctg.click(function(){
    if($(this).hasClass("r1") !== true && $(this).hasClass("r2") !== true && $(this).hasClass("r3") !== true){
      $(this).addClass("r1");
    } else if ($(this).hasClass("r1") === true && $(this).hasClass("r2") !== true && $(this).hasClass("r3") !== true) {
      $(this).addClass("r2");
    } else if ($(this).hasClass("r1") === true && $(this).hasClass("r2") === true && $(this).hasClass("r3") !== true) {
      $(this).addClass("r3");
    } else if ($(this).hasClass("r1") === true && $(this).hasClass("r2") === true && $(this).hasClass("r3") === true) {
      $(this).removeClass("r1").removeClass("r2").removeClass("r3");
    }
  });
  $switch.click(function(){
    $switch.css("transition", "transform, 0.3s, ease-in");
    $box.toggleClass('play');
  });
}());