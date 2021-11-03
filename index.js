alert('Caso estiver visualizando em Mobile. Ative a versão para Desktop no seu navegador para melhor funcionamento! :)')

var res = document.getElementById('restxt')



//// Check dos radios //// 
function gerar(){
    

    if(document.getElementById('cpf').checked) {

        res.value = `Validador de cpf aeaeaeaeaeaeaeaeaaeaeaaeaeeaa`

      }else if(document.getElementById('rg').checked) {
        res.value = `Validador de RG`
      }
    

}


//// Botão de cópia /////
document.getElementById('copy').addEventListener('click', copy);
function copy() {
  document.getElementById("restxt").select();
  document.execCommand("copy");
}