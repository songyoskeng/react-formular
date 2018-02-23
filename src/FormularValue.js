import React, { Component } from 'react';
const FormularValue = ({num}) => {
    let set = [];
    for(var i = 1;i <= 12;i++){
        set.push(i)
    }
    return (
        <div>
            {
                set.map((value,idx)=>{
                    return (
                        <div key={idx}>
                            {num} x {value} = {num * value}
                            <br/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FormularValue;