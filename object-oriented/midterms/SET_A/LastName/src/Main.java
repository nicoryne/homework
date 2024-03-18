import java.text.DecimalFormat;
import java.util.InputMismatchException;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        NickName<Number> INITIALS = new NickName<>();
        Number rate = 0.0;

        do {
            try {
                System.out.print("Enter hourly rate: ");
                rate = sc.nextDouble();

                if(rate.doubleValue() < 50.0) {
                    System.out.println("Unacceptable amount! Hourly rate should be 50.0 pesos or above");
                } else {
                    INITIALS.setValue(rate);
                }

            } catch (InputMismatchException e) {
                System.out.println("Invalid input!");
                sc.next();
            }
        } while(rate.doubleValue() < 50.0);

        sc.close();
        System.out.println("Daily salary is " + (new DecimalFormat("#,##0.00")).format(INITIALS.computeSalary()));
    }
}