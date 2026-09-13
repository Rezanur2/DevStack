import React from 'react';

const SelectedStack = () => {
    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm p-4">
            <div className="mb-4">
                <h2 className="text-lg font-bold text-[#0F172A]">
                    Your Stack
                </h2>
                <p className="text-sm text-[#94A3B8] mt-1">
                    No technologies selected yet.
                </p>
            </div>
            <div className="border border-dashed border-[#CBD5E1] rounded-xl h-24 flex items-center justify-center">
                <p className="text-sm text-[#94A3B8]">
                    Your stack is empty.
                </p>
            </div>
        </div>
    );
};

export default SelectedStack;