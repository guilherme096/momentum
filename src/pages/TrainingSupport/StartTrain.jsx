import PageLayout from '../../layouts/PageLayout';
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Link } from "react-router-dom";


const people = [
    { id: 0, name: 'None' },
    { id: 1, name: 'Full Body' },
    { id: 2, name: 'Upper Body' },
    { id: 3, name: 'Lower Body' },
    { id: 4, name: 'Bicep' },
    { id: 5, name: 'Tricep' },
    { id: 6, name: 'Leg' },
    { id: 7, name: 'Chest' },
    { id: 8, name: 'Calisthenics' }
];

export default function StartTrain() {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const [query, setQuery] = useState('');

    const filteredPeople = query === ''
        ? people
        : people.filter((person) =>
            person.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );

    return (
        <PageLayout pageName="Training Support">
            <div className='flex flex-col justify-center align-middle items-center h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='flex justify-center items-center mb-6'>
                    <h1 className='text-4xl font-bold'>New Session</h1>
                </div>
                <div className='pl-5'>
                    <label>
                        <div>
                            Training Preset
                        </div>
                    </label>
                    <div className="w-50">
                        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                            <div className="relative mt-1">
                                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                    <Combobox.Input
                                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none"
                                        displayValue={(person) => person.name}
                                        onChange={(event) => setQuery(event.target.value)}
                                        autoComplete="off"
                                    />
                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </Combobox.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setQuery('')}
                                >
                                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {filteredPeople.length === 0 && query !== '' ? (
                                            <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                                Nothing found.
                                            </div>
                                        ) : (
                                            filteredPeople.map((person) => (
                                                <Combobox.Option
                                                    key={person.id}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'}`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                                {person.name}
                                                            </span>
                                                            {selected ? (
                                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                </Transition>
                            </div>
                        </Combobox>
                    </div>
                    <label className='flex items-center mt-6'>
                        <input type="checkbox" className="checkbox mr-2" />
                        <span>Time this session</span>
                    </label>
                    <div className='pt-10 justify-center flex w-full'>
                        <Link to="/training-support">
                            <button className='btn btn-wide btn-primary mx-auto btn-xl text-white'>Start</button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
