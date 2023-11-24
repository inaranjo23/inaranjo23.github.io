function validarForm() {
    //var nom = document.forms["formulari"]["nomComplet"].value;
    var nom = document.getElementById("NomCognom").value;
    var num = document.getElementById("NumeroNIF").value;
    var lletra = document.getElementById("lletraNIF").value;
    alert("Comencem a validar..." + nom + " " + num + " " + lletra);
    lletra = lletra.toUpperCase();
    num = num % 23;
    lletres_dni = "TRWAGMYFPDXBNJZSQVHLCKET";
    lletres_apartir_num = lletres_dni.substing(num, mum + 1);
    if (lletra != lletres_apartir_num) {
        alert('DNI erroni, la lletra del DNI no es correcta');
        return false;
    } else {
        alert("Tot correcte, envie'm les teves dades. Gràcies " + nom);
        document.getElementById("formulari").submit();
        return true;
    }
}