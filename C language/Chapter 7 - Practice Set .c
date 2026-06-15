// 1 practice

// #include<stdio.h>

// int main(){
//     int arr[10];
//     // int *ptr = &arr[0];
//     int *ptr = arr;
//     ptr = ptr+2;
//     if(ptr==&arr[2]){
//         printf("These point to the same location in memory\n");
//     }
//     else{
//         printf("These do not point to the same location in memory\n");
//     }

//     return 0;
// }

// 3 practice

// #include<stdio.h>

// int main(){
//     int mul[10];
//     for(int i=0; i<10; i++){
//         mul[i] = 5*(i+1);
//     }

//     for(int i=0; i<10; i++){
//         printf("5X%d = %d\n", i+1, mul[i]);
//     }
//     return 0;
// }

// 5 practice

// #include<stdio.h>
// void reverse(int *arr, int n){
//     int temp;
//     for(int i=0; i<(n/2); i++){
//         temp = arr[i];
//         arr[i] = arr[n-i-1];
//         arr[n-i-1] = temp;
//     }
// }

// int main(){
//     int arr[] = {1,2,3,4,5,6,7};
//     reverse(arr, 7);
//     for(int i=0; i<7; i++){
//          printf("The value of %d element is: %d\n", i, arr[i]);
//     }
//     return 0;
// }


// 7 practice

#include<stdio.h>
void printTable(int *mulTable, int num, int n){
    printf("The multiplication table of %d is :\n", num);
    for(int i=0; i<n; i++){
        mulTable[i] = num*(i+1);
    }

    for(int i=0; i<n; i++){
        printf("%dX%d = %d\n", num, i+1, mulTable[i]);
    }
    printf("******************************************************\n\n");
}

int main(){
    int mulTable[3][10];
    printTable(mulTable[0], 2, 10);
    printTable(mulTable[1], 7, 10);
    printTable(mulTable[2], 9, 10);

    return 0;
}