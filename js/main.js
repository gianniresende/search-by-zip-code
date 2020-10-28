
function queryCep() {
  $.ajax({
    url: "https://viacep.com.br/ws/37206654/json/",
    type: "GEt",
    success: function(response) {
      console.log(response);
    }
  })
}