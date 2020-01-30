// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// console.log("Hello?!? do this do thing?");
// console.log("live reload?");

// #1 Accept args instead of using global variables.


function greet ({name, address, occupation}){
    // const {name} = whom;   
    
    // #2 ALWAYS return a value
    return `hello, ${occupation} ${name}, welcome to ${address} !!`;
}

const person = {
    name: 'Greta',
    // address: 'Europe?',
    occupation:"Cimate change goddess"
};

function fromEarth(somebody){
    //add an address property
    // debugger;
    const newSomebody = {
        //defaults first, before the spread operator
        address : "Earth",
        ...somebody,
        age : "all of them"
        //hard overwrites go after the spread operator
    }
    // if(!newSomebody.address){
    //     newSomebody.address = "earth";
    // }
    // console.log(newSomebody);
    return newSomebody;
}

// console.log(greet(fromEarth(person)));
// console.log(greet(person));

function addressIsNotPacific(person){
    return (person.address.toLowerCase() !== 'pacific');
}

const persons = [
        {name:'Bob', address:'Atlanta'},
        {name:'Alice', address : 'Atlanta'},
        {name:'Cthulu', address : 'Pacific'}
    ]

// const modifiedPersons = [
//     'Daria',
//     ...persons
    
// ];

const noPacifics = persons.filter(addressIsNotPacific);
const noPacificsArrows = persons.filter(person => person.address.toLowerCase() !== 'pacific');
// let modifiedPersons = ['Daria'];
// modifiedPersons.push(...persons);
console.log(noPacificsArrows);
console.log(persons.map(greet));
// console.log(modifiedPersons);