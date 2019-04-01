// let game_id;
// // Using jquery to save value and post to game
// $('li').click(function () {
//   let sValue = $(this).text();
//   $.ajax({
//     url: 'http://0.0.0.0:8080/game',
//     type: 'POST',
//     data: JSON.stringify({ 'scenario': sValue }),
//     contentType: 'application/json; charset=utf-8',
//     dataType: 'json',
//     success: function (data, status) {
//       if (status !== 'success') {
//         console.log('POST error', status);
//       } else {
//         $('li').hide();
//         $('h3').hide();
//         $('h4').text('Your new game id! Please save for future database upgrade: ' + data.id);
//         $('h2').text(data.summary);
//         $('.startbtn').css('display', 'block');
//         game_id = data.id;
//       }
//     }
//   });
// });
//
// $('.startbtn').on('click', function (event) {
//   // event.preventDefault();
//   const url = 'http://0.0.0.0:8080/game/' + game_id;
//   // $.get(url);
//   window.location.href = url;
// });
