const NotFoundError = () => {
  return (
    <div className='h-[80vh] flex flex-col gap-4 justify-center items-center'>
        <img src="/not_found.svg" alt="not found error" width={600} height={320} />
        <h1 className='text-4xl font-bold'>Oops!</h1>
        <p className='text-base'>We couldn't find the page you were looking for</p>
        <a href="/" className='text-white bg-sky-600 py-2 px-4 rounded-md'>Back to Home</a>
    </div>
  )
}

export default NotFoundError