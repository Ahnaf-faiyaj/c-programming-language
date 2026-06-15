//  1 practice
// #include<stdio.h>

// int main(){
//     int a = 6;
//     int *ptr;
//     ptr = &a;
//     printf("The value of variable a is %d\n", a);
//     printf("The address of variable a is %u\n", ptr);
//     printf("The value of variable a is %d\n", *ptr);
//     return 0;
// }

// 2 practice

// #include<stdio.h>

// void printAdd(int a){
//     printf("The address of variable a is %u\n", &a);
// }

// int main(){
//     int i = 4;
//     printf("The value of variable i is %d\n", i);
//     printAdd(i);
//     printf("The address of variable i is %u\n", &i);
//     return 0;
// }

// 4 practice

// #include<stdio.h>

// void sumAndAvg(int a, int b, int *sum, float *avg){
//     *sum = a +b;
//     *avg = (float)(*sum)/2;
// }

// int main(){
//     int i, j, sum;
//     float avg;
//     i = 3;
//     j = 6;
//     sumAndAvg(i, j, &sum, &avg);
//     printf("The value of sum is %d \n", sum);
//     printf("The value of avg is %f \n", avg);
    
//     return 0;
// }

// 5 practice

#include<stdio.h>

int main(){
    int i = 345;
    int *ptr;
    int **ptr_ptr;

    ptr = &i;
    ptr_ptr= &ptr;

    printf("The value of i is %d", **ptr_ptr);
    return 0;
}