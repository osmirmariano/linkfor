function login(){
    let dados = {
        grant_type: "password",
        username: document.getElementById('email').value,
        password: document.getElementById('password').value,
        client_id: 2,
        client_secret: "HzhVAeZwMTTworhdJMWqNtj6plkkPIQ95XFVbevf",
        scope: ""
    };
    console.log(dados);
    fetch('http://127.0.0.1:8000/oauth/token', {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: JSON.stringify(dados)
      })
      .then((res) => {
        
        res.json().then(body => console.log(body));
        console.log("this is res", res)
      }).catch((err) => {
        console.log(err)
      })
    //   .then(function(response){
    //     response.json().then(function(data){
    //         console.log(response);
    //     });
    //     })
    //     .catch(function(err){
    //         console.error('Failed retrieving information', err);
    //     });
}


function cadastroProfissional(){
    let dados = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        city: document.getElementById('cidade').value,
        state: document.getElementById('estado').value,
        country: document.getElementById('pais').value,
        college: document.getElementById('universidade').value,
        course: document.getElementById('curso').value,
        profession: document.getElementById('profissao').value,
        area: document.getElementById('atuacao').value
    };

    let options = {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
    }
    console.log(dados);
    fetch('http://127.0.0.1:8000/api/cadastro-profissional', dados, options)
      .then((res) => {
        res.json().then(body => console.log(body));
        console.log("this is res", res)
      }).catch((err) => {
        console.log(err)
      })
}