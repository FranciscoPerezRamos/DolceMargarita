package backend.entities.pedido;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

public class Cliente {

    private Integer dni;
    private String email;
    private String direccion;
    private Integer telefono;
    private String nombreYApellido;

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
