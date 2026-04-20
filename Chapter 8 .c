// String

#include <stdio.h>
#include <string.h>

int main()
{
    // print_strings
    // char str[] = "Harry";
    // char str[] = {'H', 'a', 'r', 'r', 'y','\0' };
    // char *ptr = str;
    // while(*ptr!='\0'){
    //     printf("%c", *ptr);
    //     ptr++;
    // }

    // convenient_way_print_string

    // int a = 4;
    // printf("%d", a);

    // char *ptr = "Harry bhai";
    // char ptr[] = "Harry bhai";
    // printf("%s", ptr);

    // inputting_strings

    // char s[34];
    // printf("Enter your name: ");
    // scanf("%s", s);
    // printf("Your name is %s", s);

    // gets_puts
    // char s[34];
    // printf("Enter your name: ");
    // gets(s); 
    // puts(s); 
    // printf("Your name is %s", s);

    // difference_bw_2_init_methods

    // char *ptr = "Harry Bhai";
    // // char ptr[] = "Harry Bhai";
    // ptr = "Shubham bhai";
    // printf("%s", ptr);

    // strlen.
    // char *st = "Harry";
    // int a = strlen(st);
    // printf("The length of string st is %d", a);

    // strcpy
    // char *st = "This";
    // char st2[45];
    // strcpy(st2, st);
    // printf("Now the st2 is %s", st2);

    // strcat

    // char st1[45] = "Hello";
    // char *st2 = "Harry";
    // strcat(st1, st2);
    // printf("Now the st1 is %s", st1);

    // strcmp
    char st1[45] = "Hel";
    char *st2 = "Helo";
    int val = strcmp(st1, st2);
    printf("Now the val is %d", val);
    return 0;
}