from random import randint

le_juste_prix = randint(1, 6)

i = 1
nb_essais = 6


for i in range(0, nb_essais):

    votre_prix = int(input("Saisissez votre nombre : "))

    if votre_prix > 6 or votre_prix < 0:
        print("la valeur est incorrecte")
    elif le_juste_prix == votre_prix:
        print("Bravo vous avez le juste prix ")
        break
    elif votre_prix > le_juste_prix:
        print("moins")

    else:
        print("plus")

    i += 1

if i == nb_essais:
    print("Perdu")

