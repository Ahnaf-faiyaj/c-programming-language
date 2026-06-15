// 1 peactice

// #include<stdio.h>

// struct vector{
//     int x;
//     int y;
// };

// int main(){
//     struct vector v1, v2;
//     v1.x = 34;
//     v1.y = 54;
//     printf("X dim is %d and Y dim is %d\n", v1.x, v1.y);

//     v2.x = 3345;
//     v2.y = 534;
//     printf("X dim is %d and Y dim is %d\n", v2.x, v2.y);
//     return 0;
// }

// 2 practice

// #include<stdio.h>

// struct vector{
//     int x;
//     int y;
// };

// struct vector sumVector(struct vector v1, struct vector v2){
//     struct vector result;
//     result.x = v1.x + v2.x;
//     result.y = v1.y + v2.y;
//     return result;
// }
// int main(){
//     struct vector v1, v2, sum;
//     v1.x = 4;
//     v1.y = 9;
//     printf("X dim is %d and Y dim is %d\n", v1.x, v1.y);

//     v2.x = 5;
//     v2.y = 4;
//     printf("X dim is %d and Y dim is %d\n", v2.x, v2.y);

//     sum = sumVector(v1, v2);
//     printf("X dim of result is %d and Y dim is %d\n", sum.x, sum.y);
//     return 0;
// }

// 6 practice

// #include<stdio.h>

// typedef struct complex{
//     int real;
//     int complex;
// }comp;

// void display(comp c){
//     printf("The value of real part is %d\n", c.real);
//     printf("The value of Imaginary part is %d\n", c.complex);
// }

// int main(){
//     comp cnums[5];
//     for(int i=0; i<5; i++){
//         printf("Enter the real value for %d num\n", i+1);
//         scanf("%d", &cnums[i].real);

//         printf("Enter the complex value for %d num\n", i+1);
//         scanf("%d", &cnums[i].complex);
//     }
//     for(int i=0; i<5; i++){
//         display(cnums[i]);
//     }
//     return 0;
// }

// 9 practice

#include<stdio.h>

typedef struct date{
    int date;
    int month;
    int year;
}date;

void display(date d){
    printf("The date is: %d/%d/%d\n", d.date, d.month, d.year);
}

int dateCmp(date d1, date d2){
    // Make decision on the basis of Year comparison
    if(d1.year>d2.year){
        return 1;
    }
    if(d1.year<d2.year){
        return -1;
    }

    // Make decision on the basis of Month comparison
    if(d1.month>d2.month){
        return 1;
    }
    if(d1.month<d2.month) {
        return -1;
    }

    // Make decision on the basis of Date comparison
    if(d1.date>d2.date){
        return 1;
    }
    if(d1.date<d2.date) {
        return -1;
    }
    return 0;
}
int main(){
    date d1 = {5, 11, 30};
    date d2 = {5, 12, 31};
    display(d1);
    display(d2);
    int a = dateCmp(d1, d2);
    printf("Date Comparison function returns: %d", a);

    return 0;
}
