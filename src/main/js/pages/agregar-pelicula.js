const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const AgregarPeliculaPage = ()=>{

    const [pelicula, setPelicula] = useState({})
    const [categorias, setCategorias] = useState([])
    const [directores, setDirectores] = useState([])
    const [idCategoria, setIdCategoria] = useState('')
    const [idDirector, setIdDirector] = useState('')
    let { id } = useParams();

    useEffect(()=>{
         client({
            method: 'GET',
            path: '/api/categorias'
        }).done(response=>{
            setCategorias(response.entity._embedded.categorias)
        })
         client({
            method: 'GET',
            path: '/api/directores'
        }).done(response=>{
            setDirectores(response.entity._embedded.directores)
        })
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/peliculas',
            entity: {
                nombre: pelicula.nombre,
                anio: pelicula.anio,
                categoria: 'http://localhost:8080/api/categorias/'+idCategoria,
                director: 'http://localhost:8080/api/directores/'+idDirector,
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Agregar Pelicula</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={pelicula.nombre} onChange={(e)=>setPelicula({...pelicula, nombre: e.target.value})} /> <br/>

               <label>Año</label>
                <input type="text" id="anio" name="anio" value={pelicula.anio} onChange={(e)=>setPelicula({...pelicula, anio: e.target.value})} /> <br/>


                <label htmlFor='cliente'>Categoria </label>
                <select required={true} name="categoria" id="categoria" onChange={(e)=>{setIdCategoria(e.target.value)}}>
                    <option value="">Selecciona una categoria</option>
                    {
                        categorias?categorias.map(categoria => {
                        const value = categoria._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>{categoria.nombre}</option>
                        )
                    }): null}
                </select><br />

                <label htmlFor='director'>Director </label>
                <select required={true} name="director" id="director" onChange={(e)=>{setIdDirector(e.target.value)}}>
                    <option value="">Selecciona un director</option>
                    {
                        directores?directores.map(director => {
                        const value = director._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>{director.nombre}</option>
                        )
                    }): null}
                </select><br />

                <input type="submit" value="Nueva Pelicula" />
            </form>

        </>
    )
}

module.exports = AgregarPeliculaPage