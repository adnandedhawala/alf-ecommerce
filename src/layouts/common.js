export const CommonLayout = ({ children }) => {
    return (
        <div className='w-screen min-h-screen py-10 flex flex-col items-center'>
            {
                children
            }
        </div>
    )
}