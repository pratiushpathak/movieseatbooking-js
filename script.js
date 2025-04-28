const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');

const total=document.getElementById('total');
const movieSelect=document.getElementById('movie');
let ticketPrice=+movieSelect.value;//+ convert string into number 
//console.log(ticketPrice);
//Save selected movie index and price
populateUi()

function setMovieData(movieIndex,moviePrice)
{
  localStorage.setItem('selectedMovieIndex',movieIndex);
  localStorage.setItem('selectedMoviePrice',moviePrice)

}

//update total count
function updateSelectedCount()
{
  const selectedSeats= document.querySelectorAll('.row .seat.selected');
  //console.log(selectedSeats)

  // saving to local storage
  //copy selectd seats into arr
  // map through array
  // return a new array indexes 
  //spread operator convert node list in array in our case->
  const seatsIndex=[...selectedSeats].map(function(seat){
    return[...seats].indexOf(seat)
    

  });
  localStorage.setItem('selectedseats',JSON.stringify(seatsIndex)) 
//code end local storage
  const selectedSeatsCount=selectedSeats.length;
  count.innerText=selectedSeatsCount;
  total.innerText=selectedSeatsCount*ticketPrice;
   
}


//get data from local storage and populate ui 
function populateUi(){

const selectedSeats=JSON.parse(localStorage.getItem('selectedseats'));
//console.log(selectedSeats);
if(selectedSeats!==null && selectedSeats.length>0)
{
  seats.forEach((seat,index)=>{
if(selectedSeats.indexOf(index)>-1)
{
  seat.classList.add('selected');

}
  })
}
const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');
if(selectedMovieIndex!==null)
{
  movieSelect.selectedIndex=selectedMovieIndex;
}


}


//movie select event
movieSelect.addEventListener('change',(e)=>{
  ticketPrice= +e.target.value;
  setMovieData(e.target.selectedIndex,e.target.value);
  updateSelectedCount();

})


//seat click event
container.addEventListener('click',(e)=>{
  //console.log(e.target);
  if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied'))
  {
   e.target.classList.toggle('selected')
   updateSelectedCount();
  }

})
//initial count and total set
updateSelectedCount();