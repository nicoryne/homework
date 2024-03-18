import java.util.InputMismatchException;
import java.util.Scanner;

public class LastnameList {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Firstname<Number> nickname = new Firstname<>();
        Number cash = 0.0;
        boolean isValid = false;
        do {
            try {
                System.out.print("Enter cash: ");
                cash = sc.nextDouble();
                nickname.setValue(cash);
                isValid = true;

                if(cash.doubleValue() == 0.0) {
                    isValid = false;
                }

            } catch (InputMismatchException e) {
                System.out.println("Invalid input!");
                sc.next();
            }
        } while (isValid);

        sc.close();
        nickname.print();
    }
}