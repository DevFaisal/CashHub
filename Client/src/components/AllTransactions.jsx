import AmountTable from './AmountTable';


function AllTransactions() {
    return (
        <>
            <div className='h-screen md:p-10'>
                <div className='bg-[#457B9D] h-auto p-3 rounded-md'>
                    <h1 className='text-4xl font-semibold'>Transactions</h1>
                    <div className='md:flex justify-betwee'>
                        <AmountTable type="income" color="green" />
                        <AmountTable type="expense" color="red" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllTransactions