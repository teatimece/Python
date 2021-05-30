import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Sales {

    public void sales(String sales) {
        String result = "[";
        String result2 = "[";
        try{
            Scanner scan = new Scanner(new FileInputStream(sales));
            int i = 0;
            while(scan.hasNextLine()){
                if(i == 0) scan.nextLine();
                String str = scan.nextLine();
                str.replace("\"", "");
                String[] strArr = str.split(" ");
                if(i == 0) {
                    result += strArr[1];
                    result2 += strArr[2];
                }else {
                    result += "," + strArr[1];
                    result2 += "," + strArr[2];
                }
                i++;
            }
            result += "]";
            result2 += "]";
        }catch (FileNotFoundException e) {
            System.out.println("파일없음");
        }
        System.out.println(result);
        System.out.println(result2);
    }
}
