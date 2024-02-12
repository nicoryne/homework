import java.util.InputMismatchException;
import java.util.Scanner;

class BankAccount {

    private double balance;

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}

class SavingsAccount extends BankAccount {

};

class DepositAccount extends BankAccount {};

public class Main {
    public static void main(String[] args) {
        BankAccount bankAccount = new BankAccount();
        SavingsAccount savingsAccount = new SavingsAccount();
        DepositAccount depositAccount = new DepositAccount();
        int op = 0;

        Scanner sc = new Scanner(System.in);
        do {
            System.out.println("\t1 - Deposit");
            System.out.println("\t2 - Withdraw");
            System.out.println("\t3 - Balance  Inquiry");
            System.out.println("\t4 - Exit");

            op = sc.nextInt();
            switch(op) {
                case 1: //  Deposit
                    System.out.println("Enter amount to deposit: ");
                    double depositAmount;

                    try {
                        depositAmount = sc.nextDouble();
                    } catch (InputMismatchException e) {
                        throw new InputMismatchException("Please input a valid number!");
                    }

                    if(depositAmount < 500) {
                        System.out.println("A minimal amount of Php500 is needed to deposit");
                    } else {
                        depositAccount.setBalance(bankAccount.getBalance() + depositAmount);
                        bankAccount.setBalance(depositAccount.getBalance());
                        System.out.println();
                    }

                    break;
                case 2: //  Withdraw
                    System.out.println("Enter amount to withdraw: ");
                    double withdrawAmount;

                    try {
                        withdrawAmount = sc.nextDouble();
                    } catch (InputMismatchException e) {
                        throw new InputMismatchException("Please input a valid number!");
                    }

                    if (withdrawAmount > bankAccount.getBalance()) {
                        System.out.println("Insufficient funds");
                        break;
                    }

                    if(withdrawAmount % 500 != 0) {
                        System.out.println("Withdraw amount must be divisible by 500");
                    } else {
                        savingsAccount.setBalance(bankAccount.getBalance() - withdrawAmount);
                        bankAccount.setBalance(savingsAccount.getBalance());
                        System.out.println("Withdraw successful!");
                    }

                    break;
                case 3: //  Balance Inquiry
                    System.out.println("CURRENT BALANCE: " + bankAccount.getBalance());
                    break;
                case 4: //  Exit
                    System.out.println("Bye bye!");
                    break;
                default:
                    System.out.println("Invalid option!");
                    break;
            }
        } while(op != 4);
        sc.close();
    }
}