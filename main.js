
var courses = [
    'javascript',
    'ruby',
    'golang',
    'python'
]
var VipCourses = [
    {
        name: 'Ruby',
        coin: 100,
        isFinish: false,
    },
    {
        name: 'Javascript',
        coin: 0,
        isFinish: true,
    },
    {
        name: 'Ruby',
        coin: 100,
        isFinish: true,
    },
    {
        name: 'C++',
        coin: 0,
        isFinish: false,
    },
    {
        name: 'GoLang',
        coin: 300,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin: 150,
        isFinish: true,
    }
];
var numbers = [1, 2, 3, 4, 5];
//////////MAP(START)////////////
Array.prototype.map2 = function(callback) {
    var output = [], arrayLenght = this.length;
    for(var i=0 ; i < arrayLenght; ++i)
    {
        var result = callback(this[i],i);
        output.push(result);
    }
    return output;
}

var config = courses.map(function(course){
    return `<h2>${course}</h2>` 
})

var html = courses.map2(function(course,index){
    return `<h2>${course}</h2>`
})
// console.log(html);
//////////MAP(END)//////////

///////////FOREACH(START)//////////

Array.prototype.forEach2 = function(callback)
{   
    for (var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            callback(this[index], index, this);
        }
    }
}

courses.forEach(function(course, index, array){
    // console.log(course, index, array);
})

courses.forEach2(function(course, index, array){
    // console.log(course, index, array);
})

///////////FOREACH(END)////////

///////////REDUCE(START)/////////
Array.prototype.reduce2 = function(callback, result){
    var arrayLenght = this.length;
    let i = 0;
    if(arguments.length < 2)
    {
        i = 1;
        result = this[0];
    }
    for(; i < arrayLenght; i++)
    {
        result = callback(result, this[i], i, this);
    }
    return result;
}

var kq = numbers.reduce(function(total, number){
    return total + number;
},10)

var kq2 = numbers.reduce2(function(total, number, index, array){
    // console.log(total, number, index, array);
    return total + number;
})

// console.log(kq2);
///////////REDUCE(END)/////////

//////////FILTER(START)///////
Array.prototype.filter2 = function(callback){
    output =[];
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            var result = callback(this[index], index, this);
            if(result)
            {
                output.push(this[index]);
            }
        }
    }
    return output;
}

var filterCourses = VipCourses.filter(function(vipcourse, index, array){
    return vipcourse.coin == 0;
})
var filterCourses2 = VipCourses.filter(function(vipcourse, index, array){
    return vipcourse.coin == 0;
})
// console.log(filterCourses2);
//////////FILTER(END)///////

//////////SOME(START)////////

Array.prototype.some2 = function(callback){
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            if(callback(this[index], index, this))
                return true;
        }
    }
    return false;
}

var condition = VipCourses.some(function(vipcourse, index, array){
    return vipcourse.isFinish;
})
var condition2 = VipCourses.some2(function(vipcourse, index, array){
    return vipcourse.isFinish;
})
// console.log(condition2);
//////////SOME(END)////////

//////////EVERY(START)/////////
Array.prototype.every2 = function(callback){
    var output = true;
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
           var result = callback(this[index], index, this);
           if(!result){
               output = false;
               break;
           }
        }
    }
    return output;
}
var condition3 = VipCourses.every(function(vipcourse, index, array){
    return vipcourse.isFinish;
})
var condition4 = VipCourses.every2(function(vipcourse, index, array){
    return vipcourse.isFinish;
})
// console.log(condition4);
//////////EVERY(END))/////////
