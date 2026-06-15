//  2 practice
#include<stdio.h>


int main(){
    //  printf("****Multiplication table of 10****\n\n");
    // for(int i=10;i;i--){
    //     printf("10 X %d = %d\n", i, 10*i);
    // }   
//  5 practice
    
//  int i=1, sum=0, n=10;

//     // for(i=1; i<=n; i++){
//     //     sum +=i;
//     // }
//     while( i<=n){
//         sum +=i;
//         i++; 
//     }
//     printf("The value of sum(1 to 10) is %d", sum);

//  8 practice
    // factorial(4) - 1 * 2 * 3 * 4 
    // factorial(6) - 1 * 2 * 3 * 4 * 5 * 6
    // int i=0, n=7, factorial=1;
    // for(i=1;i<=n;i++){
    //     factorial *=i;
    // }
    // printf("The value of factorial %d is %d", n, factorial);
//  10 practice
        // Prime Numbers = A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers. 
    // Disclaimer: This is not the best method to solve this problem
    int n = 2, prime=1;
    for(int i=2;i<n;i++){
        if (n%i==0 ){
            prime = 0;
            break;
        }
    }
    if (prime==0){
        printf("This is not a prime number");
    }
    else{
        printf("This is a prime number");
    }

     
    return 0;
}