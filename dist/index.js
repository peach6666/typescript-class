class Person {
    //類別(class)建構子
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}
//class(類別)
class Employee extends Person {
    //public公開屬性，允許外界自由存取此屬性或方法，為預設值
    //readonly類似定義常數，讓該值無法再被修改
    //private私有屬性，僅限當前class存取此屬性或方法，所以目前dept只能靠writeDept函式印出
    constructor(id, name, dept, city) {
        //super關鍵字呼叫父類別Person的建構子
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.city}`);
    }
}
//透過new建立類別的物件實字
let salesEmployee = new Employee("Yan", "Ivy", "sales", "Taiwan");
let data = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dore Peters", city: "New York" },
    //把新建構的變數放進data
    salesEmployee
];
data.forEach(item => {
    //若data中有class Employee的元素則叫用writeDept 
    if (item instanceof Employee) {
        item.writeDept();
    }
    else {
        console.log(`${item.id},${item.name},${item.city}`);
    }
});
//abstract定義抽象類別，作為子類別的樣板，但不能透過new去建立抽象類別的物件實字
//繼承抽象類別的子類別必須實作抽象類別定義的抽象方法
class Class {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //一般方法，子類別Student和People都會繼承
    getDetails() {
        return `${this.name},${this.getSpecific()}`;
    }
}
class Student extends Class {
    constructor(id, name, city, creditLimit) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
    //實作父抽象類別的抽象方法1
    getSpecific() {
        return `has ${this.creditLimit} limit`;
    }
}
class People extends Class {
    constructor(
    //子類別必須包含父類型屬性，且型別要符合
    id, name, dept) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.dept = dept;
    }
    //實作父類型的抽象方法2
    getSpecific() {
        return `${this.name} works in ${this.dept}`;
    }
}
//用new建立子類別Student和People(父類別為Class抽象類別)的物件實字
let classStudent = [
    new Student("Yan", "Peach", "Taiwan", 0),
    new People(87, "Patrick", "Arista")
];
classStudent.forEach(item => {
    //抽象類別型別防衛描述
    if (item instanceof Class) {
        console.log(item.getDetails());
    }
});
let human = { name: "peach", class: 304 };
human.interest = "boxing";
//# sourceMappingURL=index.js.map