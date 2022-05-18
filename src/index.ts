class Person{
    //類別(class)建構子
    constructor(
        public id:string,
        public name:string,
        public city:string
    ){}
}
//class(類別)
class Employee extends Person{
    //public公開屬性，允許外界自由存取此屬性或方法，為預設值
    //readonly類似定義常數，讓該值無法再被修改
    //private私有屬性，僅限當前class存取此屬性或方法，所以目前dept只能靠writeDept函式印出
    constructor(
        public readonly id:string,
        public name:string,
        private dept:string,
        public city:string){
        //super關鍵字呼叫父類別Person的建構子
        super(id,name,city)
    }

    writeDept(){
        console.log(`${this.name} works in ${this.city}`)
    }
}
//透過new建立類別的物件實字
let salesEmployee=new Employee("Yan","Ivy","sales","Taiwan")

let data:(Person|Employee)[]=[
    {id:"bsmith",name:"Bob Smith",city:"London"},
    {id:"ajones",name:"Alice Jones",city:"Paris"},
    {id:"dpeters",name:"Dore Peters",city:"New York"},
    //把新建構的變數放進data
    salesEmployee
]

data.forEach(item=>{
    //若data中有class Employee的元素則叫用writeDept 
    if(item instanceof Employee){
        item.writeDept()
    }else{
        console.log(`${item.id},${item.name},${item.city}`)
    }
})

//abstract定義抽象類別，作為子類別的樣板，但不能透過new去建立抽象類別的物件實字
//繼承抽象類別的子類別必須實作抽象類別定義的抽象方法
abstract class Class{
    constructor(
        public id:string|number,
        public name:string,
    ){}
    //一般方法，子類別Student和People都會繼承
    getDetails(){
        return `${this.name},${this.getSpecific()}`
    }
    //定義抽象方法，子類別必須實作抽象方法
    abstract getSpecific():string
}

class Student extends Class{
    constructor(
        public readonly id:string,
        public name:string,
        public city:string,
        public creditLimit:number
    ){
        super(id,name)
    }
    //實作父抽象類別的抽象方法1
    getSpecific(): string {
        return `has ${this.creditLimit} limit`
    }
}

class People extends Class{
    constructor(
        //子類別必須包含父類型屬性，且型別要符合
        public id:number,
        public name:string,
        public dept:string
    ){
        super(id,name)
    }
    //實作父類型的抽象方法2
    getSpecific(): string {
        return `${this.name} works in ${this.dept}`
    }
}

//用new建立子類別Student和People(父類別為Class抽象類別)的物件實字
let classStudent:Class[]=[
    new Student("Yan","Peach","Taiwan",0),
    new People(87,"Patrick","Arista")
]

classStudent.forEach(item=>{
    //抽象類別型別防衛描述
    if(item instanceof Class){
        console.log(item.getDetails())
    }
})

//索引簽名(index signature)，讓動態新增屬性不會報錯
type Data={
    readonly name:string,
    class:number,
    //索引簽名，表示屬性名稱為字串，值為any型別(所有屬性都要符合索引簽名規則！)
    [key:string]:any
}
let human:Data={name:"peach",class:304}
human.interest="boxing"