package server.frontClasses;

public class FormaFront {

    public Integer price;
    public String nombre;
    public String img;

    public FormaFront(String nombre, String img, Integer price) {
        this.nombre = nombre;
        this.img = img;
        this.price = price;
    }
}
