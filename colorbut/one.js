const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//events
buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id; //grey background
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id; //yellow background
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id; //white background
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id; //blue background
    }
    else if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id; //purple
    }
  })
})
