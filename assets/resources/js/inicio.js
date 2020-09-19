


window.onload = function(){


  var entidade = document.getElementById('imagem');

  // Altere o número para a apliação/redução desejada
  var fator_lupa = 2;

  entidade.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };

  entidade.onmouseout = function () { this.style.width = (this.clientWidth / 2) + "px"; };

    let men = confirm("Deseja receber novidades? ");
    if (men == true) {
        var email = prompt("Digite seu email: ");
        alert(`Email  ${email}  cadastrado com sucesso!`);
    } else
        if (men == false)
            return false;

}
