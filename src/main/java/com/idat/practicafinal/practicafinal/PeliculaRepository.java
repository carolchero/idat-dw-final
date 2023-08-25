package com.idat.practicafinal.practicafinal;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "peliculas", path = "peliculas",
        excerptProjection = PeliculaProjection.class)
public interface PeliculaRepository extends CrudRepository<Pelicula, Long> {

}
