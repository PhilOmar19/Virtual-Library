const autores = [
    {
        nombre: 'Giovanni Boccacio',
        nacimiento: 'DD de Mes de Año',
        pais: 'País del Autor',
        biografia: 'Información sobre el autor 1.'
    },
    {
        nombre: 'Julio Verne',
        nacimiento: 'DD de Mes de Año',
        pais: 'País del Autor',
        biografia: 'Información sobre el autor 2.'
    },
    {
        nombre: 'Jane Austen',
        nacimiento: 'DD de Mes de Año',
        pais: 'País del Autor',
        biografia: 'Información sobre el autor 2.'
    },
    {
        nombre: 'Charles Dickens',
        nacimiento: 'DD de Mes de Año',
        pais: 'País del Autor',
        biografia: 'Información sobre el autor 2.'
    },
    {
        nombre: 'Miguel de Cervantes',
        nacimiento: 'DD de Mes de Año',
        pais: 'País del Autor',
        biografia: 'Información sobre el autor 2.'
    }
];

function buscarAutores() {
    const inputBusqueda = document.querySelector('.search-input');
    const resultadoBusqueda = document.querySelector('.resultado-busqueda');

    const nombreBuscado = inputBusqueda.value.trim().toLowerCase();
    const autorEncontrado = autores.find(autor => autor.nombre.toLowerCase() === nombreBuscado);

    if (autorEncontrado) {
        mostrarInformacionAutor(autorEncontrado);
        resultadoBusqueda.textContent = ''; // Limpiar mensaje de no encontrado si estaba presente
    } else {
        resultadoBusqueda.textContent = 'No se encontró información sobre el autor solicitado.';
        limpiarInformacionAutor();
    }
}

function mostrarInformacionAutor(autor) {
    const autorInfo = document.querySelector('.autor-info');
    autorInfo.innerHTML = `
        <h2>${autor.nombre}</h2>
        <p>Fecha de nacimiento: ${autor.nacimiento}</p>
        <p>País: ${autor.pais}</p>
        <p>Biografía: ${autor.biografia}</p>
    `;
}

function limpiarInformacionAutor() {
    const autorInfo = document.querySelector('.autor-info');
    autorInfo.innerHTML = ''; // Limpiar la información del autor
}