import React from 'react';

type props = {
	inputProps: React.HTMLProps<HTMLInputElement>;
	label: string;
	disable?: boolean;
	value?: string | undefined | string[];
};

const Input = ({ inputProps, label, disable, value }: props) => {
	return (
		<label
			className={`relative w-full block bg-white my-4 px-3 pt-3   overflow-hidden rounded-md border border-gray-200 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary${
				disable ? ` bg-gray-200` : ``
			}`}
		>
			<input
				value={value}
				dir="auto"
				{...inputProps}
				// defaultValue={inputProps.value ?? ''}
				className={`peer h-8 w-full border-none text-fourth bg-transparent p-0 placeholder-transparent focus:border-transparent  focus:outline-none focus:ring-0 sm:text-sm `}
			/>

			<span
				className={`absolute start-3 top-3 -translate-y-1/2 text-xs   text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs `}
			>
				{label}
			</span>
		</label>
	);
};

export default Input;
