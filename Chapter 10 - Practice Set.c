// 1 practice

// #include <stdio.h>

// int main()
// {
//     int a, b, c;
//     FILE *ptr;
//     ptr = fopen("pr01.txt", "r");
//     fscanf(ptr, "%d %d %d", &a, &b, &c);
//     printf("The values of a b and c is %d %d %d\n", a, b, c);

//     return 0;
// }

// 2 practice

// #include<stdio.h>

// int main(){
//     FILE *ptr;
//     int num;
//     printf("Enter the integer you need the table of\n");
//     scanf("%d", &num);
//     ptr = fopen("table.txt", "w");
//     for(int i=0; i<10; i++){
//         fprintf(ptr, "%d X %d = %d\n", num, i, num*(i+1));
//     }
//     fclose(ptr);
//     printf("Successfully generated table of %d to table.txt\n", num);
//     return 0;
// }

