import java.text.DecimalFormat;
import java.util.ArrayList;

public class FirstName<T extends Number> {
    ArrayList<T> cashArrayList = new ArrayList<>();

    public void setValue(T value) {
        cashArrayList.add(value);
    }

    public void display() {
        DecimalFormat df = new DecimalFormat("#,##0.00");
        Double total = 0.0;

        System.out.print("The cash in the list are : ");
        for(T cash : cashArrayList) {
            System.out.print(df.format(cash) + " ");
            total += cash.doubleValue();
        }

        System.out.println("\nThe total cash amount is " + df.format(total) + " pesos.");
    }
}
