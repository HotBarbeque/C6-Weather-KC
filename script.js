var apiKey = "d5f0e15f02425a7db534074f187428cf"
var searchBtn = document.querySelector('.searchBtn');
var citySearch = document.querySelector('.citySearch');
var currentDay = dayjs();


$('.todayDate').text(currentDay.format(' M/D/YYYY'));
$('.date-1').text(dayjs().add(1, 'day').format('M/D/YYYY'));
$('.date-2').text(dayjs().add(2, 'day').format('M/D/YYYY'));
$('.date-3').text(dayjs().add(3, 'day').format('M/D/YYYY'));
$('.date-4').text(dayjs().add(4, 'day').format('M/D/YYYY'));
$('.date-5').text(dayjs().add(5, 'day').format('M/D/YYYY'));

