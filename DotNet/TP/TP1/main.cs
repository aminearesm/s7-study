int a, b;
if (a != 0 && b != 0)
    ConsolConsole.WriteLine($"{a}*{b}= "a * b);
else
    ConsolConsole.WriteLine("L'un des nombres est négatifs")

---------------------------------------------------------------- -

int math, phy, ang, i;
ConsolConsole.WriteLine("Math:");
math = int.Parse(Console.ReadLine());
ConsolConsole.WriteLine("Phy:");
phy = int.Parse(Console.ReadLine());
ConsolConsole.WriteLine("Ang:");
ang = int.Parse(Console.ReadLine());

switch (i = (math + phy + ang) / 3)
{
    case i >= 16:
        Console.WriteLine("trés bien");
        break;
    case i >= 14:
        Console.WriteLine("bien");
        break;
    case i >= 12: Console.WriteLine("assez bien");
    default:
        Console.WriteLine("Passable");
        break;
}
-----------------------------------------------------------------
int[,] tab = { 10, 20, 30, 40, 50 }
;

static void CalculerSomme(int tab)
{
    foreach (int n in tab)
    {
        somme += n;
    }
}
-----------------------------------------------------------------
int[,] tab1 = ({ 10, 20, 30, 40, 50 }
{ 10, 20, 30, 40, 50 });
int c = 0, moyenne = 0;
static void CalculerSomme(int tab)
{
    int c = 0, moyenne = 0;
    for (q = 0; q < tab1.lenght; q++)
    {
        for (s = 0; s < tab1.lenght; s++)
        {
            moyenne += tba1[q][s];
            c++;
        }
    }
    return moyenne / c;
}
-----------------------------------------------------------------
Console.WriteLine("Entrez taille tableau");
int len = int.Parse(Console.ReadLine());
int[,] tab2;
for (int i = 0,i < len,i++)
{
    Console.WriteLine($"T[{i}]: ")
    tab2[i] = int.Parse(Console.ReadLine());

}
