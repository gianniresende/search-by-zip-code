function queryCep() {
  var zip_code = document.getElementById("cep").value;
  var url = "https://viacep.com.br/ws/"+ zip_code +"/json/"
  $.ajax({
    url: url,
    type: "GEt",
    success: function(response) { 
      $("#logradouro").html(response.logradouro); 
      $("#bairro").html(response.bairro); 
      $("#localidade").html(response.localidade); 
      $("#uf").html(response.uf);   
      $("#title_cep").html("CEP " + response.cep); 
      console.log(response);
    }
  })
}