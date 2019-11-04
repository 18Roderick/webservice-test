(() => {
  const App = {
    Configs: {
      succesMessage: 'alert-success',
      errorMessage: 'alert-warning',
      errorAlert: ' border-color-red'
    },
    Controls: {
      form: document.querySelector(".formSubmit"),
      nombre: document.querySelector("#nombre"),
      apellido: document.querySelector("#apellido"),
      email: document.querySelector("#email"),
      telefono: document.querySelector("#telefono"),
      pais: document.querySelector("#pais"),
      mensaje: document.querySelector("#mensaje"),
      alertMessage: document.querySelector('.js-message')
    },
    Events: {
      onSubmit: function(e) {
        e.preventDefault();
        App.Methods.sendMessage();
      }
    },
    Exceptions: {},
    Methods: {
      init: function() {
        App.Controls.form.addEventListener("submit", App.Events.onSubmit);
      },
      sendMessage: function() {
        const body = {
          nombre: App.Controls.nombre.value,
          apellido: App.Controls.apellido.value,
          email: App.Controls.email.value,
          telefono: App.Controls.telefono.value,
          pais: App.Controls.pais.value,
          mensaje: App.Controls.mensaje.value
        };
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

        if(data.status  === 'ok'){
          App.Methods.showMessage('Mensaje enviado con exito', App.Configs.succesMessage);
          App.Methods.cleanFields();
        }else{
          for( let i = 0; i < data.data.length; i++){            
            App.Controls[data.data[i].field].className += App.Configs.errorAlert;
          }
          console.log(data);
          App.Methods.showMessage('asegurece de llenar los campos nombre, apellido, email y mensaje', App.Configs.errorMessage);
        }
        
      },
      onError: function(error) {
        alert(error);
      },
      cleanFields: function(){
        //limipiar clases
        for (const key in App.Controls) {
          App.Controls[key].className = App.Controls[key].className.split(App.Configs.errorAlert)[0];
        }

        //limpiar campos
        for (const key in App.Controls) {
          App.Controls[key].value = '';
        }
      },
      showMessage: function(message, type = App.Configs.succesMessage) {
        App.Controls.alertMessage.className += ` ${type}`;
        App.Controls.alertMessage.innerHTML = message;
        App.Controls.alertMessage.style.display = 'block';        
        setTimeout(() => {
          App.Controls.alertMessage.style.display = 'none';
          App.Controls.alertMessage.className = App.Controls.alertMessage.className.split(type)[0];
        },10000);
      }
    }
  };

  App.Methods.init();
})();
