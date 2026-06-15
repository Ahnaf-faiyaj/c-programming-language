// Loop Control Instructions

#include <stdio.h>

int main()
{
    // int a = 34;
    // scanf("%d",&a);
    // while (a<=10)
    // {
    //     printf("%d\n",a);
    //     a++;
    // }
    // int i = 5;
    // printf("The value after i++ is %d\n", ++i);
    // i++; // ---> Pehle print fir increment
    // ++i; // ---> Pehle increment fir print kare
    // printf("The value of i is %d\n", i);

    // i+=10; //--> Increments i by 10
    // printf("The value of i is %d\n", i);

    // int i = 0;

    // do
    // {
    //     printf("THe value of i is %d\n");
    //     i++;
    // } while (i < 10);

    // int i=0;
    // int n;
    // printf("Enter the value of n\n");
    // scanf("%d", &n);

    // do{
    //     printf("The number is %d \n", i+1);
    //     i++;
    // }while(i<n);

    // for(int a = 0; a<10; a++){
    //          printf("The value of a is %d \n", a+1);
    // }

    // int n;
    // printf("Enter the value of n \n");
    // scanf("%d", &n);

    // for(int i=n; i ; i--){
    //     printf("The value of i is %d\n", i);
    // }
    // int i=0;
    // do
    // {
    //     printf("The value of i is %d\n", i);
    //     if(i==4){
    //         break;
    //     }
    //     i++;
    // } while (i<10);
     int skip=5, i=0;
    while(i<10){
        i++;
        if(i!=skip){
            continue;
        }
        else{
            printf("%d\n", i);
        }

    
    

        return 0;
}
}