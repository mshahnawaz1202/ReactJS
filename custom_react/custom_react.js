   

function customRender(element,root){
    // const domElement = document.createElement(element.type);
    // domElement.innerHTML =  element.children;
    // domElement.setAttribute('href',element.props.href);
    // domElement.setAttribute('target',element.props.target);

    // root.appendChild(domElement);


    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
       if(prop === 'children') continue
       domElement.setAttribute(prop,element.props[prop])

        
    }
    root.appendChild(domElement)


}

const element = {
    type : 'a',
    props:{
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit Google'
}

const root = document.querySelector('#root');
console.log(root);


customRender(element,root)


// customRender(what to inject, where inject)






