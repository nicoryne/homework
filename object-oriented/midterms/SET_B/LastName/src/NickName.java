public class NickName<T extends Number> implements FirstName<T> {
    T grade;

    public String processGrade() {
        if(this.grade.doubleValue() >= 3.00 && this.grade.doubleValue() <= 5.00) {
            return "PASSED!";
        }
        return "FAILED!";
    }

    @Override
    public void setGrade(T grade) {
        this.grade = grade;
    }
}
