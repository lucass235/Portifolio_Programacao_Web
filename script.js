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

// function sendEmail(name, email, msg) {
//   email
//     .send({
//       Host: "smtp.gmail.com",
//       Username: "lucas.2020109680@unicap.br",
//       Password: "iejjdqixuiidmxwh",
//       To: "lucas.2020109680@unicap.br",
//       From: "lucas.2020109680@unicap.br",
//       Subject: `${name} - Contato pelo site`,
//       Body: `Nome: ${name} <br/> Email:  ${email} <br/> Mensagem: ${msg}`,
//     })
//     .then((message) => alert("Mensagem enviada com sucesso!"));
