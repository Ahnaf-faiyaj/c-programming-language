// Structures

#include <stdio.h>
#include <string.h>

typedef struct employee{
    int code;
    float salary;
    char name[20];
} emp;

void show(emp emp1){
    printf("The Code of employee is: %d\n", emp1.code);
    printf("The Salary of employee is: %f\n", emp1.salary);
    printf("The Name of employee is: %s\n", emp1.name);
    
}
// show_function
// void show(struct employee emp){
//     printf("The Code of employee is: %d\n", emp.code);
//     printf("The Salary of employee is: %f\n", emp.salary);
//     printf("The Name of employee is: %s\n", emp.name);
//     emp.code = 34;
// }

int main()
{
    // int a = 34;
    // char b = 'g';
    // float d = 234.3543;
    // // employee e1;
    // // e1.salary = 34.454; --->wont work without employee structure

    // struct employee e1;
    // e1.code = 100;
    // e1.salary = 34.454;
    // // e1.name = "Harry"; --> wont work
    // strcpy(e1.name, "Harry");

    // printf("%d\n", e1.code);
    // printf("%.3f\n", e1.salary);
    // printf("%s\n", e1.name);

    //  struct employee e1, e2, e3;
    // printf("Enter the value for code of e1: ");
    // scanf("%d", &e1.code);
    // printf("Enter the value for salary of e1: ");
    // scanf("%f", &e1.salary);
    // printf("Enter the value for name of e1: ");
    // scanf("%s", e1.name);

    // printf("Enter the value for code of e2: ");
    // scanf("%d", &e2.code);
    // printf("Enter the value for salary of e2: ");
    // scanf("%f", &e2.salary);
    // printf("Enter the value for name of e2: ");
    // scanf("%s", e2.name);

    // printf("Enter the value for code of e3: ");
    // scanf("%d", &e3.code);
    // printf("Enter the value for salary of e3: ");
    // scanf("%f", &e3.salary);
    // printf("Enter the value for name of e3: ");
    // scanf("%s", e3.name);

    // array_of_structures

    // struct employee facebook[100];

    // facebook[0].code = 100;
    // facebook[0].salary = 100.45;
    // strcpy(facebook[0].name, "Harry");

    // facebook[1].code = 101;
    // facebook[1].salary = 90.45;
    // strcpy(facebook[1].name, "Rohan");

    // facebook[2].code = 102;
    // facebook[2].salary = 110.45;
    // strcpy(facebook[2].name, "Ahnaf");
    // printf("Done");

    // _another_way_init_structures

    // struct employee harry = {100, 34.23, "Harry"};

    // printf("Code is: %d \n", harry.code);
    // printf("Salary is: %f \n", harry.salary);
    // printf("Name is: %s \n", harry.name);

    // pointer_to_structures

    //  struct employee e1;
    // struct employee *ptr;

    // ptr = &e1;
    // //(*ptr).code = 101; //or you can also write: ptr->code = 101;
    // ptr->code = 101;
    // printf("%d", e1.code);

    // show_function
    // struct employee e1;
    //     struct employee *ptr;

    //     ptr = &e1;
    //     //(*ptr).code = 101; //or you can also write: ptr->code = 101;
    //     ptr->code = 101;
    //     ptr->salary = 11.01;
    //     strcpy(ptr->name, "Harry");

    //     show(e1);
    //     printf("The Code of employee is: %d\n", e1.code);

    // typedef

    // Declaring e1 and ptr
    emp e1;
    emp *ptr;

    // pointing ptr to e1
    ptr = &e1; 

    // Set the member values for e1
    ptr->code = 101;
    ptr->salary = 11.01;
    strcpy(ptr->name, "Harry"); 

    show(e1);
    return 0;
}