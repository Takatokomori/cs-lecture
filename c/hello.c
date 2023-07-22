#include <cs50.h>
#include <studio.h>

int main(void)
{
    string name = get_string("What's your name?");
    print("hello, %s\n", name);
}
