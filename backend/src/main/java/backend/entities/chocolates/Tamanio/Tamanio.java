package backend.entities.chocolates.Tamanio;

import javax.persistence.*;

@Entity
public abstract class Tamanio {

    @Id
    @Column(name = "TAMANIO_ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private Integer price;

    public Tamanio(){}

    public Integer getId(){ return this.id;}


    public void addPrice(Integer price) { this.price = price; }

    public Integer getPrice() { return this.price; }
}
