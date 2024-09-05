import React, { useState } from 'react';

const FilterBar = ({ onStyleChange }) => {
    const [selectedStyles, setSelectedStyles] = useState([]);

    const handleStyleChange = (style) => {
        let updatedStyles = [];
        if (selectedStyles.includes(style)) {
            updatedStyles = selectedStyles.filter((s) => s !== style);
        } else {
            updatedStyles = [...selectedStyles, style];
        }
        setSelectedStyles(updatedStyles);
        onStyleChange(updatedStyles);
    };

    const styles = [
        { label: 'Espresso', value: 'espresso' },
        { label: 'Latte', value: 'latte' },
        { label: 'Cappuccino', value: 'cappuccino' },
        { label: 'Mocha', value: 'mocha' },
        { label: 'Drip', value: 'drip' },
        { label: 'Cold Brew', value: 'coldBrew' },
        { label: 'Tea', value: 'tea' },
        { label: 'Fruit', value: 'fruit' },
        { label: 'Spiced', value: 'spiced' },
    ];

    return (
        <div className="space-y-4">
            {styles.map((style) => (
                <label
                    key={style.value}
                    className="flex items-center space-x-3 cursor-pointer group"
                >
                    <input
                        type="checkbox"
                        value={style.value}
                        checked={selectedStyles.includes(style.value)}
                        onChange={() => handleStyleChange(style.value)}
                        className="appearance-none h-5 w-5 border border-[#B8916B] rounded-md bg-white checked:bg-[#B8916B] checked:border-transparent transition duration-300 group-hover:ring group-hover:ring-[#B8916B]"
                    />
                    <span className="text-gray-700 group-hover:text-[#B8916B] transition duration-300">
                        {style.label}
                    </span>
                </label>
            ))}
        </div>
    );
};

export default FilterBar;