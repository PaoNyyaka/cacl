import React, { useState } from 'react'

function Calculator () {

    const [result, setResults] = useState('');

    const clickHandle = (el) => {
        setResults(result.concat(el.target.value));
    }

    const clearScr = () => {
        setResults('');
    }

    const calc = () => {
        setResults(eval(result).toString());
    }
    
    return (
        <div className=' conteiner bg-gray-800 text-white w-screen h-screen flex justify-center items-center'>
            <div className='main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100'>
                <div className='screen p-2'>
                    <input type="text" value={result} className='text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 rounded-lg bg-gray-100 text-2xl pt-10 outline-none text-right'
                    placeholder='0' />
                </div>
                <div className="brand bg-gray-200 bg-opacity-90 mb-2">
                    <h1 className='text-gray-900 text-xs font-bold text-center'>Calculater</h1>
                </div>
                <div className="keyword">
                    <div className="flex justify-between m-2">
                        <input type="button" onClick={clearScr} value='C' className='bg-red-300 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='<' className='bg-gray-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='%' className='bg-gray-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='/' className='bg-pink-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />    
                    </div>
                    <div className="flex justify-between m-2">
                        <input type="button" onClick={clickHandle} value='7' className='bg-gray-300 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='8' className='bg-gray-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='9' className='bg-gray-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='*' className='bg-green-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />    
                    </div>
                    <div className="flex justify-between m-2">
                        <input type="button" onClick={clickHandle} value='4' className='bg-gray-300 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='5' className='bg-gray-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='6' className='bg-gray-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='-' className='bg-blue-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />    
                    </div>
                    <div className="flex justify-between m-2">
                        <input type="button" onClick={clickHandle} value='1' className='bg-gray-300 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='2' className='bg-gray-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='3' className='bg-gray-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='+' className='bg-purple-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />    
                    </div>
                    <div className="flex justify-between m-2">
                        <input type="button" onClick={clickHandle} value='0' className='bg-gray-300 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='00' className='bg-gray-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={clickHandle} value='.' className='bg-gray-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                        <input type="button" onClick={calc} value='=' className='bg-orange-200 shad-md w-12 h-12 rounded-lg text-center text-black font-medium' />    
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default Calculator;
