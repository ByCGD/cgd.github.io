
//BUSCA JSON Y TRAE SOLO USUARIOS CON NACIONALIDAD ESPAÑOLA "ES".
const getNewUserInfo = () => {
  fetch('https://randomuser.me/api/?nat=ES')
      .then(response => response.json())
      .then(data => displayUserInfo(data))  
}

const displayUserInfo = (data) => {
  

  const userInfo = data.results[0];


  console.log(userInfo);

  document.getElementById("showPic").src = userInfo.picture.large;

  const showDoc = `${userInfo.id.name}: ${userInfo.id.value}`;
  document.getElementById("showDoc").innerText = showDoc;

  const showCountry = `${userInfo.location.country}`;
  document.getElementById("showCountry").innerText = showCountry;
  
  const showFullName = `${userInfo.name.title}. ${userInfo.name.first} ${userInfo.name.last}`;
  document.getElementById("showFullname").innerText = showFullName;

  let userDOB = new Date(userInfo.dob.date);
  userDOB = `${userDOB.getDate()}/${userDOB.getMonth() + 1}/${userDOB.getFullYear()} (${userInfo.dob.age})`
  document.getElementById("showAge").innerText = userDOB;

  const showPhone = `${userInfo.cell}`;
  document.getElementById("showPhone").innerText = showPhone;

  const showMail = `${userInfo.email}`;
  document.getElementById("showMail").innerText = showMail;

  const showStreet = `${userInfo.location.street.number} ${userInfo.location.street.name}, ${userInfo.location.city}, ${userInfo.location.state}.`;
  document.getElementById("showStreet").innerText = showStreet;
}

getNewUserInfo();

//PURO BOOSTRAP PARA VALIDAR CAMPOS 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


//DATOS CONTACTOS
//WTF, 8 horas para que esto funciones y solo era linkear el js despues del </body>
  //EDICION MUESTRA FORMULARIO
  document.getElementById('btn-edit-datosContacto').addEventListener('click', function() {  
  document.getElementById('edit-data-datosContacto').style.display = 'block';
  document.getElementById('data-datosContacto').style.display = 'none';
  });
  //CANCEL
  document.getElementById('cancel').addEventListener('click', function() {
  document.getElementById("form").reset();
  document.getElementById('edit-data-datosContacto').style.display = 'none';
  document.getElementById('data-datosContacto').style.display = 'block';
  
  });

//CAPTURA DATOS FORMULARIO DATOS CONTACTO.

function UpdateDatosContacto(){
 let inputPhone = document.getElementById('inputPhone').value;
 let inputEmail = document.getElementById('inputEmail').value;
 let inputAddress = document.getElementById('inputAddress').value;
 let inputCity = document.getElementById('inputCity').value;
 let inputState = document.getElementById('inputState').value;
 let stringStreet = inputAddress +", " + inputCity+", " + inputState;

 //MUESTRA DATOS DEL FORMULARIO.
  document.getElementById('showPhone').innerHTML = inputPhone;
  document.getElementById('showMail').innerHTML = inputEmail;
  document.getElementById('showStreet').innerHTML = stringStreet;
  document.getElementById('edit-data-datosContacto').style.display = 'none';
  document.getElementById('data-datosContacto').style.display = 'block';
  document.getElementById("form").reset();
  };

//EDICIÓN EXPERIENCIA PROFESIONAL
    document.getElementById('btn-edit-experienciaProfesional').addEventListener('click', function() {  
    document.getElementById('edit-data-Experiencia').style.display = 'block';
    document.getElementById('data-ExperienciaProfesional').style.display = 'none';
    });
    //CANCEL
    document.getElementById('cancelexp').addEventListener('click', function() {
    document.getElementById("form-exp").reset();
    document.getElementById('edit-data-Experiencia').style.display = 'none';
    document.getElementById('data-ExperienciaProfesional').style.display = 'block';
    
    });
  
  //CAPTURA DATOS FORM EXPERIENCIA PROFESIONAL
    
  function UpdateExperiencia(){
    let inputPosition = document.getElementById('inputPosition').value;
    let inputCompany = document.getElementById('inputCompany').value;
    let inputLevel = document.getElementById('inputLevel').value;
    let inputFrom = document.getElementById('inputFrom').value;
    let inputUntil= document.getElementById('inputUntil').value;
    let inputDescription = document.getElementById('inputDescription').value;
    let FromUntil = inputFrom +" - " + inputUntil;
    let PositionLevel = inputPosition +" - " + inputLevel;

   //MUESTRA DATOS DEL FORMULARIO.
     document.getElementById('PositionLevel').innerHTML = "<span style='font-weight: bolder;'>"+ PositionLevel + "</span>";
     document.getElementById('Company').innerHTML = inputCompany;
     document.getElementById('FromUntil').innerHTML = FromUntil;
     document.getElementById('Description').innerHTML = inputDescription;
     document.getElementById('edit-data-Experiencia').style.display = 'none';
     document.getElementById('data-ExperienciaProfesional').style.display = 'block';
     document.getElementById("form-exp").reset();
    };

    function check() {
    let checkBox = document.getElementById('checkPresente');
    let text = document.getElementById('inputUntil');
    if (checkBox.checked == true){
      text.disabled = true;
      document.getElementById('Until').innerHTML = "Al presente";
    } else {
      text.disabled = false;
    }
  }
 
   
      
//AJAX para el Modal
   $(document).ready(function(){
    $("#abreModal").click(function(){
      $("#AyudaExperiencia").modal('show');
    });
  });
  
  
/*function NewExperiencia(){
const div = document.createElement('div'); // <div></div>
div.className ="col-xxl-6 text-end";   // <div id="page" class="data"></div>
const span = document.createElement('span');

    // Crear nodo de tipo Text
let contenido = inputCompany.innerHTML;


let contenedor = document.getElementById('test');
contenedor.appendChild(div);
contenedor.appendChild(span); 
   };


   function add(){

      let inputCompany = document.getElementById('inputCompany').value;
    let contenido = inputCompany.innerHTML;
   
    const div = document.createElement("div"); // <div></div>
    div.className ="col-xxl-6 text-end";   // <div id="page" class="data"></div>
    div.textContent = contenido.innerHTML;
    const span = document.createElement('span');
      
    let contenedor = document.getElementById('test');
    contenedor.appendChild(div);
    contenedor.appendChild(span);
  
    
    // Añadir el nodo Text como hijo del nodo tipo Element
     // span.appendChild(contenido);
       
         
       };*/

      

     /* const MESES = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
          ];
      const date = new Date();
            
      MESES[date.getMonth()]; // Devuelve el mes actual en formato de texto
     let age = date.getFullYear();  
      const mes = MESES[9];
       
   console.log(mes);
   console.log(age);*/
  
   
   