(() => {
  const App = {
    data: {
      nombre: document.querySelector("#nombre"),
      apellido: document.querySelector("#apellido"),
      email: document.querySelector("#email"),
      telefono: document.querySelector("#telefono"),
      pais: document.querySelector("#pais"),
      mensaje: document.querySelector("#mensaje")
    },
    Controls: {
      form: document.querySelector(".formSubmit")
    },
    Events: {
      onSubmit: function(e) {
        e.preventDefault();
        App.Methods.sendMessage(this);
      }
    },
    Exceptions: {},
    Methods: {
      init: function() {
        App.Controls.form.addEventListener("submit", App.Events.onSubmit);
      },
      sendMessage: function() {
        const body = {
          nombre: App.data.nombre.value,
          apellido: App.data.apellido.value,
          email: App.data.email.value,
          telefono: App.data.telefono.value,
          pais: App.data.pais.value,
          mensaje: App.data.mensaje.value
        };
        console.log(body);
        fetch("/form", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(App.Methods.onSucces)
          .catch(App.Methods.onError);
      },
      onSucces: function(data) {
        console.log(data);
      },
      onError: function(error) {
        alert(error);
      }
    }
  };

  App.Methods.init();
})();
