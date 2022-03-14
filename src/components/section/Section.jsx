import React from 'react';

const Section = ({arr, getName}) => {
    console.log(arr);
    let name = "Kate";
    getName(name)
    return (
        <div className='section_divs' style={{minHeight:"80vh"}}>
            <div className='section_left'>
                Section.
                <ul>
                    {arr.map((item, index)=>(
                    <li key={index}>name: {item}
                    </li>))}
                </ul>
            </div>
            <div className='section_right'>
                <img src="https://i.ibb.co/WDRj7Cd/man.png" alt="lll" width={650}/>
            </div>
        </div>
    );
};

export default Section;