$(function() {
  // マンドラゴラ
  $(function roop_animation() {
    $('#mandragora')
      .animate({left: 970}, 2000)
      .animate({left: 0}, 2000, function() {
        roop_animation();
      });
  });
  $('#mandragora img').click(function() {
    $('#mandragora').stop(false, false);
    $('#mandragora').animate({opacity: 0}, 1000);
  });

  // マンドラゴラ2
  $(function roop_animation() {
    $('#mandragora2')
      .animate({left: 870}, 3000)
      .animate({left: 0}, 3000, function() {
        roop_animation();
      });
  });
  $('#mandragora2 img').click(function() {
    $('#mandragora2').stop(false, false);
    $('#mandragora2').animate({opacity: 0}, 1000);
  });
  
    //鳥
    $(function bird_animation() {
      $('#bird').animate({top: 40}, 1000);
      $('#bird').animate({top: 10}, 1000);
      $('#bird').animate({left: 800, top: 90}, 500);
      $('#bird').animate({top: 130}, 1000);
      $('#bird').animate({top: 100}, 1000);
      $('#bird').animate({left: 300}, 500, function() {
        bird_animation();
      });
    });
    $('#bird img').click(function() {
      $('#bird').stop(true, false);
      $('#bird').animate({opacity: 0}, 1000);
    });
  
  // 犬
  $('#angel_dog').delay(3000).animate({left: 1150}, 3000);
  $('#angel_dog img').click(function() {
    $('#angel_dog').stop(false, false);
    $('#angel_dog img').attr('src', 'images/resize/angel_dog.png');
    $('#angel_dog').animate({top: -100, opacity: 0}, 2000, 'linear');
  });

  // 猫
  $('#angel_cat').delay(7500).animate({left: -200}, 3000);
  $('#angel_cat img').click(function() {
    $('#angel_cat').stop(false, false);
    $('#angel_cat img').attr('src', 'images/resize/angel_cat.png');
    $('#angel_cat').animate({top: -100, opacity: 0}, 3000, 'linear');
  });
  // ドラゴン
  $('#dragon img').click(function() {
    $('#dragon').fadeOut(1000);
  })
  
});

// ランダムでtrueかfalseを返す
function boolean_generate() {
  let random_num = Math.floor(Math.random() * 10) + 1;
  return random_num % 2 === 0;
};
// 出現判定
function emerge_judge() {
  if (boolean_generate()) {
    $('#dragon').fadeIn(1000);
  } else {
    $('#dragon').fadeOut(1000);
  };
};
let dragon_emerge = setInterval(emerge_judge, 3000);

let dragon = document.querySelector('#dragon');
dragon.addEventListener('click', function() {
  $('#dragon').fadeOut(1000);
  clearInterval(dragon_emerge);
});