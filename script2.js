
const sucesso = document.querySelector('.sucesso')
  const  button = document.querySelector('button')

 const addloading = () =>{
   sucesso.style.display = 'flex' 
    button.innerHTML = '<div class="loader"></div>';
 }



 const removeloading = () =>{
 
    button.innerHTML = 'Enviar';
    sucesso.style.display = 'none' 
   }
   

const handleSubmit = (event) =>{
 event.preventDefault();

 addloading  ()

 const falta = document.querySelector('input[name=falta]').value;
 const turma = document.querySelector('input[name=turma]').value;

       fetch('https://api.sheetmonkey.io/form/foUZ2xeAtTHP2i8T7SGZQ9', {
        method:'post',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ falta  , turma }),
       } ).then(()=>removeloading ());
    }
document.querySelector('form').addEventListener('submit', handleSubmit)

   