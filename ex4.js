var somme = 0;
var moyenne = 0;
var nombreDeMatieres = 0;

var trimestre = [
    {
        nom       :   "LIEGEARD",
        prenom    :   "Hugo",
        moyenne   :   {
                            francais : 4,
                            maths     : 8,
                            physique : 18
                        }
    },
    {
        nom       :   "MANAS",
        prenom    :   "Tanguy",
        moyenne   :   {
                            francais : 6,
                            maths     : 15,
                            physique : 9,
                            anglais  : 15.5
                        }
    },
    {
        nom       :   "ARAUJO",
        prenom    :   "Thiago",
        moyenne   :   {
                            francais : 10,
                            Histoire : 10,
                            maths     : 15,
                            physique : 16
                        }
    },
    {
        nom       :   "POTATOES",
        prenom    :   "Jesus",
        moyenne   :   {
                            francais : 20,
                            maths     : 19,
                            physique : 18
                        }
    },
    {
        nom       :   "DEBAZE",
        prenom    :   "Etienne",
        moyenne   :   {
                            francais : 20,
                            maths     : 21,
                            physique : 20,
                            informatique : 20,
                            Histoire : 0,
                        }
    }
];


for (let i=0; i<trimestre.length; i++) {
    document.write('<ul>')
    var somme = 0;
    var nombreDeMatieres = 0;
    for (const prop in trimestre[i]) {
        if (prop != "moyenne") {
            document.write(`<li>${prop} = ${trimestre[i][prop]}`)
        } else {
            document.write(` <li> ${prop} = `);
            for (const notes in trimestre[i][prop]) {
                nombreDeMatieres ++
                document.write(` ${notes} : ${trimestre[i][prop][notes]}`)
                somme += trimestre[i][prop][notes]
            }
        }
        document.write('</li>')
    }
    moyenne = Math.round(somme/nombreDeMatieres)
    document.write('<li> Moyenne générale = ' + moyenne + '</li>')
    document.write(' </ul> ')
}