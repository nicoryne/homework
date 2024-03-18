public class Nickname<T extends Number> implements Firstname<T> {
    T hourlyRate;

    public Nickname() {
    }

    public Double computeSalary() {
        return (Double)this.hourlyRate * 8.0;
    }

    public void setValue(T value) {
        this.hourlyRate = value;
    }
}