package com.idat.practicafinal.practicafinal;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "peliculaConEntidadesRel", types = { Pelicula.class })
public interface PeliculaProjection {
    Long getId();
    String getNombre();
    Director getDirector();
    Categoria getCategoria();
}
