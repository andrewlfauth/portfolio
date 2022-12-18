function TestForm() {
  return (
    <div>
      <form name='test' action='post' data-netlify='true'>
        <input type='text' name='name' />
        <input type='hidden' name='test' value='contact' />
        <button type='submit'>CLICK</button>
      </form>
    </div>
  )
}

export default TestForm
