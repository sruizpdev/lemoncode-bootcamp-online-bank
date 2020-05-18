export const mapMovementListFromApiToVM = (movementList, id) => {
    return movementList.map(movement => mapMovementFromApiToVM(movement)).filter(mov => mov.accountId === id);
}

const mapMovementFromApiToVM = movementList => {
    return {
        id: movementList.id,
        iban: movementList.iban,
        alias: movementList.name,
        description: movementList.description,
        realTransaction: new Date(movementList.realTransaction).toLocaleDateString(),
        transaction: new Date(movementList.transaction).toLocaleDateString(),
        balance: `${movementList.balance} €`,
        amount: `${movementList.amount} €`,
        accountId: movementList.accountId
    }
}