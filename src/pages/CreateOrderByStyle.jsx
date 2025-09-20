import React, { useState } from 'react';
import axios from 'axios';

function CreateOrderByStyle() {
    const [style, setStyle] = useState('modern');
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const styles = ['modern', 'classic', 'industrial', 'rustic'];
    

    const handleOrder = () => {
        setLoading(true);
        setError(null);

        axios.post('https://ecifurniture-agaueea9ckdubzf4.canadacentral-01.azurewebsites.net/api/orders/style', null, {
        })
            .then(response => {
                setOrder(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Error creating order.');
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
            <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Order by Style</h1>

                {error && <div className="text-center text-lg text-red-500 mb-4">{error}</div>}

                <div className="mb-6">
                    <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-1">Select Style</label>
                    <select
                        id="style"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                    >
                        {styles.map((styleOption) => (
                            <option key={styleOption} value={styleOption}>
                                {styleOption.charAt(0).toUpperCase() + styleOption.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleOrder}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    disabled={loading}
                >
                    {loading ? 'Creating Order...' : 'Create Order'}
                </button>

                {order && (
                    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Order</h2>
                        <p className="mb-2"><strong>Style:</strong> {order.items[0]?.style}</p>
                        <p className="mb-2"><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                        <h3 className="text-lg font-medium mb-2">Items:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {order.items.map((item, index) => (
                                <li key={`${item.type}-${index}`}>{item.type} - {item.style}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-green-600">Order placed successfully!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CreateOrderByStyle;
