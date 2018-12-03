package backend.entities.chocolates.TipoChocolate;

import javax.persistence.*;

@Entity
public abstract class TipoChocolate {

    @Id
    @Column(name = "TIPO_CHOCOLATE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public TipoChocolate() {
    }

    public Integer getId() {
        return this.id;
    }

}
