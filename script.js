// 1.
for (a = 1; a <= 20; a++) {
    console.log(a);

};

// 2.
for (b = 1; b <= 50; b++) {
    if (b % 2 == 1) {
        console.log(b);

    }
};

// 3.
let num = 7;
for (let i = 1; i <= 10; i++) {
    console.log(num + "x" + i + "=" + (num * i));

};

// 4.
for (c = 20; c >= 1; c--) {
    console.log(c);

};

// 5.
let sum = 0;
for (let d = 1; d <= 100; d++) {
    sum = sum + d;
}
console.log(sum);

// 6.
let fruits = ["apple", "banana", "orange", "graps",]
for (let e = 0; e <= fruits.length; e++) {
    console.log(fruits[e]);

}

// 7.
let count = 0;
for (let f = 1; f <= 50; f++) {
    if (f % 2 === 0) {
        count++;
    }
}
console.log(count);

// 8.
let star = ["*", "**", "***", "****", "*****",]
for (let g = 0; g <= star.length; g++) {
    console.log(star[g])

}

// 9.
function java() {
    console.log("Welcome To Javascript!");

}
java();

// 10.
function greet(name) {
    console.log("Hello " + name);
}
greet("Naveen!");

// 11.
function add(h, j) {
    return h + j
}
console.log(add(10, 20));
// 12.
function bonusadd(salary, bonus) {
    return salary + bonus;
}
console.log(bonusadd(50000, 5000));

// 13.
let student = {
    name: "Rahul",
    course: "Javascript",
    marks: 95
}
for (let key in student) {
    console.log(key + ":" + student[key]);

};

// 14.
function largest(k, l) {
    if (k > l) {
        return k;
    }
    else {
        return l;
    }
}
console.log(largest(10, 50));

// 15.


let employee = {
    EmployeeName: "Reena",
    Department: "EEE",
    Salary: 20000
};

function addBonus(salary, bonus) {
    return salary + bonus;
};


console.log("EmployeeName :" + employee.EmployeeName);
console.log("Department:" + employee.Department);
console.log("Salary:" + employee.Salary);


let finalSalary = addBonus(employee.Salary, 5000);
console.log("Salary after bonus:" + finalSalary);














