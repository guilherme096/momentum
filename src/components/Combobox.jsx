import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function TrainingCombobox({ items, label, onChange, dropdownStyle}) {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    const [isOpen, setIsOpen] = useState(false);
    const comboboxRef = useRef(null);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        onToggle(!isOpen); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={comboboxRef}>
            <label>{label}</label>
            <Combobox value={selectedItem} onChange={(item) => {
                setSelectedItem(item);
            }}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
                        onClick={() => setIsOpen(!isOpen)}>
                        <span className="block w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900">{selectedItem.name}</span>
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </Combobox.Button>
                    </div>
                    <Transition
                        show={isOpen}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setIsOpen(false)}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm" style={dropdownStyle}>
                            {items.map((item) => (
                                <Combobox.Option
                                    key={item.id}
                                    className={({ selected, active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${selected ? 'bg-teal-600 text-white' : 'text-gray-900'}`
                                    }
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                {item.name}
                                            </span>
                                            {selected && (
                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3`}>
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}

export default TrainingCombobox;
