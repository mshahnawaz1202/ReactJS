
// const element1 = document.createElement('h1')
// element1.textContent = 'Hello Coder'
// element1.class = 'element1'
// element1.id = 'first'
// element1.style.fontSize = '30px'
// element1.style.color = 'red'
// ]
const root = document.querySelector('.root')
// root.append(element1)


// function createElement(tag,attributes,children){
//     const element = document.createElement(tag)
//     element.textContent = children
//     // element.class = attributes.className
//     // element.id = attributes.id;
//     for(const key in attributes){
//         if(key === 'style'){
//             Object.assign(element.style,attributes.style)
//         }
//         else{
//         element[key] = attributes[key]
//         }

//     }
//     return element
// }


// const React = {
//     createElement: function (tag, attributes, children) {
//         const element = document.createElement(tag)
//         element.textContent = children
//         // element.class = attributes.className
//         // element.id = attributes.id;
//         for (const key in attributes) {
//             if (key === 'style') {
//                 Object.assign(element.style, attributes.style)
//             }
//             else {
//                 element[key] = attributes[key]
//             }

//         }
//         return element
//     }
// }


// const ReactDOM = {
//     render : function(child,parent){
//         parent.append(child)
//     }
// }

const elem1 = React.createElement('h1', { className: 'elemnt1', id: 'first', style: { fontSize: '30px', color: 'white', backgroundColor: 'red' } }, 'Hello Coders')
const elem1 = React.createElement('h2', { className: 'elemnt1', id: 'first', style: { fontSize: '30px', color: 'red', backgroundColor: 'orange' } }, 'Hello Coders')

ReactDOM.render(elem1,root)

