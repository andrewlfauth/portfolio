function CursorToggle({ onClick }: { onClick: () => void }) {
  return (
    <li>
      <button
        onClick={onClick}
        className='flex items-center justify-center rounded-lg border-2 border-gray-800 w-12 h-12 bg-neutral-900'
      >
        <div className='w-8 h-8 border-2 border-neutral-700 absolute rounded-full'></div>
        <div className='w-3 h-3 bg-gray-300 absolute rounded-full'></div>
      </button>
      <button
        onClick={onClick}
        className='flex items-center justify-center rounded-lg border-2 border-gray-800 w-12 h-12 bg-neutral-900'
      >
        <div className='w-8 h-8 border-2 border-mat-purple absolute rounded-full'></div>
        <div className='w-3 h-3 bg-mat-green absolute rounded-full'></div>
      </button>
    </li>
  )
}

// const Button = ({ onClick }: { onClick: () => void }) => {
//   <button
//     onClick={onClick}
//     className='flex items-center justify-center rounded-lg border-2 border-gray-800 w-12 h-12 bg-neutral-900'
//   >
//     <div className='w-8 h-8 border-2 border-neutral-700 absolute rounded-full'></div>
//     <div className='w-3 h-3 bg-gray-300 absolute rounded-full'></div>
//   </button>
// }

export default CursorToggle
