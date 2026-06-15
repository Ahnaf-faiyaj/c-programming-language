// 2 practce

// #include<stdio.h>
// #include<string.h>

// int main(){
//     char st1[34];
//     char st2[34];
//     char c;
//     int i =0;

//     printf("Enter the value of first string\n");
//     scanf("%s", st1); 
//     printf("Enter the value of second string character by character\n");
    
//     while(c!='\n'){ 
//         fflush(stdin);
//         scanf("%c", &c); 
//         st2[i] = c;
//         i++;
//     }
//     st2[i-1]= '\0';

//     printf("The value of st1 is %s\n", st1);
//     printf("The value of st2 is %s\n", st2);
//     printf("strcmp for these strings returns %d", strcmp(st1, st2));

//     return 0;
// }

// 3 practce

// #include<stdio.h>
// int strlen(char * st){
//     char *ptr = st;
//     int len=0;
//     while(*ptr!='\0'){
//         len++;
//         ptr++;
//     }
//     return len;
// }

// int main(){
//     char st[] = "Harry";
//     int l = strlen(st);
//     printf("The length of this string is %d", l);
//     return 0;
// }

// 4 practice

// #include<stdio.h>
// void slice(char *st, int m, int n){
//     int i = 0;
//      while((m+i)<n){
//          st[i] = st[i+m];
//          i++;
//      }
//      st[i] = '\0';
// }

// int main(){
//     char st[] = "Harrysfsdfsdf";
//     slice(st, 1, 6);
//     printf("%s", st);
//     return 0;
// }

// 6 practice

