// $('h3').css('color', 'red');
// $('li').find('#action').css('display', 'none');
// $('li').click(function () {
//   const clickedIndex = $(this).index();
//   const yourChoice = $(this).children().first().text();
//   const result = $(this).children().last().text();
//
//   $('li').hide();
//   $('#first').text('You chose to..... ' + yourChoice);
//   $('#firstAnswer').text('and..... ' + result);
//
//   const newURL = window.location.href;
//   $.ajax({
//     url: newURL,
//     type: 'POST',
//     data: JSON.stringify({ 'choiceIndex': clickedIndex }),
//     contentType: 'application/json; charset=utf-8',
//     dataType: 'json',
//     success: function (data, status) {
//       if (status !== 'success') {
//         console.log('POST error', status);
//       } else {
//         const url = 'http://0.0.0.0:8080/scenarios/';
//         setTimeout(function () { window.location.href = url; }, 5000);
//       }
//     }
//   });
// });
