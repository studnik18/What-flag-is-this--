$('.start').on('click', function(){
  $('#start').hide();
  $('#flag').show().css({'display' : 'flex'});
  $('#answers').show();
  main();
});

$('.next').on('click', function(){
  if(turns < 5) { 
    main();
  } else { 
    $('#flag').hide();
    $('#answers').hide();
    $('#next').empty().append('<h3>' + generateFinalMsg() + ' Your final score: ' + score + '<br>Reload the browser to play again.</h3>');
    $('#next').css({'height':'85px', 'text-align':'center'});
  }
});

var flagSpriteURL = 'http://res.cloudinary.com/dwigwhx88/image/upload/v1501530073/europe_flags_xewa6x.jpg';

clearCountries = function() {
  $('#flag').empty();
  $('#answers').children().empty();
  $('#next p').empty();
  $('#next').hide();
  $('.answer').css({'backgroundColor' : 'buttonface'});
  $('.answer').removeClass('correct');
  $('.answer').unbind('click');
};
pickCountry = function() {
  var index = Math.floor(Math.random() * data.length);
  var country = data[index];
  var flagImg = '<div style="width:' + country.width + 'px; height:' + country.height + 'px; background: url(' + flagSpriteURL + ') -' + country.left + 'px -' + country.top + 'px;"></div>';
  $('#flag').append(flagImg);
  var randomButton = '#' + Math.floor(Math.random() * 3 + 1).toString();
  $(randomButton).append('<h3>' + country.name + '</h3>');
  $(randomButton).addClass('correct');
  data.splice(index, 1);  
};

getWrongAnswerIndexes = function() {
    var numberOne = Math.floor(Math.random() * data.length);
    var numberTwo;
    do {
        numberTwo = Math.floor(Math.random() * data.length);
    } while (numberOne === numberTwo);
  return [numberOne, numberTwo];
};

addOtherAnswers = function(){
  var indexes = getWrongAnswerIndexes();
  var buttons = $('.answer').not('.correct');
  for (var i = 0; i < buttons.length; i++) {
      buttons.eq(i).append('<h3>' + data[indexes[i]].name + '</h3>');
   }
};

addButtonListeners = function() {
  $('#answers').children('.correct').on('click', function(){
    $(this).css({"backgroundColor": "#3C8D2F"});
    if ($('#next').css('display') === 'none') {
      score ++;
      turns ++;
      $('.msg').append('Yeah! Good answer pal! Keep it going!');
      $('.info').append('Score: ' + score + '<br>Turns: ' + turns + '/5')
    }
    $('#next').show();   
  });
  $('#answers').children().not('.correct').on('click', function(){
    $('.correct').css({"backgroundColor": "#3C8D2F"});
    if ($('#next').css('display') === 'none') {
      $(this).css({"backgroundColor": "#AA3939"});
      turns ++;
      $('.msg').append('Ooops... This is not a correct answer...');
      $('.info').append('Score: ' + score + '<br>Turns: ' + turns + '/5')
    }
    $('#next').show();     
  });
  
};
  
generateFinalMsg = function() {
  switch(score) {
    case 0:
      return 'Oh boy! What a disaster!...';
    case 1:
      return 'Nothing to be prouf of...';
    case 2:
      return 'There is much room for improvement.';
    case 3:
      return 'Not bad. Nothing special though.';
    case 4:
      return 'Good work! Very solid result.';
    case 5:
      return 'Magnificent! I bow before You.';
   }
};

main = function() {
  clearCountries();
  pickCountry();
  addOtherAnswers();
  addButtonListeners();
};

var turns = 0;
var score = 0;

var data = [
{name: 'Albania', top: 0, left: 0, width: 177, height: 105},
{name: 'Andorra', top: 0, left: 177, width: 180, height: 105},
{name: 'Austria', top: 0, left: 357, width: 179, height: 105},
{name: 'Belarus', top: 0, left: 536, width: 216, height: 105},
{name: 'Belgium', top: 0, left: 752, width: 180, height: 105},
{name: 'Bosnia and Herzegovina', top: 0, left: 932, width: 213, height: 105},
{name: 'Bulgaria', top: 0, left: 1145, width: 184, height: 105},
{name: 'Croatia', top: 105, left: 0, width: 186, height: 115},
{name: 'Czech Republic', top: 105, left: 186, width: 194, height: 115},
{name: 'Denmark', top: 105, left: 380, width: 187, height: 115},
{name: 'Estonia', top: 105, left: 567, width: 189, height: 115},
{name: 'Finland', top: 105, left: 756, width: 190, height: 115},
{name: 'France', top: 105, left: 946, width: 190, height: 115},
{name: 'Germany', top: 105, left: 1136, width: 193, height: 115},
{name: 'Greece', top: 220, left: 0, width: 186, height: 117},
{name: 'Hungary', top: 220, left: 186, width: 194, height: 117},
{name: 'Iceland', top: 220, left: 380, width: 189, height: 117},
{name: 'Ireland', top: 220, left: 569, width: 190, height: 117},
{name: 'Italy', top: 220, left: 759, width: 191, height: 117},
{name: 'Latvia', top: 220, left: 950, width: 191, height: 117},
{name: 'Liechtenstein', top: 220, left: 1141, width: 188, height: 117},
{name: 'Lithuania', top: 337, left: 0, width: 188, height: 114},
{name: 'Luxembourg', top: 337, left: 188, width: 192, height: 114},
{name: 'Macedonia', top: 337, left: 380, width: 189, height: 114},
{name: 'Malta', top: 337, left: 569, width: 189, height: 114},
{name: 'Moldova', top: 337, left: 759, width: 190, height: 114},
{name: 'Monaco', top: 337, left: 950, width: 191, height: 114},
{name: 'Netherlands', top: 337, left: 1141, width: 188, height: 114},
{name: 'Norway', top: 451, left: 0, width: 193, height: 119},
{name: 'Poland', top: 451, left: 193, width: 193, height: 119},
{name: 'Portugal', top: 451, left: 386, width: 196, height: 119},
{name: 'Romania', top: 451, left: 582, width: 194, height: 119},
{name: 'Russia', top: 451, left: 776, width: 195, height: 119},
{name: 'San Marino', top: 451, left: 971, width: 165, height: 119},
{name: 'Slovakia', top: 451, left: 1136, width: 193, height: 119},
{name: 'Slovenia', top: 570, left: 0, width: 188, height: 113},
{name: 'Spain', top: 570, left: 188, width: 168, height: 113},
{name: 'Sweden', top: 570, left: 356, width: 186, height: 113},
{name: 'Switzerland', top: 570, left: 542, width: 114, height: 113},
{name: 'Ukraine', top: 570, left: 656, width: 188, height: 113},
{name: 'United Kingdom', top: 570, left: 844, width: 190, height: 113},
{name: 'Vatican', top: 570, left: 1034, width: 113, height: 113}];