import React from "react";

export function Button({ className = "", children, ...props }) {
    return (
        <button
            className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
