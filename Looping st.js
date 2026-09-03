// let variable = 1;
// while (variable <= 10) {
//     console.log(variable);
//     variable++;
// }


// let students={
//     name: "John",
//     age: 20,
//     grade: "A",
//     place: "New York", 
//     address:{ street: "123 Main St", city: "New York", state: "NY" }
// }
// console.log(students.name);
// for(let stud1 in students){
//     console.log(stud1 + ": " + students[stud1]);

// }

// students.address.street; 
// students["address"]=jkjkij; 


class student
{
    studprint()
    {
        this.name = "";
        this.markes = 0;
    }
    

    getname()
    {
        return this.name;
    }
    setname(stname)
    {
        this.name =stname;
    }


}
let stud1 = new student();
stud1.setname("John");
console.log(stud1.getname());