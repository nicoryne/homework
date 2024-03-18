import java.text.DecimalFormat;
import java.util.InputMismatchException;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        FirstName<Number> NickName = new FirstName<>();
        Number cash = 0.0;

        do {
            try {
                System.out.print("Enter cash: ");
                cash = sc.nextDouble();

                if(cash.doubleValue() > 0.0) {
                    NickName.setValue(cash);
                }

            } catch (InputMismatchException e) {
                System.out.println("Invalid input!");
                sc.next();
            }
        } while(cash.intValue() != 0);

        sc.close();
        NickName.display();
    }
}