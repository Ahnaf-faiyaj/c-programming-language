//  1 practice
// #include<stdio.h>
// float average(int a,int b, int c);
// int main(){
//     int a, b, c;
//     printf("Enter the value of a\n");
//     scanf("%d", &a);
//     printf("Enter the value of b\n");
//     scanf("%d", &b);
//     printf("Enter the value of c\n");
//     scanf("%d", &c);
//     printf("The value of average is %f", average(a, b, c));
//     return 0;
// }

// float average(int a, int b, int c){
//     float result;
//     result = (float)(a + b + c)/3;
//     return result;
// }

//  3 practice

// #include<stdio.h>
// float force(float mass);
// int main(){
//     float m;
//     printf("Enter the value of mass in kgs\n");
//     scanf("%f", &m);
//     printf("The value of force in Newton is %.2f\n", force(m)); 
//     return 0;
// }

// float force(float mass){
//     float result = mass * 9.8;
//     return result;
// }

// 5 practice

// #include<stdio.h>

// int main(){
//     int a =5;
//     printf("%d %d %d", a, ++a, a++);
//     return 0;
// }

// 7 practice

#include<stdio.h>
void printPattern(int n);
int main(){
    int n =10;
    printPattern(n);
    return 0;
}
// for n = 3
// *
// ***
// *****
// 1 - 1
// 2 - 3
// 3 - 5
// (2n-1)
void printPattern(int n){
    if (n==1){
        printf("*\n");
        return;
    }
    printPattern(n-1);
    for(int i=0;i<(2*n-1);i++){
        printf("*");
    }
    printf("\n");
}
