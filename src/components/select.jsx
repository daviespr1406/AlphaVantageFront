import React from "react";

export function Select({ children, ...props }) {
    return (
        <select
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...props}
        >
            {children}
        </select>
    );
}

export function SelectTrigger({ children }) {
    return <>{children}</>;
}

export function SelectValue({ placeholder }) {
    return <option disabled selected>{placeholder}</option>;
}

export function SelectContent({ children }) {
    return <>{children}</>;
}

export function SelectItem({ value, children }) {
    return <option value={value}>{children}</option>;
}
