const color = 'yellow';
if(color === 'green'){
    console.log('you are a green friend');
}
else if(color === 'blue'){
    console.log('you are a blue friend')
}
else if(color === 'red'){
    console.log('you are a red friend');
}
else if(color === 'white'){
    console.log('you are a white friend');
}
else if(color === 'yellow'){
    console.log('you are a yellow friend');
}
else{
    console.log('you are a black friend');
}

switch(color){
    case 'green':
        console.log('you are a green friend');
        break;
        case 'red':
        console.log('you are a red friend');
        case 'white':
        console.log('you are a white friend');
        case 'black':
        console.log('you are a black friend');
}