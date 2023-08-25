package com.idat.practicafinal.practicafinal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final CategoriaRepository categoriaRepository;
    private final DirectorRepository directorRepository;
    private final PeliculaRepository peliculaRepository;


    @Autowired
    public DatabaseLoader(
            CategoriaRepository categoriaRepository,
            DirectorRepository directorRepository,
            PeliculaRepository peliculaRepository
    ) {
        this.categoriaRepository = categoriaRepository;
        this.directorRepository = directorRepository;
        this.peliculaRepository = peliculaRepository;
    }

    @Override
    public void run(String... strings) throws Exception {

        Categoria cTerror = new Categoria("Terror");
        Categoria cComedia = new Categoria("Comedia");

        this.categoriaRepository.save(cTerror);
        this.categoriaRepository.save(cComedia);
        this.categoriaRepository.save(new Categoria("Suspenso"));


        Director cDirectorWilliam = new Director("William", "Friedkin");
        Director cDirectorChuck = new Director("Chuck", "Russell");

        this.directorRepository.save(cDirectorChuck);
        this.directorRepository.save(cDirectorWilliam);
        this.directorRepository.save(new Director("Joseph Hill", "Whedon"));

        Pelicula pLaMascara = new Pelicula("La Máscara", 1994, cDirectorWilliam, cComedia);
        Pelicula pElExorcista = new Pelicula("El Exorcista", 1973, cDirectorChuck, cTerror);

        this.peliculaRepository.save(pLaMascara);
        this.peliculaRepository.save(pElExorcista);
    }


}
