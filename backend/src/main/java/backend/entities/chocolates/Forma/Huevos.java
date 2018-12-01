package backend.entities.chocolates.Forma;

import backend.entities.chocolates.Tamanio.Tamanio;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity(name = "Huevos")
public class Huevos extends Forma{

    @ManyToOne(cascade = {CascadeType.ALL})
    private Tamanio tamanio;

    public Huevos(){}

    public Huevos(Tamanio t) {
        this.tamanio = t;
    }

    public Tamanio getTamanio() { return this.tamanio; }
}
