alert("funcionou!");

function consultaCep() {
  var cep = document.getElementById("cep").value;
  var url = "https://viacep.com.br/ws/" + cep + "/json/"
  //console.log(cep);
  $.ajax({
    //url: "https://viacep.com.br/ws/01001000/json/",
    url: url,
    type: "GET",
    //dataType: 'jsonp',
    success: function(response){
      console.log(response);
      $("#logradouro").html(response.logradouro);
      //document.getElementById("logradouro").innerHTML = response.logradouro;
      //posso fazer document.get... para varios dados
      //DEU CERTO ASSIM!!!
    }
  })
}