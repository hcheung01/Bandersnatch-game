$('.scenariolist').click(function () {
  // Get value of clicked element
  const scenario = $(this).text();
  $(this).css('color', 'red');
  $('ol').css('display', 'none');
  $('p').css('display', 'none');
  // Send a POST request to /game with the value of clicked element
  $.ajax({
    type: 'POST',
    url: '/game',
    data: JSON.stringify({'scenario': scenario}),
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {
      if (data) {
        $('#scenario-container').append('<h4>You selected: ' + data.scenario + '</h4>');
      }
      $('button').css('display', 'block');
      $('button').click(function () {
        let gameURL = '/game/' + data.id;
        $.get(gameURL, function (data) {
          window.location.href = gameURL;
        });
      });
    }
  });
});

$('.choice').click(function () {
  $('.choice').hide();
  const choiceValue = $(this).text();
  const choiceIndex = $(this).index();
  $(this).attr('id', 'selected');
  $('#history-container').css('display', 'block');
  $('#history-container').append('<p>' + choiceValue + '</p>');
  const reasonValue = $('.reason').get(choiceIndex).textContent;
  alert('Result: ' + reasonValue);

  $.ajax({
    type: 'POST',
    url: window.location.pathname,
    data: JSON.stringify({'choiceIndex': choiceIndex}),
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {
      if (data.goto === 'success') {
        alert('YOU GOT THE JOB!!! Press OK to restart game!');
        window.location.href = '/scenarios';
      } else if (data.goto === 'failure') {
        alert('YOU FAILED THE INTERVIEW! Press OK to restart game!');
        window.location.href = '/scenarios';
      } else {
        window.location.href = window.location.pathname;
      }
    }
  });
});
