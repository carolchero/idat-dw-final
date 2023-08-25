const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');


const VerCategoriaPage = () => {

    let { id } = useParams();
    const [categoria, setCategoria] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/categorias/' + id
        }).done(response=>setCategoria(response.entity))
    }, [])



    return (
        <>
            <h1>Ver Categoría</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{categoria.nombre}</td>
                </tr>

            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerCategoriaPage;