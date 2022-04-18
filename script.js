function submit(event) {
  event.preventDefault();
  let name = document.getElementById("nameForm").value;
  let email = document.getElementById("emailForm").value;
  let msg = document.getElementById("msgForm").value;
  var form = document.getElementById("formsContact");

  if (name == "" || email == "" || msg == "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert(
      name +
      " sua mensagem foi enviada com suceeso" +
      "\n" +
      "Seu email: " +
      email +
      "\n" +
      "Sua mensagem: " +
      msg
    );
    form.reset();
  }
}
