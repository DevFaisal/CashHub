import React from 'react'
import Container from "../components/Container/Container"
import PostTransaction from "../components/PostTransaction";
import GetTransactions from '../components/GetTransactions';
function AllTransactionsPage() {
    return (
        <div>
            <Container>
                <PostTransaction />
                <GetTransactions />
            </Container>
        </div>
    )
}

export default AllTransactionsPage