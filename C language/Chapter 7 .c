//  Arrays

#include <stdio.h>
// _arrays_to_functions

// void printArray(int *ptr, int n){
//     for(int i=0; i<n; i++){
//         printf("The value of element %d is %d\n", i+1, *(ptr+i)); 
//     }
// }

// void printArray(int ptr[], int n){
//     for(int i=0; i<n; i++){
//         printf("The value of element %d is %d\n", i+1, ptr[i]); 
//     } 
//     ptr[2] = 5555; // This value will be changes in arr array of main as well
// }


int main()
{
    // Naive way to create 4 ints
    // int marks1, marks2, marks3, marks4;
    // marks1 = 34;
    // marks2 = 45;
    // marks3 = 67;
    // marks4 = 87;

    // int marks[4];
    // marks[0] = 34;
    // marks[1] = 45;
    // marks[2] = 34;
    // marks[3] = 67;

    // int marks[4]; // allocate space for 4 integers

    // printf("Enter the value of marks for student 1: ");
    // scanf("%d", &marks[0]);
    // printf("Enter the value of marks for student 2: ");
    // scanf("%d", &marks[1]);
    // printf("Enter the value of marks for student 3: ");
    // scanf("%d", &marks[2]);
    // printf("Enter the value of marks for student 4: ");
    // scanf("%d", &marks[3]);

    //  printf("You have entered %d %d %d and %d", marks[0],
    //         marks[1], marks[2], marks[3]);

    // array_input_using_loops

    // int marks[5];

    // for (int i = 0; i < 5; i++)
    // {
    //     printf("Enter the value of marks for student %d: ", i + 1);
    //     scanf("%d", &marks[i]);
    // }

    // for (int i = 0; i < 5; i++)
    // {
    //     printf("The value of marks for student %d is: %d \n", i + 1, marks[i]);
    // }

    // array_initialization

    // int a[] = {34, 24, 44};
    // printf("The value of a[0] is %d\n", a[0]);
    // printf("The value of a[1] is %d\n", a[1]);
    // printf("The value of a[2] is %d\n", a[2]);

    // float a[] = {3.4, 2.32, 2.3};
    // printf("The value of a[0] is %f\n", a[0]);
    // printf("The value of a[1] is %f\n", a[1]);
    // printf("The value of a[2] is %f\n", a[2]);

    // pointer_arithmetic

    // int i = 34;
    // int *ptr = &i;
    // printf("The value of ptr is %u\n", ptr);
    // // ptr = ptr - 1;
    // ptr = ptr + 1;
    // // ptr++;
    // // ptr++;
    // printf("The value of ptr is %u\n", ptr);

    // char c = '3';
    // char *ptr = &c;
    // printf("The value of ptr is %u\n", ptr);
    // // ptr = ptr - 1;
    // ptr = ptr + 1;
    // ptr = ptr + 1;
    // // ptr++;
    // // ptr++;
    // printf("The value of ptr is %u\n", ptr);

    // float f = 3.4;
    // float *ptr = &f;
    // printf("The value of ptr is %u\n", ptr);
    // // ptr = ptr - 1;
    // ptr = ptr + 1;
    // // ptr = ptr + 1;
    // // ptr++;
    // // ptr++;
    // printf("The value of ptr is %u\n", ptr);

    // arrays_with_pointers

    // int marks[4];
    // int *ptr;
    // // ptr = &marks[0];
    // ptr = marks;
    // for(int i =0; i<4; i++){
    //     printf("Enter the value of marks for student %d: \n", i+1);
    //     scanf("%d", ptr);
    //     ptr ++;
    // }

    // for(int i =0; i<4; i++){
    //     printf("The value of marks for student %d is %d \n",i+1, marks[i]);  
    // }

    // _arrays_to_functions

    //  int arr[] = {1,2,3543,34,3,645,23};
    // printArray(arr, 7);
    // printf("%d", arr[2]);

    // multidim_array

    int n_students = 3;
    int n_subjects = 5;

    int marks[3][5];
    for(int i=0; i<n_students; i++){
        for(int j=0; j<n_subjects; j++){
            printf("Enter the marks of student %d in subject %d\n", i+1, j+1);
            scanf("%d", &marks[i][j]);
        }
    }

    for(int i=0; i<n_students; i++){
        for(int j=0; j<n_subjects; j++){
            printf("The marks of student %d in subject %d is: %d\n", i+1, j+1, marks[i][j]);
        }

    }

    return 0;
}