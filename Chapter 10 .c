// - File I/O

#include<stdio.h>

int main(){
    // FILE *ptr;
    // ptr = fopen("sample2.txt", "r"); //--> for reading the file
    //ptr = fopen("sample2.txt", "w"); //--> for writing to a file

    // file_reading

    // int num;
    // int num2;
    // ptr = fopen("Ahnaf.txt", "r");
    // fscanf(ptr, "%d", &num);
    // fscanf(ptr, "%d", &num2);
    // fclose(ptr);
    // printf("The value of num is %d\n", num);
    // printf("The value of num2 is %d\n", num2);

    // int num;
    // int num2;
    // ptr = fopen("Farib.txt", "r");
    // if (ptr == NULL){
    //     printf("This file does not exist\n");
    // }
    // else{ 
    //     fscanf(ptr, "%d", &num);
    //     fscanf(ptr, "%d", &num2);
    //     fclose(ptr);
    //     printf("The value of num is %d\n", num);
    //     printf("The value of num2 is %d\n", num2);
    // }


    // file_writing

    // FILE *fptr;
    // int number = 45;
    // fptr = fopen("generated.txt", "w");
    // fprintf(fptr, "The number is %d\n", number);
    // fprintf(fptr, "Thanks for using fprintf", number);
    // fclose(fptr);

    // fgetc_fputc

    // FILE *ptr;
    // fgetc demo for reading a file
    // ptr = fopen("getcdemo.txt", "r");
    // char c = fgetc(ptr);
    // printf("The value of my character is %c\n", fgetc(ptr));
    // printf("The value of my character is %c\n", fgetc(ptr));
    // printf("The value of my character is %c\n", fgetc(ptr));
    // printf("The value of my character is %c\n", fgetc(ptr));
    // printf("The value of my character is %c\n", fgetc(ptr));

    // ptr = fopen("putcdemo.txt", "w");
    // putc('c', ptr);
    // putc(" c ", ptr);
    // putc("c", ptr);
    // fclose(ptr);


    // FILE *f;
    // char c;
    // f = fopen("generated.txt", "r");
    // c = fgetc(f);
    // while(c!=EOF){
    //     printf("%c", c);
    //     c = fgetc(f);
    // }

    return 0;
}