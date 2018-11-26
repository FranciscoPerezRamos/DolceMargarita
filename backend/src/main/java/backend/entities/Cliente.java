package backend.entities;


import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Cliente {

    @Id
    @Column(name = "Cliente_DNI")
    private Integer dni;

    @Column
    private String email;

    @Column
    private String direccion;

    @Column
    private Integer telefono;

    @Column
    private String nombreYApellido;

    public Cliente(){}

    public Cliente(Integer unDni, String unNombreYapellido, Integer unTelefono, String unaDireccion, String unEmail) {
        this.dni = unDni;
        this.nombreYApellido = unNombreYapellido;
        this.telefono = unTelefono;
        this.direccion = unaDireccion;
        this.email = unEmail;
    }

    public String getNombreYApellido(){return this.nombreYApellido;}

    public Integer getTelefono(){return this.telefono;}

    public String getDireccion(){return this.direccion;}

    public String getEmail(){return this.email;}

    public Integer getDni(){return this.dni;}
}

