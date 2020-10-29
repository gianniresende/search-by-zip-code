function queryCep() {
  $(".bar-progress").show();
  var zip_code = document.getElementById("cep").value;
  var url = "";
  if (zip_code === ""){
    $(".bar-progress").hide();
    alert('Informe um CEP para consulta');
    return;
  }else {
    url = "https://viacep.com.br/ws/"+ zip_code +"/json/"
  }
  $.ajax({
    url: url,
    type: "GEt",
    success: function(response) { 
      $("#logradouro").html(response.logradouro); 
      $("#bairro").html(response.bairro); 
      $("#localidade").html(response.localidade); 
      $("#uf").html(response.uf);   
      $("#title_cep").html("CEP " + response.cep);
      $(".cep").show();
      $(".bar-progress").hide();
    }
  })
}

$(function() {
  $(".cep").hide();
  $(".bar-progress").hide();
})

