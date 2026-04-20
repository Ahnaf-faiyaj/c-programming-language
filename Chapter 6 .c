//  Pointers

#include<stdio.h>
// call_by_value
// int sum (int a, int b);


    // call_by_reference

void wrong_swap(int a, int b);
void swap(int *a, int *b);
int main(){
    
    // int i = 34;
    // int *j = &i; // j will now store the address of i
    // printf("The value of i is %d\n", i);
    // printf("The value of i is %d\n", *j);
    // printf("The address of i is %u\n", &i);
    // printf("The address of i is %u\n", j);
    // printf("The address of j is %u\n", &j);
    // printf("The value of j is %u\n", *(&j));

    // call_by_value

    //  int x=4, y=7;
    // printf("The value of x and y is %d and %d\n", x, y);
    // printf("The value of 4+7 is %d\n", sum(x, y));
    // printf("The value of x and y after function call is %d and %d\n", x, y);

    // call_by_reference

     int x=3, y=4;
    printf("The value of x and y before swap is %d and %d\n", x, y);
    //wrong_swap(x, y); // will not work due to call by value
    swap(&x, &y); // will work due to call by reference
    printf("The value of x and y after swap is %d and %d\n", x, y);

    return 0;
}
// call_by_value
// int sum (int a, int b){
//     int c;
//     c = a + b;
//     b =3434;
//     a = 23432;  
//     return c;
// }

// call_by_reference



void wrong_swap(int a, int b){
    int temp;
    temp = a;
    a = b;
    b = temp;
}

void swap(int *a, int *b){
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}