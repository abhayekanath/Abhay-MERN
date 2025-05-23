// 2

class Counter {
  constructor(cn = 0) {
    this.count = cn;
  }
  increment(i = 1) {
    // this.count=this.count+i
    this.count += i;
  }
  decrement() {
    this.count--;
  }
  getCount() {
    return this.count;
  }
}
let c = new Counter(5);
c.increment(6);
c.increment();
c.decrement();
//  console.log(c.getCount())

// 4

// class Student {
//   constructor(n, r, m) {
//     this.name = n;
//     this.rollNo = r;
//     this.subjects = s;
//   }
//   getAverageMark() {
//     let totalMark = 0;
//     for (let i = 0; i < this.marks.length; i++) {
//       totalMark += this.marks[i];
//     }
//     return  (totalMark / this.marks.length);
//   }
// }
// let avgmark = new Student("Abhay", 1, [20, 30, 40]);
// console.log(avgmark.getAverageMark());

class Student {
	subjects=[]
  constructor(n, r) {
    this.name = n;
    this.rollNo = r;
  }
	addSubject(subname, mark){
		let obj = {
			subname,
			mark
		}
		// this.subjects = [...this.subjects,obj]
		this.subjects.push(obj)
	}
  // getAverageMark() {
  //   let totalMark = 0;
  //   for (let i = 0; i < this.marks.length; i++) {
  //     totalMark += this.marks[i];
  //   }
  //   return  (totalMark / this.marks.length);
  // }
}
let avgmark = new Student("Abhay", 1);
// console.log(avgmark.addSubject('Maths', 20))
// console.log(avgmark.addSubject('Science', 30))
// console.log(avgmark);

