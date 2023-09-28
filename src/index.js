document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleForm(e.target.description1.value);
      form.reset();
    });
  
});

function handleForm(todo){
  let li= document.createElement('li');
  let btn= document.createElement('button')
  btn.addEventListener('click', function handleDelete(e){
    e.target.parentNode.remove();
  })

  li.textContent=`${todo} `;
  btn.textContent= 'delete'
  btn.style.fontSize="10px";

  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);


}

