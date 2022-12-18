function ThemeToggle() {
  const changeTheme = (theme: string) => {
    const html = document.querySelector('html') as HTMLElement
    html.className = theme
  }

  return (
    <div className='absolute bottom-4 left-0 material:bg-green-400'>
      <button onClick={() => changeTheme('material')}>Material</button>
      <button onClick={() => changeTheme('red')}>Red</button>
    </div>
  )
}

export default ThemeToggle
