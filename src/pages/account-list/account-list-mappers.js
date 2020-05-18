export const mapAccountListFromApiToVM = accountList => accountList.map(account => mapAccountFromApiToVM(account));



const mapAccountFromApiToVM = account => {
    return {
        id: account.id,
        iban: account.iban,
        name: account.name,
        balance: `${account.balance} €`,
        lastTransaction: new Date(account.lastTransaction).toLocaleDateString()

    }


}

