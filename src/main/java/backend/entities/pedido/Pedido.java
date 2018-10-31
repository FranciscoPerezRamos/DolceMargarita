package backend.entities.pedido;

import backend.entities.chocolates.Chocolate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "Pedido_id")
    private int id;

    @OneToMany(cascade = {CascadeType.ALL})
    private List<Chocolate> chocolates;

    @Column
    private Integer dniClientePedido;

    public Pedido(Cliente cliente){
        this.chocolates = new ArrayList<>();
        this.dniClientePedido = cliente.getDni();
    }

    public void agregarChocolate(Chocolate choco1) {
        this.chocolates.add(choco1);
    }

    public List<Chocolate> getChocolates(){
        return this.chocolates;
    }

    public double getPrecio() {
        return chocolates.stream().mapToDouble(Chocolate::precio).sum();
    }

    public Integer getId() {
        return id;
    }

    public void quitarChocolate(Chocolate c) {
        chocolates.remove(c);
    }

    public Integer getCantidadChocolates() {
        return this.getChocolates().size();
    }

    public Integer getDNICliente(){
        return this.dniClientePedido;
    }
}
