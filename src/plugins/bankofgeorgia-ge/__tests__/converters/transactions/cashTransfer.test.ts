import { convertTransaction } from '../../../converters'
import { accountGel, accountUsd, accountEur } from '../../../tests-common/accounts'

describe('convertTransaction', () => {
  it.each([
    [ // cash withdrawal without fee
      JSON.parse(`{
        "accountKey": "11795582400",
        "entryId": "101704273559",
        "docKey": 29088512613,
        "clientKey": "154925928",
        "language": "EN",
        "sourceEntryGroup": "CASH_WITHDRAWAL",
        "nomination": " Withdrawal - Amount: GEL50.00; ATM: Bank of Georgia, Tbilisi, Vazha-Pshavela ave. 42 (Euro); MCC:6011; Date: 01/09/2025 16:21; Card No: ****0474; Payment transaction amount and currency: 50.00 GEL",
        "merchantId": "ATM1EG52",
        "postDate": "2025-09-01T00:00:00",
        "authDate": "01/09/2025 16:21",
        "operationDate": "2025-09-01T00:00:00",
        "amount": "50",
        "oppositeAmount": "-50.0",
        "ccy": "GEL",
        "canCopy": "N",
        "status": "A",
        "merchantName": "საქართველოს ბანკი, თბილისი, ვაჟა-ფშავალას გამზ. 42 (ევრო)",
        "merchantNameInt": "Bank of Georgia, Tbilisi, Vazha-Pshavela ave. 42 (Euro)",
        "nominationOriginal": "Withdrawal - Amount: GEL50.00; ATM: Bank of Georgia, Tbilisi, Vazha-Pshavela ave. 42 (Euro); MCC:6011; Date: 01/09/2025 16:21; Card No: ****0474; Payment transaction amount and currency: 50.00 GEL",
        "prodGroup": "PLC",
        "entryType": "TRN",
        "printSwift": "N",
        "isInternalOperation": "N",
        "entryGroupNameId": "1",
        "groupImageId": "35623075",
        "groupImageIdSolo": "3127030249",
        "groupImageIdWm": "3127057164",
        "hasTransferBack": "N",
        "printFormType": "CASH_WITHDRAWAL",
        "printForm": "Y",
        "entryGroupDValue": "text.entry.group.name.withdrawal",
        "operationTitle": "Bank of Georgia, Tbilisi, Vazha-Pshavela ave. 42 (Euro)",
        "cardLastDigits": "0474",
        "sort": [
          "1756670400000",
          "29088512613",
          "101704273559"
        ],
        "isStatementAllowed": true,
        "trIdentifierForPostBnpl": "29088512613",
        "isTransactionForPostBnpl": "N",
        "bonusType": "PLUS",
        "pfmId": "101704273559",
        "pfmCatId": "600",
        "pfmCatName": "text.pfm.child.category.cash.withdrawal",
        "pfmParentCatId": "590"
      }`),
      {
        comment: 'Cash withdrawal',
        date: new Date('2025-09-01T16:21:00.000+04:00'),
        hold: false,
        merchant: {
          city: "Tbilisi",
          country: null,
          location: null,
          mcc: 6011,
          title: "Bank of Georgia",
        },
        movements: [
           {
            account: {
              id: "1337",
            },
            fee: 0,
            id: "101704273559",
            invoice: null,
            sum: -50,
          },
          {
            account: {
              company: null,
              instrument: "GEL",
              syncIds: null,
              type: "cash",
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 50,
          },
        ]
      }
    ],
    [ // cash withdrawal with fee - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11570661145',
        entryId: '49713923971',
        docKey: 12981475430,
        essId: null,
        nomination: 'Withdrawal - Amount: GEL180.00; ATM: Bank of Georgia, Tbilisi, Metro Didube; MCC:6011; Date: 04/04/2022 14:47; Card No: ****5585; Payment transaction amount and currency: 180.36 GEL',
        entryGroup: null,
        postDate: '2022-04-04T00:00:00',
        authDate: '04/04/2022 14:47', // authDateStr -> authDate
        operationDate: '2022-04-04T00:00:00',
        amount: '180.36',
        oppositeAmount: '-180.36',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'F',
        entryGroupDValue: 'text.entry.group.name.withdrawal', // entryGroupDKey - > entryGroupDValue
        nominationOriginal: 'Withdrawal - Amount: GEL180.00; ATM: Bank of Georgia, Tbilisi, Metro Didube; MCC:6011; Date: 04/04/2022 14:47; Card No: ****5585; Payment transaction amount and currency: 180.36 GEL',
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        isInternalOperation: 'N',
        isStatementAllowed: true,
        operationTitle: 'Bank of Georgia, Tbilisi, Metro Didube',
        pfmId: 4743094293,
        pfmCatId: '600',
        pfmCatName: null,
        pfmParentCatId: '590',
        clientKey: null,
        language: 'EN',
        sourceEntryGroup: null,
        entryGroupNameId: null,
        groupImageId: null,
        groupImageIdSolo: null,
        groupImageIdWm: null,
        printForm: null,
        sort: null,
        trIdentifierForPostBnpl: null,
        isTransactionForPostBnpl: null
      },
      {
        comment: 'Cash withdrawal',
        date: new Date('2022-04-04T14:47:00.000+04:00'),
        hold: true,
        merchant: {
          country: null,
          city: 'Tbilisi',
          title: 'Bank of Georgia',
          location: null,
          mcc: 6011
        },
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: -0.36,
            id: '49713923971',
            invoice: null,
            sum: -180
          },
          {
            account: {
              company: null,
              instrument: 'GEL',
              syncIds: null,
              type: 'cash'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 180
          }
        ]
      }
    ],
    [ // cash deposit
      JSON.parse(`{
        "accountKey": "11795582400",
        "entryId": "101704030043",
        "docKey": 29088417181,
        "clientKey": "154925928",
        "language": "EN",
        "sourceEntryGroup": "IN TRANSFER",
        "nomination": " Income - Amount GEL260.00; Cash deposit via Payment Machine , depositor: Anton Antonov",
        "postDate": "2025-09-01T00:00:00",
        "operationDate": "2025-09-01T00:00:00",
        "amount": "-260.0",
        "oppositeAmount": "260.0",
        "ccy": "GEL",
        "canCopy": "N",
        "status": "A",
        "nominationOriginal": "Cash deposit via Payment Machine , depositor: Anton Antonov",
        "prodGroup": "PBS",
        "entryType": "PBS",
        "printSwift": "N",
        "isInternalOperation": "N",
        "entryGroupNameId": "2",
        "groupImageId": "35623074",
        "groupImageIdSolo": "3127030245",
        "groupImageIdWm": "3127057162",
        "hasTransferBack": "N",
        "printFormType": "CASH_DEPOSIT",
        "printForm": "Y",
        "entryGroupDValue": "text.entry.group.name.Cash.Deposit",
        "operationTitle": "Cash deposit via Payment Machine , depositor: Anton Antonov",
        "sort": [
          "9999999999999",
          "99999999999",
          "999999999999"
        ],
        "isStatementAllowed": true,
        "trIdentifierForPostBnpl": "29088417181",
        "isTransactionForPostBnpl": "N",
        "pfmId": "101704030043",
        "pfmCatId": "900",
        "pfmCatName": "text.pfm.child.category.transfer.in",
        "pfmParentCatId": "840"
      }`),
      {
        comment: 'Cash deposit via Payment Machine , depositor: Anton Antonov',
        date: new Date('2025-09-01T00:00:00.000+04:00'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '101704030043',
            invoice: null,
            sum: 260
          },
          {
            account: {
              company: null,
              instrument: 'GEL',
              syncIds: null,
              type: 'cash'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: -260
          }
        ]
      }
    ],
    [ // cash withdrawal GEL - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11574837328',
        entryId: '51480228938',
        docKey: 13508448330,
        essId: null,
        nomination: 'Withdrawal - Amount: GEL1,000.00; ATM: Bank Of Georgia, Batumi, Zubalashvili st. 18; MCC:6011; Date: 05/06/2022 16:49; Card No: ****6663; Payment transaction amount and currency: 1,000.00 GEL',
        entryGroup: null,
        postDate: '2022-06-05T00:00:00',
        authDate: '05/06/2022 16:49', // authDateStr -> authDate
        operationDate: '2022-06-05T00:00:00',
        amount: '1,000.0',
        oppositeAmount: '-1,000.0',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        entryGroupDValue: 'text.entry.group.name.withdrawal', // entryGroupDKey - > entryGroupDValue
        nominationOriginal: 'Withdrawal - Amount: GEL1,000.00; ATM: Bank Of Georgia, Batumi, Zubalashvili st. 18; MCC:6011; Date: 05/06/2022 16:49; Card No: ****6663; Payment transaction amount and currency: 1,000.00 GEL',
        prodGroup: 'PLC',
        entryType: 'TRN',
        printSwift: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        isInternalOperation: 'N',
        isStatementAllowed: true,
        operationTitle: 'Bank Of Georgia, Batumi, Zubalashvili st. 18',
        pfmId: 5201536918,
        pfmCatId: '600',
        pfmCatName: null,
        pfmParentCatId: '590',
        clientKey: null,
        language: 'EN',
        sourceEntryGroup: null,
        entryGroupNameId: null,
        groupImageId: null,
        groupImageIdSolo: null,
        groupImageIdWm: null,
        printForm: null,
        sort: null,
        trIdentifierForPostBnpl: null,
        isTransactionForPostBnpl: null
      },
      {
        date: new Date('2022-06-05T16:49:00+04:00'),
        hold: false,
        merchant: {
          country: null,
          city: 'Batumi',
          title: 'Bank Of Georgia',
          location: null,
          mcc: 6011
        },
        movements: [
          {
            account: { id: '1337' },
            fee: 0,
            id: '51480228938',
            invoice: null,
            sum: -1000
          },
          {
            account: {
              company: null,
              instrument: 'GEL',
              syncIds: null,
              type: 'cash'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 1000
          }
        ],
        comment: 'Cash withdrawal'
      }
    ],
    [ // cash withdrawal with conversion - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11579166872',
        entryId: '51771269320',
        docKey: 13594067580,
        essId: null,
        nomination: 'Withdrawal - Amount: TRY250.00; ATM: SIDE MANAVGAT SB MANAVG>ANTALYA TR, Turkey; MCC:6011; Date: 15/06/2022 22:09; Card No: ****4499; Payment transaction amount and currency: 52.93 GEL; Bank conversion rate (TRY-GEL): .1762',
        entryGroup: null,
        postDate: '2022-06-15T00:00:00',
        authDate: '15/06/2022 22:09', // authDateStr -> authDate
        operationDate: '2022-06-15T00:00:00',
        amount: '52.93',
        oppositeAmount: '-52.93',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'F',
        entryGroupDValue: 'text.entry.group.name.withdrawal', // entryGroupDKey - > entryGroupDValue
        nominationOriginal: 'Withdrawal - Amount: TRY250.00; ATM: SIDE MANAVGAT SB MANAVG>ANTALYA TR, Turkey; MCC:6011; Date: 15/06/2022 22:09; Card No: ****4499; Payment transaction amount and currency: 52.93 GEL; Bank conversion rate (TRY-GEL): .1762',
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        isInternalOperation: 'N',
        isStatementAllowed: true,
        operationTitle: 'SIDE MANAVGAT SB MANAVG>ANTALYA TR, Turkey',
        pfmId: 5275731173,
        pfmCatId: '600',
        pfmCatName: null,
        pfmParentCatId: '590',
        clientKey: null,
        language: 'EN',
        sourceEntryGroup: null,
        entryGroupNameId: null,
        groupImageId: null,
        groupImageIdSolo: null,
        groupImageIdWm: null,
        printForm: null,
        sort: null,
        trIdentifierForPostBnpl: null,
        isTransactionForPostBnpl: null
      },
      {
        date: new Date('2022-06-15T22:09:00+04:00'),
        hold: true,
        movements: [
          {
            account: { id: '1337' },
            id: '51771269320',
            invoice: { sum: -250, instrument: 'TRY' },
            sum: -52.93,
            fee: 0
          },
          {
            account: {
              company: null,
              instrument: 'TRY',
              syncIds: null,
              type: 'cash'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 250
          }
        ],
        merchant: {
          country: 'Turkey',
          city: 'ANTALYA TR',
          title: 'SIDE MANAVGAT SB MANAVG',
          location: null,
          mcc: 6011
        },
        comment: 'Cash withdrawal'
      }
    ]
  ])('converts cash transfer accountGel', (apiTransaction, transaction) => {
    expect(convertTransaction(apiTransaction, accountGel)).toEqual(transaction)
  })

  it.each([
    [ // USD withdrawal without fee
      JSON.parse(`{
        "accountKey": "11795582401",
        "entryId": "101375537547",
        "docKey": 28990214764,
        "clientKey": "154925928",
        "language": "EN",
        "sourceEntryGroup": "CASH_WITHDRAWAL",
        "nomination": " Withdrawal - Amount: USD1,000.00; ATM: Bank Of Georgia, Tbilisi, Vazha-Pshavela ave. 42-44; MCC:6011; Date: 26/08/2025 11:07; Card No: ****0474; Payment transaction amount and currency: 1,000.00 USD",
        "merchantId": "ATM11446",
        "postDate": "2025-08-26T00:00:00",
        "authDate": "26/08/2025 11:07",
        "operationDate": "2025-08-26T00:00:00",
        "amount": "1000.0",
        "oppositeAmount": "-1000.0",
        "ccy": "USD",
        "canCopy": "N",
        "status": "P",
        "merchantName": "სს საქართველოს ბანკი, თბილისი, ვაჟა-ფშაველას გამზ. #42-44 (2)",
        "merchantNameInt": "Bank Of Georgia, Tbilisi, Vazha-Pshavela ave. 42-44",
        "nominationOriginal": "Withdrawal - Amount: USD1,000.00; ATM: Bank Of Georgia, Tbilisi, Vazha-Pshavela ave. 42-44; MCC:6011; Date: 26/08/2025 11:07; Card No: ****0474; Payment transaction amount and currency: 1,000.00 USD",
        "prodGroup": "PLC",
        "entryType": "TRN",
        "printSwift": "N",
        "isInternalOperation": "N",
        "entryGroupNameId": "1",
        "groupImageId": "35623075",
        "groupImageIdSolo": "3127030249",
        "groupImageIdWm": "3127057164",
        "hasTransferBack": "N",
        "printFormType": "CASH_WITHDRAWAL",
        "printForm": "Y",
        "entryGroupDValue": "text.entry.group.name.withdrawal",
        "operationTitle": "Bank Of Georgia, Tbilisi, Vazha-Pshavela ave. 42-44",
        "cardLastDigits": "0474",
        "sort": [
          "9999999999999",
          "99999999999",
          "999999999999"
        ],
        "isStatementAllowed": true,
        "trIdentifierForPostBnpl": "28990214764",
        "isTransactionForPostBnpl": "N",
        "bonusType": "PLUS",
        "pfmId": "101375537547",
        "pfmCatId": "600",
        "pfmCatName": "text.pfm.child.category.cash.withdrawal",
        "pfmParentCatId": "590"
      }`),
      {
        date: new Date('2025-08-26T11:07:00+04:00'),
        hold: false,
        merchant: {
          city: 'Tbilisi',
          country: null,
          location: null,
          mcc: 6011,
          title: 'Bank Of Georgia'
        },
        movements: [
          {
            account: { id: '1338' },
            fee: 0,
            id: '101375537547',
            invoice: null,
            sum: -1000
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
            sum: 1000
          }
        ],
        comment: 'Cash withdrawal'
      }
    ]
  ])('converts cash transfer accountUsd', (apiTransaction, transaction) => {
    expect(convertTransaction(apiTransaction, accountUsd)).toEqual(transaction)
  })

  it.each([
    [ // EUR withdrawal with fee - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11569893001',
        entryId: '96831064244',
        docKey: 27612451382,
        essId: null,
        nomination: 'Withdrawal - Amount: EUR507.00; ATM: LA CAIXA 8447>SEVILLA ES, Spain; MCC:6011; Date: 02/06/2025 19:18; Card No: ****6697; Payment transaction amount and currency: 517.14 EUR',
        entryGroup: null,
        postDate: '2025-06-02T00:00:00',
        authDate: '02/06/2025 19:18', // authDateStr -> authDate
        operationDate: '2025-06-02T00:00:00',
        amount: '517.14',
        oppositeAmount: '-517.14',
        ccy: 'EUR',
        canCopy: 'N',
        status: 'F',
        entryGroupDValue: 'text.entry.group.name.withdrawal', // entryGroupDKey - > entryGroupDValue
        nominationOriginal: 'Withdrawal - Amount: EUR507.00; ATM: LA CAIXA 8447>SEVILLA ES, Spain; MCC:6011; Date: 02/06/2025 19:18; Card No: ****6697; Payment transaction amount and currency: 517.14 EUR',
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        printFormType: 'CASH_WITHDRAWAL',
        hasTransferBack: 'N',
        isInternalOperation: 'N',
        isStatementAllowed: true,
        operationTitle: 'LA CAIXA 8447>SEVILLA ES, Spain',
        pfmId: null,
        pfmCatId: null,
        pfmCatName: null,
        pfmParentCatId: null,
        clientKey: null,
        language: 'EN',
        sourceEntryGroup: null,
        entryGroupNameId: null,
        groupImageId: null,
        groupImageIdSolo: null,
        groupImageIdWm: null,
        printForm: null,
        sort: null,
        trIdentifierForPostBnpl: null,
        isTransactionForPostBnpl: null
      },
      {
        hold: true,
        date: new Date('2025-06-02T19:18:00+04:00'),
        movements: [
          {
            id: '96831064244',
            account: { id: '1339' },
            invoice: null,
            sum: -507,
            fee: -10.14
          },
          {
            id: null,
            account: {
              type: 'cash',
              instrument: 'EUR',
              company: null,
              syncIds: null
            },
            invoice: null,
            sum: 507,
            fee: 0
          }
        ],
        merchant: {
          country: 'Spain',
          city: 'SEVILLA ES',
          title: 'LA CAIXA 8447',
          mcc: 6011,
          location: null
        },
        comment: 'Cash withdrawal'
      }
    ]
  ])('converts cash transfer accountEur', (apiTransaction, transaction) => {
    expect(convertTransaction(apiTransaction, accountEur)).toEqual(transaction)
  })
})
