import java.text.DecimalFormat;
import java.util.InputMismatchException;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        NickName<Number> INITIALS = new NickName<>();
        Number grade = 0.0;

        do {
            try {
                System.out.print("Enter grade: ");
                grade = sc.nextDouble();

                if(grade.doubleValue() < 1.00 || grade.doubleValue() > 5.00) {
                    System.out.println("Invalid grade!");
                } else {
                    INITIALS.setGrade(grade);
                }

            } catch (InputMismatchException e) {
                System.out.println("Unacceptable grade!");
                sc.next();
            }
        } while(grade.doubleValue() < 1.00 || grade.doubleValue() > 5.00);

        sc.close();
        System.out.println("The grade is " + (new DecimalFormat("0.00")).format(grade) + " which is " + INITIALS.processGrade());
    }
}