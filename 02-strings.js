 var name = 'daniel'
 var surname = 'yepes'

 var fullName = name + ' ' + surname

 console.log(fullName)

var firstingredient = 'leche'
var secondingredient = 'arroz'
var thirdIngredient = 'limón'
var fourthIngredient = 'canela'

// Lista de ingredientes: leche, arroz, limón y canela

var recipe =
    'Lista de ingredientes: \n' + 
    firstingredient + 
    ', ' + 
    secondingredient + 
    ', ' + 
    thirdIngredient + 
    ' y ' +
    fourthIngredient;

    console.log(recipe)


    var recipeInterpolated = 
    `Lista de ingredientes:
    -${firstingredient}.
    -${secondingredient}.
    -${thirdIngredient}.
    -${fourthIngredient}.    
    `
    console.log(recipeInterpolated);

    console.log(`--------------------`)
 

    var car = 'Fiat'
    var myCar = `Mi coche es un ${car.toUpperCase()}`

    console.log(myCar)

    var dog = 'CARLINO'
    var myDog = `Mi perro es un ${dog.toLowerCase()}`

    console.log(myDog)

    var computerDescription = '    Ordenador muy potente con mucha RAM   '

    console.log(computerDescription.trim())


    var school = 'the PMBA'
    var schoolName = school.slice(4, 6)
    console.log(schoolName)


