import { convertTransaction } from '../../../converters'
import { accountGel, accountUsd, depositGel, depositUSD } from '../../../tests-common/accounts'
import { adjustTransactions } from '../../../../../common/transactionGroupHandler'
import { ExtendedTransaction } from '../../../../../types/zenmoney'

describe('convertTransaction', () => {
  it.each([
    [ // USD to GEL exchange FOREX
      {
        usdTransaction: JSON.parse(`{
          "accountKey": "11795582401",
          "entryId": "95754374260",
          "docKey": 27282583809,
          "clientKey": "154925928",
          "language": "EN",
          "sourceEntryGroup": "OUT TRANSFER",
          "nomination": " Payment - Amount USD184.30; Foreign Exchange. FX Rate:2.713. Counter-amount: GEL500.. Conversion",
          "postDate": "2025-05-13T00:00:00",
          "operationDate": "2025-05-13T00:00:00",
          "amount": "184.3",
          "oppositeAmount": "-184.3",
          "ccy": "USD",
          "canCopy": "N",
          "status": "P",
          "nominationOriginal": "Foreign Exchange. FX Rate:2.713. Counter-amount: GEL500.. Conversion",
          "prodGroup": "CCO",
          "entryType": "CCO",
          "printSwift": "N",
          "isInternalOperation": "Y",
          "counterPartyClient": "154925928",
          "entryGroupNameId": "2",
          "groupImageId": "35623076",
          "groupImageIdSolo": "3127030252",
          "groupImageIdWm": "3127057166",
          "hasTransferBack": "N",
          "printFormType": "OUT_TRANSFER",
          "printForm": "Y",
          "entryGroupDValue": "text.entry.group.name.Currency.Exchange",
          "operationTitle": "Foreign Exchange. FX Rate:2.713. Counter-amount: GEL500.. Conversion",
          "sort": [
            "99999999999999",
            "99999999999",
            "99999999999"
          ],
          "isStatementAllowed": true,
          "trIdentifierForPostBnpl": "27282583809",
          "isTransactionForPostBnpl": "N",
          "pfmId": "95754374260",
          "pfmCatId": "0",
          "pfmCatName": "text.pfm.parent.category.no.category"
        }`),
        gelTransaction: JSON.parse(`{
        	"accountKey": "11795582400",
          "entryId": "95754374256",
          "docKey": 27282583809,
          "clientKey": "154925928",
          "language": "EN",
          "sourceEntryGroup": "IN TRANSFER",
          "nomination": " Income - Amount GEL500.00; Foreign Exchange. FX Rate:2.713. Counter-amount: USD184.3. Conversion",
          "postDate": "2025-05-13T00:00:00",
          "operationDate": "2025-05-13T00:00:00",
          "amount": "-500.0",
          "oppositeAmount": "500.0",
          "ccy": "GEL",
          "canCopy": "N",
          "status": "P",
          "nominationOriginal": "Foreign Exchange. FX Rate:2.713. Counter-amount: USD184.3. Conversion",
          "prodGroup": "CCO",
          "entryType": "CCO",
          "printSwift": "N",
          "isInternalOperation": "Y",
          "counterPartyClient": "154925928",
          "entryGroupNameId": "2",
          "groupImageId": "35623076",
          "groupImageIdSolo": "3127030252",
          "groupImageIdWm": "3127057166",
          "hasTransferBack": "N",
          "printFormType": "IN_TRANSFER",
          "printForm": "Y",
          "entryGroupDValue": "text.entry.group.name.Currency.Exchange",
          "operationTitle": "Foreign Exchange. FX Rate:2.713. Counter-amount: USD184.3. Conversion",
          "sort": [
            "99999999999999",
            "99999999999",
            "99999999999"
          ],
          "isStatementAllowed": true,
          "trIdentifierForPostBnpl": "27282583809",
          "isTransactionForPostBnpl": "N",
          "pfmId": "95754374256",
          "pfmCatId": "630",
          "pfmCatName": "text.pfm.child.category.internal.money.transfer",
          "pfmParentCatId": "590"
        }`)
      },
      [
        {
          comment: null,
          date: new Date('2025-05-13T00:00:00.000+04:00'),
          hold: false,
          merchant: null,
          movements: [
            {
              account: {
                id: '1338'
              },
              fee: 0,
              id: '95754374260',
              invoice: null,
              sum: -184.3
            },
            {
              account: {
                id: '1337'
              },
              fee: 0,
              id: '95754374256',
              invoice: null,
              sum: 500
            }
          ]
        }
      ]
    ]
  ])('converts inner IN OUT transfer (Foreign Exchange)', ({ gelTransaction, usdTransaction }, transactions) => {
    expect(adjustTransactions({
      transactions: [
        convertTransaction(gelTransaction, accountGel),
        convertTransaction(usdTransaction, accountUsd)
      ] as ExtendedTransaction[]
    })).toEqual(transactions)
  })
})

describe('convertTransaction', () => {
  it.each([ // GEL to USD exchange FOREX 
    [
      {
        usdTransaction: JSON.parse(`{
          "accountKey": "11795582401",
          "entryId": "101771743267",
          "docKey": 29108935237,
          "clientKey": "154925928",
          "language": "EN",
          "sourceEntryGroup": "IN TRANSFER",
          "nomination": " Income - Amount USD3.67; Foreign Exchange. FX Rate:2.724. Counter-amount: GEL10.. Conversion",
          "postDate": "2025-09-02T00:00:00",
          "operationDate": "2025-09-02T00:00:00",
          "amount": "-3.67",
          "oppositeAmount": "3.67",
          "ccy": "USD",
          "canCopy": "N",
          "status": "A",
          "nominationOriginal": "Foreign Exchange. FX Rate:2.724. Counter-amount: GEL10.. Conversion",
          "prodGroup": "CCO",
          "entryType": "CCO",
          "printSwift": "N",
          "isInternalOperation": "Y",
          "counterPartyClient": "154925928",
          "entryGroupNameId": "2",
          "groupImageId": "35623076",
          "groupImageIdSolo": "3127030252",
          "groupImageIdWm": "3127057166",
          "hasTransferBack": "N",
          "printFormType": "IN_TRANSFER",
          "printForm": "Y",
          "entryGroupDValue": "text.entry.group.name.Currency.Exchange",
          "operationTitle": "Foreign Exchange. FX Rate:2.724. Counter-amount: GEL10.. Conversion",
          "sort": [
            "99999999999999",
            "99999999999",
            "99999999999"
          ],
          "isStatementAllowed": true,
          "trIdentifierForPostBnpl": "29108935237",
          "isTransactionForPostBnpl": "N"
        }`),
        gelTransaction: JSON.parse(`{
          "accountKey": "11795582400",
          "entryId": "101771743261",
          "docKey": 29108935237,
          "clientKey": "154925928",
          "language": "EN",
          "sourceEntryGroup": "OUT TRANSFER",
          "nomination": " Payment - Amount GEL10.00; Foreign Exchange. FX Rate:2.724. Counter-amount: USD3.67. Conversion",
          "postDate": "2025-09-02T00:00:00",
          "operationDate": "2025-09-02T00:00:00",
          "amount": "10.0",
          "oppositeAmount": "-10.0",
          "ccy": "GEL",
          "canCopy": "N",
          "status": "A",
          "nominationOriginal": "Foreign Exchange. FX Rate:2.724. Counter-amount: USD3.67. Conversion",
          "prodGroup": "CCO",
          "entryType": "CCO",
          "printSwift": "N",
          "isInternalOperation": "Y",
          "counterPartyClient": "154925928",
          "entryGroupNameId": "2",
          "groupImageId": "35623076",
          "groupImageIdSolo": "3127030252",
          "groupImageIdWm": "3127057166",
          "hasTransferBack": "N",
          "printFormType": "OUT_TRANSFER",
          "printForm": "Y",
          "entryGroupDValue": "text.entry.group.name.Currency.Exchange",
          "operationTitle": "Foreign Exchange. FX Rate:2.724. Counter-amount: USD3.67. Conversion",
          "sort": [
            "99999999999999",
            "99999999999",
            "99999999999"
          ],
          "isStatementAllowed": true,
          "trIdentifierForPostBnpl": "29108935237",
          "isTransactionForPostBnpl": "N"
        }`)
      },
      [
        {
          comment: null,
          date: new Date('2025-09-02T00:00:00.000+04:00'),
          hold: false,
          merchant: null,
          movements: [
            {
              account: {
                id: '1337'
              },
              fee: 0,
              id: '101771743261',
              invoice: null,
              sum: -10
            },
            {
              account: {
                id: '1338'
              },
              fee: 0,
              id: '101771743267',
              invoice: null,
              sum: 3.67
            }
          ]
        }
      ]
    ]
  ])('converts inner OTHER transfer (Foreign Exchange)', ({ gelTransaction, usdTransaction }, transactions) => {
    expect(adjustTransactions({
      transactions: [
        convertTransaction(gelTransaction, accountGel),
        convertTransaction(usdTransaction, accountUsd)
      ] as ExtendedTransaction[]
    })).toEqual(transactions)
  })
})

describe('convertTransaction', () => {
  it.each([
    [ // placing GEL on deposit - THIS TEST MIGHT BE INACCURATE
      {
        cardTransactions: [
          {
            accountKey: '11578997519',
            entryId: '50975846237',
            docKey: 13363643144,
            clientKey: '154925928',
            language: 'EN',
            sourceEntryGroup: 'OTHER',
            nomination: ' Payment - Amount GEL50.00; Placing funds on deposit ',
            postDate: '2022-05-20T00:00:00',
            operationDate: '2022-05-20T00:00:00',
            amount: '50.0',
            oppositeAmount: '-50.0',
            ccy: 'GEL',
            canCopy: 'N',
            status: 'P',
            nominationOriginal: 'Placing funds on deposit ',
            prodGroup: 'CDS',
            entryType: 'CDS',
            printSwift: 'N',
            isInternalOperation: 'Y',
            entryGroupNameId: '10',
            groupImageId: '35623079',
            groupImageIdSolo: '3127030252',
            groupImageIdWm: '3127057166',
            hasTransferBack: 'N',
            printFormType: 'OTHER',
            printForm: 'Y',
            entryGroupDValue: 'text.entry.group.name.Interest.Accrue',
            operationTitle: 'Accumulative Deposit',
            sort: [
              '99999999999999',
              '99999999999',
              '99999999999'
            ],
            isStatementAllowed: true,
            trIdentifierForPostBnpl: '13363643144',
            isTransactionForPostBnpl: 'N',
            pfmId: '5077529897',
            pfmCatId: '630',
            pfmCatName: 'text.pfm.child.category.internal.money.transfer',
            pfmParentCatId: '590'
          }
        ],
        depositTransactions: [
          {
            accountKey: '11579131107',
            entryId: '50975846236',
            docKey: 13363643144,
            clientKey: '154925928',
            language: 'EN',
            sourceEntryGroup: 'IN TRANSFER',
            nomination: ' Income - Amount GEL50.00; Placing funds on deposit ',
            postDate: '2022-05-20T00:00:00',
            operationDate: '2022-05-20T00:00:00',
            amount: '-50.0',
            oppositeAmount: '50.0',
            ccy: 'GEL',
            canCopy: 'N',
            status: 'P',
            nominationOriginal: 'Placing funds on deposit ',
            prodGroup: 'CDS',
            entryType: 'CDS',
            printSwift: 'N',
            isInternalOperation: 'Y',
            entryGroupNameId: '5',
            groupImageId: '35623078',
            groupImageIdSolo: '3127030252',
            groupImageIdWm: '3127057166',
            hasTransferBack: 'N',
            printFormType: 'IN_TRANSFER',
            printForm: 'Y',
            entryGroupDValue: 'text.entry.group.name.Income',
            operationTitle: 'Accumulative Deposit',
            sort: [
              '99999999999999',
              '99999999999',
              '99999999999'
            ],
            isStatementAllowed: true,
            trIdentifierForPostBnpl: '13363643144',
            isTransactionForPostBnpl: 'N',
            pfmId: '50975846236',
            pfmCatId: '630',
            pfmCatName: 'text.pfm.child.category.internal.money.transfer',
            pfmParentCatId: '590'
          }
        ]
      },
      [
        {
          comment: null,
          date: new Date('2022-05-20T00:00:00.000+04:00'),
          hold: false,
          merchant: null,
          movements: [
            {
              account: {
                id: '1337'
              },
              fee: 0,
              id: '50975846237',
              invoice: null,
              sum: -50
            },
            {
              account: {
                id: '1339'
              },
              fee: 0,
              id: '50975846236',
              invoice: null,
              sum: 50
            }
          ]
        }
      ]
    ]
  ])('converts inner transfer to deposit', ({ cardTransactions, depositTransactions }, transactions) => {
    expect(adjustTransactions({
      transactions: [
        ...cardTransactions.map(cardTransaction => convertTransaction(cardTransaction, accountGel)).filter(x => x != null) as ExtendedTransaction[],
        ...depositTransactions.map(depositTransaction => convertTransaction(depositTransaction, depositGel)).filter(x => x != null) as ExtendedTransaction[]
      ]
    })).toEqual(transactions)
  })
})

describe('convertTransaction', () => {
  it.each([
    [ // placing USD on deposit - THIS TEST MIGHT BE INACCURATE
      {
        cardTransactions: [
          {
            accountKey: '11573059596',
            entryId: '56344273885',
            docKey: 14989955407,
            clientKey: '154925928',
            language: 'EN',
            sourceEntryGroup: 'OUT TRANSFER',
            nomination: ' Payment - Amount USD3,000.00; Beneficiary: ANTON ANTONOV; Account: GE34BG0000000537046615USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
            postDate: '2022-11-03T00:00:00',
            operationDate: '2022-11-03T00:00:00',
            amount: '3000.0',
            oppositeAmount: '-3000.0',
            ccy: 'USD',
            canCopy: 'Y',
            status: 'A',
            nominationOriginal: 'Outgoing Transfer - Amount: USD3,000.00; Beneficiary: ANTON ANTONOV; Account: GE34BG0000000537046615USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
            prodGroup: 'PMI',
            entryType: 'PMI',
            printSwift: 'N',
            isInternalOperation: 'Y',
            entryGroupNameId: '6',
            groupImageId: '35623084',
            groupImageIdSolo: '3127030252',
            groupImageIdWm: '3127057166',
            hasTransferBack: 'N',
            printFormType: 'OUT_TRANSFER',
            printForm: 'Y',
            entryGroupDValue: 'text.entry.group.name.Transfer',
            operationTitle: 'ANTON ANTONOV',
            sort: [
              '99999999999999',
              '99999999999',
              '99999999999'
            ],
            isStatementAllowed: true,
            trIdentifierForPostBnpl: '14989955407',
            isTransactionForPostBnpl: 'N',
            pfmId: '6350238832',
            pfmCatId: '630',
            pfmCatName: 'text.pfm.child.category.internal.money.transfer',
            pfmParentCatId: '590'
          }
        ],
        depositTransactions: [
          {
            accountKey: '11578607953',
            entryId: '56344273884',
            docKey: 14989955407,
            clientKey: '154925928',
            language: 'EN',
            sourceEntryGroup: 'IN TRANSFER',
            nomination: ' Income - Amount USD3,000.00; Sender: გარიპოვა ქსენიია; Account: GE82BG0000000534096272USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
            postDate: '2022-11-03T00:00:00',
            operationDate: '2022-11-03T00:00:00',
            amount: '-3000.0',
            oppositeAmount: '3000.0',
            ccy: 'USD',
            canCopy: 'N',
            status: 'A',
            nominationOriginal: 'Incoming Transfer - Amount: USD3,000.00; Sender: გარიპოვა ქსენიია; Account: GE82BG0000000534096272USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
            prodGroup: 'PMI',
            entryType: 'PMI',
            printSwift: 'N',
            isInternalOperation: 'Y',
            entryGroupNameId: '5',
            groupImageId: '35623078',
            groupImageIdSolo: '3127030252',
            groupImageIdWm: '3127057166',
            hasTransferBack: 'Y',
            printFormType: 'IN_TRANSFER',
            printForm: 'Y',
            entryGroupDValue: 'text.entry.group.name.Income',
            operationTitle: 'გარიპოვა ქსენიია',
            sort: [
              '99999999999999',
              '99999999999',
              '99999999999'
            ],
            isStatementAllowed: true,
            trIdentifierForPostBnpl: '14989955407',
            isTransactionForPostBnpl: 'N',
            pfmId: '6350289939',
            pfmCatId: '630',
            pfmCatName: 'text.pfm.child.category.internal.money.transfer',
            pfmParentCatId: '590'
          }
        ]
      },
      [
        {
          date: new Date('2022-11-03T00:00:00.000+04:00'),
          hold: false,
          merchant: null,
          movements: [
            {
              account: {
                id: '1338'
              },
              fee: 0,
              id: '56344273885',
              invoice: null,
              sum: -3000
            },
            {
              account: {
                id: '1340'
              },
              fee: 0,
              id: '56344273884',
              invoice: null,
              sum: 3000
            }
          ],
          // comment: 'Transfer to Deposit' // TODO: add comment
          comment: null
        }
      ]
    ]
  ])('converts inner transfer to deposit', ({ cardTransactions, depositTransactions }, transactions) => {
    expect(adjustTransactions({
      transactions: [
        ...cardTransactions.map(cardTransaction => convertTransaction(cardTransaction, accountUsd)).filter(x => x != null) as ExtendedTransaction[],
        ...depositTransactions.map(depositTransaction => convertTransaction(depositTransaction, depositUSD)).filter(x => x != null) as ExtendedTransaction[]
      ]
    })).toEqual(transactions)
  })
})
