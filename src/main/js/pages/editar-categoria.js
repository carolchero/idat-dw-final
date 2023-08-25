const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarCategoriaPage = ()=>{

    const [categoria, setCategoria] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/categorias/'+id
        }).done((response)=>setCategoria(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/categorias/'+id,
            entity: categoria,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Categoria</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={categoria.nombre} onChange={(e)=>setCategoria({...categoria, nombre: e.target.value})} /> <br/>

                <input type="submit" value="Editar Categoria" />
            </form>

        </>
    )
}

module.exports = EditarCategoriaPage