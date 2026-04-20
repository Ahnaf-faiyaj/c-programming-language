#include <stdio.h>

int main()
{

    //  1 practice
    // int a = 10;

    // if (a = 11){
    //     printf("I am 11");
    // }
    // else{
    //     printf("I am not 11");
    // }

    //  2 practice
    // int physics, chemistry, maths;
    // float total;
    // printf("Enter Physics Marks\n");
    // scanf("%d", &physics);

    // printf("Enter Chemistry Marks\n");
    // scanf("%d", &chemistry);

    // printf("Enter Maths Marks\n");
    // scanf("%d", &maths);

    // total = (physics + maths + chemistry) / 3;

    // if ((total < 40) || physics < 33 || maths < 33 || chemistry < 33)
    // {
    //     printf("Your total percentage is %f and you are fail\n", total);
    // }
    // else
    // {
    //     printf("Your total percentage is %f and you are pass\n", total);
    // }
    //  3 practice

   float tax = 0, income;
    printf("Enter your income\n");
    scanf("%f", &income);

    if(income>=250000 && income<=500000){
        tax = tax + 0.05 * (income - 250000);
    }
    
    if (income >= 500000 && income <= 1000000)
    {
        tax = tax + 0.20 * (income - 500000);
    }

    if (income >= 1000000)
    {
        tax = tax + 0.30 * (income - 1000000);
    }
    
    printf("Your net income tax to be paid by 26th of this month is %f\n", tax);
    
    return 0;
}