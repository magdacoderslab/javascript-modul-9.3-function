var text="Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtianstage of the late Cretaceous period.",
dinosaur="triceratops";

var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var dinosaurCharsAfter = text.replace('Velociraptor',dinosaurUpperCased);

console.log(dinosaurCharsAfter.substr(dinosaurCharsAfter, text.length/2));







