package com.idat.practicafinal.practicafinal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Pelicula {

    @Id
    @GeneratedValue
    private  Long id;

    private String nombre;

    private Integer anio;

    @ManyToOne()
    @JoinColumn(name = "id_director")
    private Director director;

    @ManyToOne()
    @JoinColumn(name = "id_categoria")
    private Categoria categoria;

    public Pelicula(String nombre, Integer anio, Director director, Categoria categoria) {
        this.nombre = nombre;
        this.anio = anio;
        this.director = director;
        this.categoria = categoria;
    }

    public Pelicula() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getAnio() {
        return anio;
    }

    public void setAnio(Integer anio) {
        this.anio = anio;
    }

    public Director getDirector() {
        return director;
    }

    public void setDirector(Director director) {
        this.director = director;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
