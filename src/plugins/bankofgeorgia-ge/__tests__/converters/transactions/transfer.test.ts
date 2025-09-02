import { convertTransaction } from '../../../converters'
import { accountGel, accountUsd } from '../../../tests-common/accounts'

describe('convertTransaction', () => {
  it.each([
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11570661145',
        entryId: '49706961903',
        docKey: 12979175436,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'IN TRANSFER',
        nomination: ' Income - Amount GEL50.00; Sender: anton antonov, RU,754991234; Account: GE55TB7489445064400001; Bank: JSC TBC Bank TBCBGE22; Details: pay',
        postDate: '2022-04-04T00:00:00',
        operationDate: '2022-04-04T00:00:00',
        amount: '-50.0',
        oppositeAmount: '50.0',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Incoming Transfer - Amount: GEL50.00; Sender: anton antonov, RU,754991234; Account: GE55TB7489445064400001; Bank: JSC TBC Bank TBCBGE22; Details: pay',
        prodGroup: 'PMD',
        entryType: 'PMD',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '5',
        groupImageId: '35623078',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'Y',
        printFormType: 'IN_TRANSFER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Income',
        operationTitle: 'anton antonov, RU,754991234',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '12979175436',
        isTransactionForPostBnpl: 'N',
        pfmId: '4743092543',
        pfmCatId: '900',
        pfmCatName: 'text.pfm.child.category.incoming.transfer',
        pfmParentCatId: '840'
      },
      accountGel,
      {
        comment: 'pay',
        date: new Date('2022-04-04T00:00:00.000+04:00'),
        hold: false,
        merchant: {
          country: null,
          city: null,
          title: 'anton antonov, RU,754991234',
          location: null,
          mcc: null
        },
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '49706961903',
            invoice: null,
            sum: 50
          },
          {
            account: {
              company: null,
              instrument: 'GEL',
              syncIds: null,
              type: 'ccard'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: -50
          }
        ],
        groupKeys: [
          '12979175436'
        ]
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11570661145',
        entryId: '49606046063',
        docKey: 12948761956,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OUT TRANSFER',
        nomination: ' Payment - Amount GEL10.00; Beneficiary: ANTONOV ANTON; Account: GE02BG0000000528336203GEL; Bank: JSC Bank of Georgia BAGAGE22; Details: Private transfer',
        postDate: '2022-03-31T00:00:00',
        operationDate: '2022-03-31T00:00:00',
        amount: '10.0',
        oppositeAmount: '-10.0',
        ccy: 'GEL',
        canCopy: 'Y',
        status: 'P',
        nominationOriginal: 'Outgoing Transfer - Amount: GEL10.00; Beneficiary: ANTONOV ANTON; Account: GE02BG0000000528336203GEL; Bank: JSC Bank of Georgia BAGAGE22; Details: Private transfer',
        prodGroup: 'PMD',
        entryType: 'PMD',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '6',
        groupImageId: '35623084',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'OUT_TRANSFER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Transfer',
        operationTitle: 'ANTONOV ANTON',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '12948761956',
        isTransactionForPostBnpl: 'N',
        pfmId: null,
        pfmCatId: null,
        pfmCatName: null,
        pfmParentCatId: null
      },
      accountGel,
      {
        comment: 'Private transfer',
        date: new Date('2022-03-31T00:00:00.000+04:00'),
        hold: false,
        merchant: {
          country: null,
          city: null,
          title: 'ANTONOV ANTON',
          location: null,
          mcc: null
        },
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '49606046063',
            invoice: null,
            sum: -10
          },
          {
            account: {
              company: null,
              instrument: 'GEL',
              syncIds: null,
              type: 'ccard'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 10
          }
        ],
        groupKeys: [
          '12948761956'
        ]
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11572826802',
        entryId: '51619971787',
        docKey: 13549206345,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'IN TRANSFER',
        nomination: ' Income - Amount USD12,540.00; Sender: KAVYOS CONSULTING INC.\\485 C ROUTE 1 SOUTH STE 320\\ISELIN NJ 08830; Account: 9760234853; Bank: LAKELAND BANK\\250 OAK RIDGE ROAD\\OAK RIDGE NJ 07438-8906',
        postDate: '2022-06-10T00:00:00',
        operationDate: '2022-06-10T00:00:00',
        amount: '-12540.0',
        oppositeAmount: '12540.0',
        ccy: 'USD',
        canCopy: 'N',
        status: 'A',
        nominationOriginal: 'Incoming Transfer - Amount: USD12,540.00; Sender: KAVYOS CONSULTING INC.\\485 C ROUTE 1 SOUTH STE 320\\ISELIN NJ 08830; Account: 9760234853; Bank: LAKELAND BANK\\250 OAK RIDGE ROAD\\OAK RIDGE NJ 07438-8906',
        prodGroup: 'PMI',
        entryType: 'PMI',
        printSwift: 'Y',
        isInternalOperation: 'N',
        entryGroupNameId: '5',
        groupImageId: '35623078',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'IN_TRANSFER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Income',
        operationTitle: 'KAVYOS CONSULTING INC.\\485 C ROUTE 1 SOUTH STE 320\\ISELIN NJ 08830',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '13549206345',
        isTransactionForPostBnpl: 'N',
        pfmId: '5230286972',
        pfmCatId: '900',
        pfmCatName: 'text.pfm.child.category.incoming.transfer',
        pfmParentCatId: '840'
      },
      accountUsd,
      {
        comment: null,
        date: new Date('2022-06-10T00:00:00.000+04:00'),
        hold: false,
        merchant: {
          country: null,
          city: null,
          title: 'KAVYOS CONSULTING INC.\\485 C ROUTE 1 SOUTH STE 320\\ISELIN NJ 08830',
          location: null,
          mcc: null
        },
        movements: [
          {
            account: { id: '1338' },
            fee: 0,
            id: '51619971787',
            invoice: null,
            sum: 12540
          },
          {
            account: {
              company: null,
              instrument: 'USD',
              syncIds: null,
              type: 'ccard'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: -12540
          }
        ],
        groupKeys: [
          '13549206345'
        ]
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11570838920',
        entryId: '49226052703',
        docKey: 12843289926,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount USD3,890.00; Recipient: ANTON ANTONOV; Details: tankhis gatana',
        postDate: '2022-03-16T00:00:00',
        operationDate: '2022-03-16T00:00:00',
        amount: '3890.0',
        oppositeAmount: '-3890.0',
        ccy: 'USD',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Cash withdrawal - Amount: USD3,890.00; Recipient: ANTON ANTONOV; Details: tankhis gatana',
        prodGroup: 'PMC',
        entryType: 'PMC',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '1',
        groupImageId: '35623075',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'OTHER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.withdrawal',
        operationTitle: 'ANTON ANTONOV',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '12843289926',
        isTransactionForPostBnpl: 'N',
        pfmId: '4618152079',
        pfmCatId: '600',
        pfmCatName: 'text.pfm.child.category.cash.withdrawal',
        pfmParentCatId: '590'
      },
      accountUsd,
      {
        date: new Date('2022-03-16T00:00:00.000+04:00'),
        hold: false,
        movements: [
          {
            account: { id: '1338' },
            fee: 0,
            id: '49226052703',
            invoice: null,
            sum: -3890
          },
          {
            account: {
              company: null,
              instrument: 'USD',
              syncIds: null,
              type: 'cash'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 3890
          }
        ],
        merchant: {
          country: null,
          city: null,
          title: 'ANTON ANTONOV',
          location: null,
          mcc: null
        },
        comment: 'Cash withdrawal'
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11573059596',
        entryId: '14027011598',
        docKey: 14027011598,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OUT TRANSFER',
        nomination: ' Payment - Amount USD600.00; Details: Private Transfer',
        postDate: '2022-08-01T00:00:00',
        operationDate: '2022-08-01T00:00:00',
        amount: '600.0',
        oppositeAmount: '-600.0',
        ccy: 'USD',
        canCopy: 'N',
        status: 'F',
        nominationOriginal: 'Private Transfer',
        prodGroup: 'PMI',
        entryType: 'PMI',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '6',
        groupImageId: '35623084',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'OUT_TRANSFER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Transfer',
        operationTitle: 'Private Transfer',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '14027011598',
        isTransactionForPostBnpl: 'N',
        pfmId: null,
        pfmCatId: null,
        pfmCatName: null,
        pfmParentCatId: null
      },
      accountUsd,
      {
        date: new Date('2022-08-01T00:00:00.000+04:00'),
        hold: true,
        movements: [
          {
            account: { id: '1338' },
            fee: 0,
            id: '14027011598',
            invoice: null,
            sum: -600
          },
          {
            account: {
              company: null,
              instrument: 'USD',
              syncIds: null,
              type: 'ccard'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 600
          }
        ],
        merchant: null,
        comment: 'Private Transfer'
      }
    ]
  ])('converts transfer', (apiTransaction, account, transaction) => {
    expect(convertTransaction(apiTransaction, account)).toEqual(transaction)
  })
})
