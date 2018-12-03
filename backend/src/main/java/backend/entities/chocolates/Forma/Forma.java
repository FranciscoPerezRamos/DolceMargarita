package backend.entities.chocolates.Forma;

import javax.persistence.*;

@Entity
public abstract class Forma {

    @Id
    @Column(name = "FORMA_ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String img;
    private Integer price;

    public Forma(){}

    public Integer getId(){ return this.id;}

    public void addImg(String img) { this.img = img; }

    public String getImg() { return this.img; }

    public void addPrice(Integer price) { this.price = price; }

    public Integer getPrice() { return this.price; }

}
