const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');

const total=document.getElementById('total');
const movieSelect=document.getElementById('movie');
let ticketPrice=+movieSelect.value;//+ convert string into number 
console.log(ticketPrice);
//update total count
function updateSelectedCount()
{
  const selectedSeats= document.querySelectorAll('.row .seat.selected');
  //console.log(selectedSeats)
  const selectedSeatsCount=selectedSeats.length;
  count.innerText=selectedSeatsCount;
  total.innerText=selectedSeatsCount*ticketPrice;
   
}
//movie slect event
movieSelect.addEventListener('change',(e)=>{
  ticketPrice= +e.target.value;
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