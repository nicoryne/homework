public class NickName<T extends Number> implements FirstName<T> {
    T hourlyRate;

    public Double computeSalary() {
        return hourlyRate.doubleValue() * 8.0;
    }

    @Override
    public void setValue(T value) {
        this.hourlyRate = value;
    }
}
