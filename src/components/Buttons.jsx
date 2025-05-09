function Button({
    chidren,
    type='button',
    bgColor='bg-blue-500',
    textColor='text-white',
    className='',
    ...props

}) {
  return (
    <>
     <button
        type={type}
        className={`px-4 py-2 rounded ${bgColor} ${textColor} ${className}`}
        {...props}
      >
        {chidren}
      </button>
    </>
  );
}

export default Button;
