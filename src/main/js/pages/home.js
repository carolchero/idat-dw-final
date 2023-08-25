const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {peliculas: [], categorias: [], directores: []};
    }

    componentDidMount() {

        client({ method: 'GET', path: '/api/peliculas' }).done(response => {
            this.setState({ peliculas: response.entity._embedded.peliculas });
        });

        client({ method: 'GET', path: '/api/categorias' }).done(response => {
            this.setState({ categorias: response.entity._embedded.categorias });
        });
    }

    render() {
        return (
            <>
                <h1>Examen final App</h1>

                <div style={  {"width": "100%", "display": "flex"}   }>
                    <div style={{"width": "calc(100% / 3)"}}>
                        <Titulo entidad="Peliculas" />
                        <PeliculaList peliculas={this.state.peliculas} />
                        <Link to="/nueva-pelicula">Nueva Película</Link>
                    </div>

                    <div style={{"width": "calc(100% / 3)"}}>
                        <Titulo entidad="Categorias"  />
                        <CategoriaList categorias={this.state.categorias} />
                        <Link to="/nueva-categoria">Nueva categorias</Link>
                    </div>
                </div>
            </>
        )
    }
}

const Titulo = (props) => {
    return (
        <>
            <hr />
            <h2>{props.entidad}</h2>
            <hr />
            Lista completa de {props.entidad.toLowerCase()}
        </>
    )
}

class CategoriaList extends React.Component {
    render() {
        const categorias = this.props.categorias? (this.props.categorias.map(categoria =>
            <Categoria key={categoria._links.self.href} categoria={categoria} />
        )): [];
        return (
            <table border="1">
                <tbody>
                <tr>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
                {categorias}
                </tbody>
            </table>
        )
    }
}

class Categoria extends React.Component {
    render() {
        const id = this.props.categoria._links.self.href.split("/").slice(-1)

        return (
            <tr>
                <td>{this.props.categoria.nombre}</td>
                <td>
                    <Link to={"/editar-categoria/" + id}>Editar</Link>
                </td>
            </tr>
        )
    }
}
class PeliculaList extends React.Component {
    render() {
        const peliculas = this.props.peliculas?(this.props.peliculas.map(pelicula =>
            <Pelicula key={pelicula._links.self.href} pelicula={pelicula} />
        )): null;
        return (
            <table border="1">
                <tbody>
                <tr>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Director</th>
                </tr>
                {peliculas}
                </tbody>
            </table>
        )
    }
}

class Pelicula extends React.Component {
    render() {
        const id = this.props.pelicula._links.self.href.split("/").slice(-1)
        return (
            <tr>
                <td>{this.props.pelicula.nombre}</td>
                <td>{this.props.pelicula.categoria.nombre}</td>
                <td>{this.props.pelicula.director.nombre} {this.props.pelicula.director.apellidos}</td>

            </tr>
        )
    }
}

module.exports = HomePage;