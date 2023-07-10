const callback = (req, res) => {
    // El usuario ha sido autenticado correctamente.
    // Aquí puedes redirigir a la página principal de tu aplicación o realizar cualquier otra acción.
    res.redirect('/users');
}

module.exports = {callback};




