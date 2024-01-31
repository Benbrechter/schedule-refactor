// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
 
  function currentTime(){
  var today = dayjs().format('dddd, MMMM D, YYYY [at] hh: mm: ss')
  $('#currentDay').text(today);
  } // I had to wrap this in a function so I could set a timer interval on it

  var currentHour = dayjs().format('HH')
console.log(currentHour);

  function hourColor(){
  $('.time-block').each(function(){
 const blockHour = parseInt(this.id);
 console.log(blockHour)
 if(blockHour < currentHour){
  $(this).addClass('past')
 }else if(blockHour === currentHour){
  $(this).addClass('present')
 }else{
  $(this).addClass('future')
 }

  });
  }

//function refreshColor(){

//}




function textEntry(){
$('.saveBtn').on('click', function(){
const key = $(this).parent().attr('id'); // this calls to the time block
const value = $(this).siblings('.description').val(); 
window.localStorage.setItem(key, value);
});
}
//now I need to get the text from local storage into the textbox area

$('.time-block').each(function(){
const key = $(this).attr('id');
const value = window.localStorage.getItem(key);
$(this).children('.description').val(value);
});









  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  hourColor();
  textEntry();
  setInterval(currentTime, 1000)
});
