function my_Dictionary() { //All the details of cat
    var Animal = {
        Species:"Cat",
        Color:"Grey",
        Breed:"British shorthair",
        Age:"4",
        Sound:"Meow!"
    };
    delete Animal.Sound; //deleting sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}