const person = {
   name: "chris",
   lastName: "Herbon",
   getName: function() {
      console.log(this.name + this.lastName)
   }
}

function test() {
   console.log("test");
}