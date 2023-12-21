// const addFunc = (val1,val2) => console.log(val1 + val2);
// addFunc(10,20);

// let array = [10, 20, 30, 40, 50, 600, 7, 8, 9, 10, 130];
// const arrayAverage = () => {
//     let total = 0;
//     for(let i = 0; i < array.length; i++) {
//         total += array[i];
//         console.log(array[i]);
//     }
//     let average = total / array.length;
//     console.log(average);
// }
// arrayAverage();
// // you can assign the value by using = sign 
// // += is assign the value of left hand side to right hand side

// let x = 5;
// x += 5;
// console.log(x);

// let y = 1;
// y++;
// console.log(y);

// // == is a loose equality check operator if you give the number in quotes '2' and without quotes 2 it will give true
// // ==== is a strict euality check operaor it will stricly check the types
// let array1 = [1,2,3,4,5,6,7];
// let array2 = [1,2,3,4,5,6,7];
// const chackArrays = (arrayVal1, arrayVal2) => {
//     if(arrayVal1.length === arrayVal2.length && arrayVal1.every((value, index) => value === arrayVal2[index])) {
//         console.log('the arrays are same');
//     } else {
//         console.log('the arrays are not same');
//     }
// }
// chackArrays(array1, array2)


// const checkNumbers = (num) => {
//     if(num === 0) {
//         console.log('the gived number is 0');
//     } else if(num <= 0) {
//         console.log('the given number is negative');
//     } else if(num >= 0) {
//         console.log('the given number is positive');
//     }else if(num === '') {
//         console.log('the gived value is empty');
//     } else if(isNaN(num)) {
//         console.log('the gived value is not a num');
//      } // else {
//     //     console.log('only eccepts number');
//     // }
// }
// checkNumbers('2');


// const lessORGreat = (num) => {
//     if(num > 10) {
//         console.log('the number is greater than 10');
//     } else if(num < 20) {
//         console.log('the nunber is less than 20');
//     }
// }
// lessORGreat(10);

// let isAdmin = true;
// let isEditor = false;
// const  user = (user,anonymous) => {
//     if(user) {
//         console.log(`${user} you can login`);
//     } else if(anonymous) {
//         console.log(`${anonymous} iseditor can"t login`);
//     } else {
//         console.log(`${anonymous} you can"t login`);
//     }
// }
// user(isAdmin);


// const numDiv = (num) => {
//     if(num % 2 === 0 || num % 3 === 0) {
//         console.log(`${num} is divisable by 2 or 3`);
//     } else {
//         console.log(`${num} is not divisable by 2 or 3`);
//     }
// }
// numDiv(2);


// let arrays = [1,2,3,4,5,6,7,8,9];
// let maxnum = 0;
// const findMax = (max) => {
//    for(let i = 0; i < max.length; i++) {
//     if(max[i] > maxnum) {
//         maxnum = max[i];
//     }
// }
// console.log(maxnum);
// }
// findMax(array);
// const reverseArray = (array) => {
//     let output = []
//     while (array.length) {
//         output.push(array.pop())
//     }
//     return output;
// }
// console.log(reverseArray([1,2,3,4,5]));

// let str1 = 'arsalan ahmed'
// const reverseStr = (str) => {
//     let reverse1 =  str.split('').reverse().join('');
//     console.log(reverse1);
// }
// reverseStr(str1);


// const vowelsFunc = (str) => {
//     str = str.toLowerCase();
//     let vowels = ['a','e','i','o','u'];
//     let count = 0;
//     for(let i of str) {
//         if(vowels.includes(i)) {
//             count++
//         }
//     }
//     return count;
// }

// let exampleString = "aeiou";
// let numberOfVowels = vowelsFunc(exampleString);
// console.log(numberOfVowels);


// function plindrome(str) {
//     let strToArray = str.split('')
//     let reverseStr = strToArray.slice().reverse()
//     let arrayToStr = reverseStr.join('')
//     if(str === arrayToStr ) {
//         console.log('it is a palindrome');
//     } else {
//         console.log('it is not a palindrome');
//     }

// }
// let str3 = 'asa'
// plindrome(str3)

// dom

let form = document.querySelector('.form');
let inputField = document.querySelector('.input-field');
let taskBtn = document.querySelector('.taskBtn');
let taskContainer = document.querySelector('.task-container ul');
function tasksFunc() {
    form.addEventListener('click', (e) => e.preventDefault());
    taskBtn.addEventListener('click', (e) => {
        if (inputField.value !== '') {
            let list = document.createElement('li');
            let inputVal = inputField.value;
            list.innerHTML = inputVal;
            taskContainer.append(list);
            checkFunc(list)
            deleteFunc(list);
            inputField.value = ''
        }else {
            console.log(123);
        }
    })
}
const deleteFunc = (list) => {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'delete';
    list.append(deleteBtn);
    deleteBtn.classList.add('deletebtn');
    let removeBtn = document.querySelectorAll('.deletebtn');
    removeBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            let closestLi = e.target.closest('li');
            closestLi.remove();
            if(checked)

        })

    })

}
const checkFunc = (list) => {
    let checkBox = document.createElement('input');
    list.append(checkBox);
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', (e) => {
        let checked = e.target.checked;
        if (checked) {
            list.style.textDecoration = 'line-through';
        } else {
            list.style.textDecoration = 'none';
        }
    })
}
tasksFunc()
tasksFunc()
tasksFunc()
tasksFunc()
