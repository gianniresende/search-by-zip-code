function queryCep() {
  $(".progress-bar").show();
  var zip_code = document.getElementById("cep").value;
  var url = "";
  if (zip_code === ""){
    $(".progress-bar").hide();
    alert('Informe um CEP para consulta');
    return;
  }else {
    url = "https://viacep.com.br/ws/"+ zip_code +"/json/"
  }
  $.ajax({
    url: url,
    type: "GEt",
    success: function(response) { 
      if (response.cep === undefined) {
        $(".progress-bar").hide();
        alert('CEP inválido!');
        return;
      } else {
        $("#logradouro").html(response.logradouro); 
        $("#bairro").html(response.bairro); 
        $("#localidade").html(response.localidade); 
        $("#uf").html(response.uf);   
        $("#title_cep").html("CEP " + response.cep);
        $(".cep").show();
        $(".progress-bar").hide();
      }
    }
  })
}

$(function() {
  $(".cep").hide();
  $(".progress-bar").hide();
})

