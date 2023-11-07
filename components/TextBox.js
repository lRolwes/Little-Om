import React from 'react'
import Link from 'next/link';
import Header from "./../components/Header.js";


export function TextBox({text1, text2}){
    return(
        <div className = "text-white items-center p-6 rounded-lg text-2xl font-normal font-['GeneralSans-Variable'] bg-orange text-center">
              <p className = "text-center">{text1}</p>
              <p className = "text-center py-3">{text2}</p>
        </div>     
    )
}

export function TextBox2({text1, text2}){
    return(
    <div className = "flex flex-col items-center p-6 rounded-lg text-center text-black text-2xl font-normal font-['GeneralSans-Variable'] bg-darktan border-2 border-slate border-opacity-25 ">
        <img className="w-16 h-16" src="./images/flower.png" alt = 'img4' />
        <p className = "text-center">{text1}</p>
        <p className = "text-center py-3">{text2}</p>
    </div>
    )
}