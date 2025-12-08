const student ={
    name : "prasad",
    marks : 95,
    property : this, //global scope
    getfunction : function () {
        console.log(this);
        return this.name ; 
    },
    getMarks : () =>{
        console.log(this); //parent scope -> student -> scope is global 
        return this.marks;
    }, 
    getinfo1: function () {
        setTimeout( () => {
            console.log(this); // student
        },2000); 
    },
    getinfo2: function () {
        setTimeout( function () {
            console.log(this); // window
        },2000); 
    }


};