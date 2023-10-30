window.onload = init;
var url = "http://localhost:3000";

function init() {
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        window.location.href = "sistema.html";
    });

    document.querySelector('.btn-primary').addEventListener('click', search); 
}

function search() {
    var id_empleado = document.getElementById('input-id').value;
    var nombre = document.getElementById('input-name').value;

    var searchParam = id_empleado ? id_empleado : nombre;
    var data = id_empleado ? {id_empleado: id_empleado} : {nombre: nombre};
    axios({
        method: 'get',
        url: `${url}/sistema/${searchParam}`,
        data: data
    })
    .then(function(res) {
        console.log(res);
        displayEmpleados(res.data.message);
        alert("Busqueda exitosa");
    })
    .catch(function(err) {
        console.log(err);
    });
}

function displayEmpleados(empleados) {
    var body = document.querySelector("body");
    
    var tableHTML = `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Direccion</th>
            </tr>`;

    empleados.forEach(empleado => {
        tableHTML += `
            <tr>
                <td>${empleado.nombre}</td>
                <td>${empleado.apellidos}</td>
                <td>${empleado.telefono}</td>
                <td>${empleado.correo}</td>
                <td>${empleado.direccion}</td>
            </tr>`;
    });

    tableHTML += '</table>';
    
    body.innerHTML += tableHTML;
}
