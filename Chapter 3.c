// Conditional Instructions

#include <stdio.h>

int main()
{
    // int a, b;
    // printf("Enter a number \n");
    // scanf("%d", &a);

    // if (a % 2 == 0)
    // {
    //     printf("%d is even\n", a);
    // }
    // else{
    //     printf("%d is odd\n", a);

    // }

    // int age;
    //     printf("Enter your age \n");
    //     scanf("%d",&age);
    //     if (age>=90)
    //     {
    //        printf("You are above 90, you cannot drive");
    //     }
    //     else{
    //         printf("you can drive\n");
    //     }

    //     if (age==50)
    //     {
    //         printf("Half Century\n");
    //     }

    // int age;
    // int vipPass =0;
    // vipPass = 1;
    // printf("Enter your age \n");
    // scanf("%d", &age);
    // if ((age <= 70 && age >= 18) || vipPass == 1)
    // {
    //     printf("You are above 18 and below 70, you can drive");
    // }
    // else{
    //     printf("You can drive");
    // }

    // int num;

    // printf("Enter your number\n");
    // scanf("%d", &num);

    // if (num == 1)
    // {
    //     printf("Your number is 1\n");
    // }
    // else if (num == 2)
    // {
    //     printf("Your number is 2\n");
    // }
    // else if (num == 3)
    // {
    //     printf("Your number is 3\n");
    // }
    // else
    // {
    //     printf("Its not 1, 2 or 3!\n");
    // }

    // int a;
    // printf("Enter a\n");
    // scanf("%d",&a);
    // (a < 5) ? printf("A is less than 5") : printf("A is not less than 5");

    int rating;

    printf("Enter your rating (1-5)\n");
    scanf("%d", &rating);
    switch (rating)
    {
    case 1:
        printf("Your rating is 1\n");
        break;
    case 2:
        printf("Your rating is 2\n");
        break;
    case 3:
        printf("Your rating is 3\n");
        break;
    case 4:
        printf("Your rating is 4\n");
        break;
    case 5:
        printf("Your rating is 5\n");
        break;
    default:
        printf("Invalid rating!\n");
        break;
    }

    return 0;
}