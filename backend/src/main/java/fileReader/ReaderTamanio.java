package fileReader;

import backend.entities.chocolates.Forma.Forma;
import backend.entities.chocolates.Tamanio.Tamanio;

public class ReaderTamanio extends CSVFileReader<Tamanio> {
    /**
     * @param filePath the absolute path of the file to be read.
     */
    public ReaderTamanio(String filePath) {
        super(filePath);
    }

    @Override
    protected Tamanio parseLine(String[] line) {
        try {
            Tamanio tamanio = (Tamanio) Class.forName(line[2].trim()).newInstance();
            tamanio.addPrice(Integer.valueOf(line[3]));
            return tamanio;
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }
}
