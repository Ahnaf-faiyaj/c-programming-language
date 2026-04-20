//  Functions & Recursions

// #include<stdio.h>
// void display(); // Function prototype

// void goodMorning();
// void goodAfternoon();
// void goodNight();

// int main(){
    // int a;
    // printf("Initializing display function\n");
    // display(); // Function Call
    // printf("Display function finished its work\n");

    // goodMorning();
    // goodAfternoon();
    // goodNight();
//     return 0;
// }

// void display(){
//     printf("This is display\n"); 
// }

// void goodMorning(){
//     printf("Good Morning Harry\n");
// }

// void goodAfternoon(){
//     printf("Good Afternoon Harry\n");
// }

// void goodNight(){
//     printf("Good Night Harry\n");
// }

// #include<stdio.h>
// // sum is a function which takes a and b as input and returns an integer as an output
// int sum(int a, int b); // function prototype declaration
// int main(){
//      int c;
//     c = sum(2, 15); // function call
//     printf("The value of c is %d\n", c);
//     return 0;
// }

// int sum (int a, int b){
//     int c;
//     c = a + b;
//     return c;
// }

// #include<stdio.h>
// void change(int a);

// int main(){
//     int b = 344;
//     printf("The value of b before change is %d\n", b);
//     change(b);
//     printf("The value of b after change is %d\n", b);
//     return 0;
// }

// void change(int b){
//     b = 77;
// }

// #include<stdio.h>
// #include<math.h>

// int main(){
//      int side;
//     printf("Enter the value of side\n");
//     scanf("%d", &side);
//     printf("The value of area is %f", pow(side,2));

//     return 0;
// }

#include<stdio.h>
int factorial(int x);

int main(){
    int a = 5;
    printf("The value of factorial %d is %d", a, factorial(a));
    return 0;
}

int factorial(int x){
    printf("Calling factorial(%d)\n", x);
    if (x==1 || x==0){
        return 1;
    }
    else{
        return x * factorial(x-1);
    }
}
