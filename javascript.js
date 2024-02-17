let counter = 0;
 let counter2=0;
 
 const body = document.querySelector('body');
  const content = document.querySelector('.content');
  const btn1 = document.querySelector('.btn1');
  const container = document.querySelector('.container');
  const full = document.querySelector('.full');
  const bodyColors = document.querySelector('.bdy-color');

  const reset = document.querySelector('.resets');


   bodyColors.addEventListener('click',() =>{ 
    if(body.style.getPropertyValue('background-color')==='rgb(204, 204, 204)'){
      body.style.backgroundColor = 'white';
    }
       else
       {
        console.log(body.style.getPropertyValue('background-color')==='hsl(0,0%,80%)')
    body.style.backgroundColor = 'hsl(0,0%,80%)';
       }
  });


  btn1.addEventListener(('click'), () =>{ 
    if(counter<15)
    {
 const image  = document.createElement('img');

 
 let r = Math.trunc(Math.random(1)*8);

 image.setAttribute('src',`ime/im${r}.jpeg`);
   counter++;
 image.style = `width: 100px ;margin:3px; height :100px ;border :3px white solid; `;
    
 content.append(image);
      console.log(counter);
}
  else if( (counter===15)&&(counter2===0)){
       
       full.append("container is full ");
        counter2 ++;
   }  
  else
  {
    full.style.color='red';
    
  }
  
  });


  reset.addEventListener(('click'), () =>{
      counter=0;
      counter2=0;
      full.textContent = '';
      content.textContent = '';

   });