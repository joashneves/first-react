import React from 'react';


const Box = (props) => {

    const combinedClass = `${props.class} Box`;

  return (<article className={combinedClass}>
    <img src={props.imagem} alt="Imagem" />
    <h1 >{props.title} </h1>
    <div><p>{props.content}</p></div>
    <button className='More'>Learn More</button>
    </article>);
};


const More = (props) =>{
    return <button className='More'>Learn More</button>
}

export { Box, More };
