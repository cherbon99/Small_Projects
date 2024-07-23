const objs = [
   { year: 2012, make: "Ford"},
   { year: 1999, make: "Chevy"},
   { year: 2002, make: "Honda"},
   { year: 2022, make: "Toyota"},
   { year: 2012, make: "Ford"},
   { year: 1999, make: "Chevy"},
   { year: 2002, make: "Honda"},
   { year: 2022, make: "Toyota"},
   { year: 1998, make: "Lexus"},
   { year: 2015, make: "Ford"},
   { year: 2010, make: "Chevy"},
   { year: 2005, make: "Honda"},
   { year: 2008, make: "Toyota"},
   { year: 2017, make: "Lexus"},
   { year: 2000, make: "Ford"},
   { year: 2013, make: "Chevy"},
   { year: 2001, make: "Honda"},
   { year: 2020, make: "Toyota"},
   { year: 2004, make: "Lexus"},
   { year: 1997, make: "Ford"},
   { year: 2019, make: "Chevy"},
   { year: 2007, make: "Honda"},
   { year: 2011, make: "Toyota"},
   { year: 2006, make: "Lexus"},
   { year: 2003, make: "Ford"},
   { year: 2014, make: "Chevy"},
   { year: 2021, make: "Honda"},
   { year: 1996, make: "Toyota"},
   { year: 2009, make: "Lexus"},
   { year: 2016, make: "Ford"},
   { year: 1995, make: "Chevy"},
   { year: 2018, make: "Honda"},
   { year: 1994, make: "Toyota"},
   { year: 1998, make: "Lexus"}
];

const sortedObjs = objs.sort((a, b) => {
   const diffInYear = b.year - a.year;
   if(a.make > b.make){
      return 1
   }else if (a.make < b.make){
      return -1
   } else{
      return 0
   }
})
console.log(sortedObjs);