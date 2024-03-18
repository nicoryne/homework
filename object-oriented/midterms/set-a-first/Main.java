import java.text.DecimalFormat;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Nickname<Number> initials = new Nickname<>();
        boolean isValid = false;

        do {
            try {
                System.out.print("Enter hourly rate: ");
                Number rate = sc.nextDouble();
                if (rate.doubleValue() < 50.0) {
                    System.out.println("Unacceptable amount! Hourly rate should be 50.0 pesos or above");
                } else {
                    initials.setValue(rate);
                    isValid = true;
                }
            } catch (InputMismatchException var6) {
                System.out.println("Invalid input!");
                sc.next();
            }
        } while(!isValid);

        sc.close();
        System.out.println("Daily salary is " + (new DecimalFormat("#,##0.00")).format(initials.computeSalary()));
    }
}