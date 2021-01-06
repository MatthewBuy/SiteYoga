
function TestFunction(){
   /*console.log(document.getElementById("textProdutora").value);
   console.log(document.getElementById("textNome").value);
   console.log(document.getElementById("textForm").value);
   console.log(document.getElementById("textMensagem").value);
   console.log(document.querySelector('input[name="indicacao"]:checked').value);*/

   var informa = {
       producerName : document.getElementById("textProdutora").value,
       name         : document.getElementById("textNome").value,
       form         : document.getElementById("textForm").value,
       mensage      : document.getElementById("textMensagem").value,
       indica       : document.querySelector('input[name="indicacao"]:checked').value
   };

   document.getElementById("temporaria").innerHTML = "O nome da sua produtora é " + informa.producerName + " e seu nome é " + informa.name + ". Voce escolheu " + informa.form + ". sua mensagem para nós é: " + informa.mensage + " e voce ficou sabendo de nós por, " + informa.indica;

}


      function rolar_para(elemento) {
       $('html, body').animate({
        scrollTop: $(elemento).offset().top
      }     , 500);
          
}