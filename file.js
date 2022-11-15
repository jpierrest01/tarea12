function enviardatos(){    
    var nombre = $('#nombre').val();
    var mail = $('#mail').val();
    var telefono = $('#telefono').val();
    var pelicula = $('#pelicula').val();
    
    var array = [];

    array.push({
        'nombre':nombre,
        'apellido':mail,
        'documento':telefono,        
        'correo':pelicula
    })
   
    $("#table").html();
    var num = 0;
    for (let value of array) {        
        num=num+1;
        var tr = `<tr>
            <td>`+num+`</td>
            <td>`+value.nombre+`</td>
            <td>`+value.apellido+`</td>
            <td>`+value.documento+`</td>
            <td>`+value.correo+`</td>
            </tr>`;
        $("#table").append(tr)
    }    

    this.limpiar();

}

function limpiar(){
    $('#nombre').val('');
    $('#apellido').val('');
    $('#documento').val('');
    $('#correo').val('');
}

function limpiardatos(){    
    array = [];
    $("#table").html("");
}