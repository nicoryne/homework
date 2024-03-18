
public class Nickname<T extends Number> implements Firstname<T> {
    T hourlyRate;

    public Double computeSalary() {
        return (Double) hourlyRate * 8.0;
    }

    @Override
    public void setValue(T value) {
        this.hourlyRate = value;
    }
}