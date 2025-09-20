import React, { useState, useEffect, use } from 'react';
import axios from 'axios';

function AlphaVantage(){
    const [funcion, setFuncion] = useState('daily');
    const funciones = ['intraday', 'daily', 'weekly', 'monthly'];
    const [symbol, setSimbol] = useState('IBM')

    const handleFuncion= () => {

        axios.post('alphavantage-faaccxfka8hhdjcb.canadacentral-01.azurewebsites.net/api?function=${funcion}&url=https://www.alphavantage.co/query?function=${funcion}&symbol={symbol}', null, {
        })
            .then(response => {
                setFuncion(response.data);
            })
            .catch(() => {
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
            <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Order</h1>


                <div className="mb-6">
                    <label htmlFor="funcion" className="block text-sm font-medium text-gray-700 mb-1">Select function</label>
                    <select
                        id="funcion"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={funcion}
                        onChange={(e) => setFuncion(e.target.value)}
                    >
                        {funciones.map((functionOption) => (
                            <option key={functionOption} value={functionOption}>
                                {functionOption.charAt(0).toUpperCase() + functionOption.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                        
                <div>
                    <label htmlFor="symbol" className="block text-sm font-medium text-gray-700 mb-1">Select Symbol</label>
                    <input
                        id="symbol"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={symbol}
                        onChange={(e) => setFuncion(e.target.value)}></input>

                </div>
                <br></br>

                <button
                    onClick={handleFuncion}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                > Submit
                </button>

                {funcion && (
                    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Order</h2>
                        <p className="mt-4 text-sm text-green-600">Order placed successfully!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default  AlphaVantage;
