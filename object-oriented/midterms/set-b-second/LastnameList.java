import java.util.InputMismatchException;
import java.util.Scanner;

public class LastnameList {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Firstname<Number> nickname = new Firstname<>();
        Number cash;
        boolean isValid = false;
        do {
            try {
                System.out.print("Enter cash: ");
                cash = sc.nextDouble();
                isValid = true;
                nickname.setValue(cash);
            } catch (InputMismatchException e) {
                System.out.println("Invalid input!");
                sc.next();
            }
        } while (!isValid);

        sc.close();
        nickname.print();
    }
}