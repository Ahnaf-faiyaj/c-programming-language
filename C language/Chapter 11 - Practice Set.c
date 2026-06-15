// 4 practice

// #include<stdio.h>
// #include<stdlib.h>

// int main(){
//     int *ptr;
//     ptr = (int*) malloc(5*sizeof(int));
//     for(int i=0; i<5;i++){
//         printf("Enter the value of %d element: \n", i);
//         scanf("%d", &ptr[i]);
//     }

//     for(int i=0; i<5;i++){
//         printf("The value of %d element is: %d \n", i, ptr[i]); 
//     }

//     ptr = realloc(ptr, 10*sizeof(int));
//     for(int i=0; i<10;i++){
//         printf("Enter the value of %d element: \n", i);
//         scanf("%d", &ptr[i]);
//     }

//     for(int i=0; i<10;i++){
//         printf("The value of %d element is: %d \n", i, ptr[i]); 
//     }
//     return 0;
// }

// 5 practice

#include<stdio.h>
#include<stdlib.h>

int main(){
    int *ptr;
    ptr = (int*) malloc(10*sizeof(int));
    for(int i=0; i<10;i++){
        ptr[i] = 7*(i+1);  
        printf("The value of 7 X %d = %d \n", i+1,ptr[i]); 
    }
 
    ptr = realloc(ptr, 15*sizeof(int));
    printf("\nAfter reallocating.....\n\n");
    for(int i=0; i<15;i++){
        ptr[i] = 7*(i+1);  
        printf("The value of 7 X %d = %d \n", i+1,ptr[i]); 
    }
    
    return 0;
}