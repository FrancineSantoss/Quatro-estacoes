var posicao = 0;
       var mensagem = "Bem vindo á quatro estações, cadastre-se para receber todas as novidades... ";  //Esse texto

         function rola() {
         document.getElementsByName("lugar")[0].innerHTML = 
           mensagem.substring(posicao,mensagem,length);
             posicao++;
           if (posicao == mensagem.length) {
                posicao = 0;
               }
           setTimeout("rola()", 70); 
      }


      var rel = setInterval(relogio, 2000);

function relogio() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
} 

