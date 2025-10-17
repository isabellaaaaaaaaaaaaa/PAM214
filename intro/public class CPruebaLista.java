public class CPruebaLista 
{
    public static void main (String [] args)
    {
        Clista numeros = new Clista();

        CNodo n1 = new CNodo(8);
        CNodo n2 = new CNodo(9);
        CNodo n3 = new CNodo(1);

        numeros.insertar(n3);
        numeros.insertar(n2);
        numeros.insertar(n1);
    }
}