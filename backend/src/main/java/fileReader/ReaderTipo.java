package fileReader;

import backend.entities.chocolates.TipoChocolate.TipoChocolate;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

public class ReaderTipo extends CSVFileReader<TipoChocolate> {
    /**
     * @param filePath the absolute path of the file to be read.
     */
    public ReaderTipo(String filePath) {
        super(filePath);
    }

    @Override
    protected TipoChocolate parseLine(String[] line) {
        try {
            TipoChocolate tipoChocolate = (TipoChocolate) Class.forName(line[2].trim()).newInstance();
            return tipoChocolate;
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
