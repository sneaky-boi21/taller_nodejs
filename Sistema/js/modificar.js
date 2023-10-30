window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        window.location.href = "sistema.html"
    });

    document.querySelector('.btn-primary').addEventListener('click', update);    
}

function update() {
    var id_empleado = document.getElementById('input-id').value;
    var nombre = document.getElementById('input-nombre').value;
    var apellidos = document.getElementById('input-apellidos').value;
    var telefono = document.getElementById('input-telefono').value;
    var correo = document.getElementById('input-correo').value;
    var direccion = document.getElementById('input-direccion').value;

    if(nombre && apellidos && telefono && correo && direccion) {
        axios({
            method: 'put',
            url: `http://localhost:3000/sistema/${id_empleado}`,
            data: {
                nombre:nombre,
                apellidos:apellidos,
                telefono:telefono,
                correo:correo,
                direccion:direccion,
                id_empleado:id_empleado
            }
        }).then(function(res) {
            console.log(res);
            alert("Update exitoso");
            }).catch(function(err) {
            console.log(err);
        })
    } else {
        alert("Por favor, llena todos los campos");
    }
}
