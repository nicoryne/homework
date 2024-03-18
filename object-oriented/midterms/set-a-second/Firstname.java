import java.text.DecimalFormat;
import java.util.ArrayList;

public class Firstname<T extends Number> {

    ArrayList<T> cashArrayList = new ArrayList<>();

    public void setValue(T cash) {
        cashArrayList.add(cash);
    }

    public void print() {
        double total = 0.0;
        DecimalFormat df = new DecimalFormat("#,##0.00");
        System.out.print("The cash in the list are : ");
        for(T cash : cashArrayList) {
            total += (Double) cash;
            System.out.print(df.format(cash) + " ");
        }

        System.out.println("\nThe total cash amount is " + df.format(total) + " pesos");
    }

}
