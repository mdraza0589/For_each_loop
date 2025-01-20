

        // use in array
        // foreach loop know the starting and ending of array 
        // we don't need to give condition in foreach
        // we can pass in function :- value , index, array
        // use function in foreach loop
        // function name should not declear in foreach loop 



        // const values=["raza",'mohd','tabish']
        // values.forEach(function (item){
        //     console.log(item)
        // });

        
        // const values=[20,30,400,50]
        // values.forEach((element) => console.log(element));
        
        
        // const values=["raza",'mohd','tabish']
        // values.forEach((item) => {
        //     console.log(item)
        // });




        // const values=["raza",'mohd','tabish']
        // values.forEach(function (value,index, array){
        //     console.log(value,index, array)
        // });


        const arr=[
            {
                name:"razamohammad",
                course:"B.tech",
                age:21
            },
            {
                name:"alam",
                course:"B.pharma",
                age:22
            },
            {
                name:"tabish",
                course:"M.tech",
                age:23
            }
        ]

        arr.forEach(function (item){
            // console.log(item.name);
        })


        // store the foreach loop in a variable

        const coding=['js','ruby','java','python','cpp']
        const values=coding.forEach(function (item){
            console.log(item);
            return item // it doesn't work
        })
        // console.log(values);




        const myNums = [1,2,3,4,5,6,7,8,9,10]

        const newNums= myNums.filter((num)=> num>4)
        console.log(newNums);
        