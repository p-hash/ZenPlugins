import { convertTransaction } from '../../../converters'
import { accountGel } from '../../../tests-common/accounts'

describe('convertTransaction', () => {
  it.each([
    [ // maintenance fee
      JSON.parse(`{
        "accountKey": "11795582400",
        "entryId": "93008891450",
        "docKey": 26430519947,
        "clientKey": "154925928",
        "language": "EN",
        "sourceEntryGroup": "OTHER",
        "nomination": " Payment - Amount GEL80.00; Solo Club Package Maintenance Fee ",
        "postDate": "2025-03-19T00:00:00",
        "operationDate": "2025-03-19T00:00:00",
        "amount": "80.0",
        "oppositeAmount": "-80.0",
        "ccy": "GEL",
        "canCopy": "N",
        "status": "P",
        "nominationOriginal": "Solo Club Package Maintenance Fee ",
        "prodGroup": "FEE",
        "entryType": "FEE",
        "printSwift": "N",
        "isInternalOperation": "N",
        "entryGroupNameId": "8",
        "groupImageId": "35623077",
        "groupImageIdSolo": "3127030254",
        "groupImageIdWm": "3127057167",
        "hasTransferBack": "N",
        "printFormType": "OTHER",
        "printForm": "Y",
        "entryGroupDValue": "text.entry.group.name.FEE",
        "operationTitle": "Solo Club Package Maintenance Fee ",
        "sort": [
          "9999999999999",
          "99999999999",
          "99999999999"
        ],
        "isStatementAllowed": true,
        "trIdentifierForPostBnpl": "26430519947",
        "isTransactionForPostBnpl": "N",
        "pfmId": "12839376734",
        "pfmCatId": "540",
        "pfmCatName": "text.pfm.child.category.bank.fees",
        "pfmParentCatId": "520"
      }`),
      {
        comment: 'Solo Club Package Maintenance Fee ',
        date: new Date('2025-03-19T00:00:00.000+04:00'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '93008891450',
            invoice: null,
            sum: -80
          }
        ]
      }
    ],
    [ // funds transfer to deposit - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11578997519',
        entryId: '51273332616',
        docKey: 13449171194,
        essId: null,
        nomination: 'Payment - Amount GEL2.00; Funds transfer from electronic till to the deposit, Agreement number# GE97BG0000000537338615',
        entryGroup: null,
        postDate: '2022-05-30T00:00:00',
        authDate: null, // authDateStr -> authDate
        operationDate: '2022-05-30T00:00:00',
        amount: '2.0',
        oppositeAmount: '-2.0',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        entryGroupDValue: 'text.entry.group.name.El.Money.Box', // entryGroupDKey - > entryGroupDValue
        nominationOriginal: 'Funds transfer from electronic till to the deposit, Agreement number# GE97BG0000000537338615',
        prodGroup: 'CAS',
        entryType: 'CAS',
        printSwift: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        isInternalOperation: 'Y',
        isStatementAllowed: true,
        operationTitle: 'Funds transfer from electronic till to the deposit, Agreement number# GE97BG0000000537338615',
        pfmId: 5151813480,
        pfmCatId: '630',
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
        // comment: 'Transfer to Deposit', // TODO: add comment
        comment: null,
        date: new Date('2022-05-30T00:00:00.000+04:00'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '51273332616',
            invoice: null,
            sum: -2
          },
          {
            account: {
              company: null,
              instrument: 'GEL',
              syncIds: null,
              type: 'checking'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 2
          }
        ]
      }
    ],
    [ // overdraft interest deduction  - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11565901492',
        entryId: '50695816022',
        docKey: 13278509966,
        essId: null,
        nomination: 'Payment - Amount GEL0.01; Overdraft Interest deduction',
        entryGroup: null,
        postDate: '2022-05-10T00:00:00',
        authDate: null, // authDateStr -> authDate
        operationDate: '2022-05-10T00:00:00',
        amount: '0.01',
        oppositeAmount: '-0.01',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        entryGroupDValue: 'text.entry.group.name.overdraft', // entryGroupDKey - > entryGroupDValue
        nominationOriginal: 'Overdraft Interest deduction',
        prodGroup: 'CDS',
        entryType: 'CDS',
        printSwift: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        isInternalOperation: 'N',
        isStatementAllowed: true,
        operationTitle: 'Overdraft Interest deduction',
        pfmId: 5005114619,
        pfmCatId: '567',
        pfmCatName: null,
        pfmParentCatId: '520',
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
        comment: 'Overdraft Interest deduction',
        date: new Date('2022-05-10T00:00:00.000+04:00'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '50695816022',
            invoice: null,
            sum: -0.01
          }
        ]
      }
    ],
    [ // tbilisi bus
      JSON.parse(`{
        "accountKey": "11795582400",
        "entryId": "93451418731",
        "docKey": 26564035843,
        "clientKey": "154925928",
        "language": "EN",
        "sourceEntryGroup": "OTHER",
        "nomination": " Payment - Amount GEL1.00; Payment - Amount: GEL1.00; Tbilisi Bus - route number 301; Date: 28/03/2025 22:09:12; Card No: ****4275 (wallet)",
        "postDate": "2025-03-28T00:00:00",
        "operationDate": "2025-03-28T00:00:00",
        "amount": "1.0",
        "oppositeAmount": "-1.0",
        "ccy": "GEL",
        "canCopy": "N",
        "status": "P",
        "nominationOriginal": "Payment - Amount: GEL1.00; Tbilisi Bus - route number 301; Date: 28/03/2025 22:09:12; Card No: ****4275 (wallet)",
        "prodGroup": "TCC",
        "entryType": "TCT",
        "printSwift": "N",
        "isInternalOperation": "N",
        "entryGroupNameId": "7",
        "groupImageId": "35623083",
        "groupImageIdSolo": "3127030268",
        "groupImageIdWm": "3127057177",
        "hasTransferBack": "N",
        "printFormType": "OTHER",
        "printForm": "Y",
        "entryGroupDValue": "text.entry.group.name.Payment",
        "operationTitle": "Payment - Amount: GEL1.00; Tbilisi Bus - route number 301; Date: 28/03/2025 22:09:12; Card No: ****4275 (wallet)",
        "sort": [
          "9999999999999",
          "99999999999",
          "99999999999"
        ],
        "isStatementAllowed": true,
        "trIdentifierForPostBnpl": "26564035843",
        "isTransactionForPostBnpl": "N",
        "pfmId": "93451418731",
        "pfmCatId": "160",
        "pfmCatName": "text.pfm.child.category.public.transport",
        "pfmParentCatId": "120"
      }`),
      {
        comment: 'Payment - Amount: GEL1.00; Tbilisi Bus - route number 301; Date: 28/03/2025 22:09:12; Card No: ****4275 (wallet)',
        // date: new Date('2025-03-28T22:09:12.000+04:00'), // TODO: parse date from nomination
        date: new Date('2025-03-28T00:00:00.000+04:00'),
        hold: false,
        merchant: null, // TODO: add merchant Tbilisi Bus
        // merchant: {
        //   country: null,
        //   city: 'Tbilisi',
        //   title: 'Tbilisi Bus',
        //   mcc: null,
        //   location: null
        // },
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '93451418731',
            invoice: null,
            sum: -1
          }
        ]
      }
    ],
    [ // cash withdrawal fee - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11574837328',
        entryId: '51480229020',
        docKey: 13508448330,
        essId: null,
        nomination: 'Withdrawal - Amount: GEL1,000.00; ATM: Bank Of Georgia, Batumi, Zubalashvili st. 18; MCC:6011; Date: 05/06/2022 16:49; Card No: ****6663; Payment transaction amount and currency: 1,000.00 GEL',
        entryGroup: null,
        postDate: '2022-06-05T00:00:00',
        authDate: '05/06/2022 16:49', // authDateStr -> authDate
        operationDate: '2022-06-05T00:00:00',
        amount: '2.0',
        oppositeAmount: '-2.0',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        entryGroupDValue: 'text.entry.group.name.withdrawal', // entryGroupDKey - > entryGroupDValue
        nominationOriginal: 'Withdrawal - Amount: GEL1,000.00; ATM: Bank Of Georgia, Batumi, Zubalashvili st. 18; MCC:6011; Date: 05/06/2022 16:49; Card No: ****6663; Payment transaction amount and currency: 1,000.00 GEL',
        prodGroup: 'PLC',
        entryType: 'COM',
        printSwift: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        isInternalOperation: 'N',
        isStatementAllowed: true,
        operationTitle: 'Bank Of Georgia, Batumi, Zubalashvili st. 18',
        pfmId: 5201536919,
        pfmCatId: '540',
        pfmCatName: null,
        pfmParentCatId: '520',
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
        date: new Date('2022-06-05T16:49:00.000+04:00'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: { id: '1337' },
            fee: 0,
            id: '51480229020',
            invoice: null,
            sum: -2
          }
        ],
        comment: 'cash withdrawal fee'
      }
    ],
    [ // loan repayment - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11579489835',
        entryId: '51638665375',
        docKey: 13555449096,
        essId: null,
        nomination: 'Payment - Amount GEL102.98; Loan repayment, Loan N 8409346',
        entryGroup: null,
        postDate: '2022-06-11T00:00:00',
        authDate: null, // authDateStr -> authDate
        operationDate: '2022-06-11T00:00:00',
        amount: '102.98',
        oppositeAmount: '-102.98',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        entryGroupDValue: 'text.entry.group.name.Loan.Repayment', // entryGroupDKey - > entryGroupDValue
        nominationOriginal: 'Loan repayment, Loan N 8409346',
        prodGroup: 'LND',
        entryType: 'LND',
        printSwift: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        isInternalOperation: 'N',
        isStatementAllowed: true,
        operationTitle: 'Cash Cover Loan',
        pfmId: 5241452564,
        pfmCatId: '570',
        pfmCatName: null,
        pfmParentCatId: '520',
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
        date: new Date('2022-06-11T00:00:00.000+04:00'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: { id: '1337' },
            fee: 0,
            id: '51638665375',
            invoice: null,
            sum: -102.98
          }
        ],
        comment: 'Loan repayment, Loan N 8409346'
      }
    ],
    [ // loan disbursement - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11579489835',
        entryId: '51611480771',
        docKey: 13547630868,
        essId: null,
        nomination: 'Income - Amount GEL102.98; Loan disbursement',
        entryGroup: null,
        postDate: '2022-06-10T00:00:00',
        authDate: null, // authDateStr -> authDate
        operationDate: '2022-06-10T00:00:00',
        amount: '-102.98',
        oppositeAmount: '102.98',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        entryGroupDValue: 'text.entry.group.name.Income', // entryGroupDKey - > entryGroupDValue
        nominationOriginal: 'Loan disbursement',
        prodGroup: 'LND',
        entryType: 'LND',
        printSwift: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        isInternalOperation: 'N',
        isStatementAllowed: true,
        operationTitle: 'Cash Cover Loan',
        pfmId: 5233226028,
        pfmCatId: '920',
        pfmCatName: null,
        pfmParentCatId: '840',
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
        date: new Date('2022-06-10T00:00:00.000+04:00'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: { id: '1337' },
            fee: 0,
            id: '51611480771',
            invoice: null,
            sum: 102.98
          }
        ],
        comment: 'Loan disbursement'
      }
    ],
    [ // cash withdrawal from abroad - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11579489835',
        entryId: '89993651519',
        docKey: 25521517507,
        essId: null,
        nomination: 'Withdrawal - Amount: MAD3,850.00; ATM: 0000011619, Morocco; MCC:6011; Date: 15/01/2025 15:37; Card No: ****2285; Payment transaction amount and currency: 390.47 USD; Bank conversion commission fee: 7.66 USD; Card scheme conversion rate  (USD-MAD): 10.0572',
        entryGroup: null,
        postDate: '2025-01-16T00:00:00',
        authDate: '15/01/2025 15:37', // authDateStr -> authDate
        operationDate: '2025-01-15T15:37:00',
        amount: '21.79',
        oppositeAmount: '-21.79',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        entryGroupDValue: 'text.entry.group.name.withdrawal', // entryGroupDKey - > entryGroupDValue
        nominationOriginal: 'Withdrawal - Amount: MAD3,850.00; ATM: 0000011619, Morocco; MCC:6011; Date: 15/01/2025 15:37; Card No: ****2285; Payment transaction amount and currency: 390.47 USD; Bank conversion commission fee: 7.66 USD; Card scheme conversion rate  (USD-MAD): 10.0572',
        prodGroup: 'PLC',
        entryType: 'COM',
        printSwift: 'N',
        printFormType: 'CASH_WITHDRAWAL',
        hasTransferBack: 'N',
        isInternalOperation: 'N',
        isStatementAllowed: true,
        operationTitle: '0000011619, Morocco',
        pfmId: 12398819414,
        pfmCatId: '540', // 'text.pfm.child.category.bank.fees'
        pfmCatName: null,
        pfmParentCatId: '520',
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
        comment: 'Cash withdrawal comission / Withdrawal - Amount: MAD3,850.00; ATM: 0000011619, Morocco; MCC:6011; Date: 15/01/2025 15:37; Card No: ****2285; Payment transaction amount and currency: 390.47 USD; Bank conversion commission fee: 7.66 USD; Card scheme conversion rate  (USD-MAD): 10.0572',
        date: new Date('2025-01-15T15:37:00.000+04:00'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '89993651519',
            invoice: null,
            sum: -21.79
          }
        ]
      }
    ],
    [ // refund
      {
        accountKey: '12596401624',
        entryId: '123552312311',
        docKey: 28943212313,
        clientKey: '60588505',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Credit Funds - Amount: USD12.40; Merchant: Trip.com, United Kingdom of Great Britain and Northern Ireland; MCC:4722; Date: 23/08/2025 05:06; Card No: ****4346; Payment transaction amount and currency: 12.40 USD',
        postDate: '2025-08-23T00:00:00',
        authDate: '23/08/2025 05:06',
        operationDate: '2025-08-23T00:00:00',
        amount: '-12.4',
        oppositeAmount: '12.4',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        merchantName: 'Trip.com, გაერთიანებული სამეფო',
        merchantNameInt: 'Trip.com, United Kingdom of Great Britain and Northern Ireland',
        nominationOriginal: 'Credit Funds - Amount: USD12.40; Merchant: Trip.com, United Kingdom of Great Britain and Northern Ireland; MCC:4722; Date: 23/08/2025 05:06; Card No: ****4346; Payment transaction amount and currency: 12.40 GEL',
        prodGroup: 'PLC',
        entryType: 'TRN',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '4',
        groupImageId: '35623082',
        groupImageIdSolo: '3127030266',
        groupImageIdWm: '3127057174',
        hasTransferBack: 'N',
        printFormType: 'OTHER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Other',
        operationTitle: 'Trip.com, United Kingdom of Great Britain and Northern Ireland',
        cardLastDigits: '4346',
        sort: [
          '9999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '28943212313',
        isTransactionForPostBnpl: 'N',
        pfmId: '123552312311',
        pfmCatId: '900',
        pfmCatName: 'text.pfm.child.category.transfer.in',
        pfmParentCatId: '840'
      },
      {
        comment: null,
        date: new Date('2025-08-23T05:06:00.000+04:00'),
        groupKeys: [
          '28943212313'
        ],
        hold: false,
        merchant: null,
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '123552312311',
            invoice: null,
            sum: 12.4
          }
        ]
      }
    ],
    [ // interest payment
      JSON.parse(`{
        "accountKey": "11795582400",
        "entryId": "101630006980",
        "docKey": 29064386690,
        "clientKey": "154925928",
        "language": "EN",
        "sourceEntryGroup": "OTHER",
        "nomination": " Income - Amount GEL6.37; Interest payment",
        "postDate": "2025-08-31T00:00:00",
        "operationDate": "2025-08-31T00:00:00",
        "amount": "-6.37",
        "oppositeAmount": "6.37",
        "ccy": "GEL",
        "canCopy": "N",
        "status": "P",
        "nominationOriginal": "Interest payment",
        "prodGroup": "CDS",
        "entryType": "CDS",
        "printSwift": "N",
        "isInternalOperation": "N",
        "entryGroupNameId": "10",
        "groupImageId": "35623079",
        "groupImageIdSolo": "3127030262",
        "groupImageIdWm": "3127057170",
        "hasTransferBack": "N",
        "printFormType": "OTHER",
        "printForm": "Y",
        "entryGroupDValue": "text.entry.group.name.Interest.Accrue",
        "operationTitle": "Interest payment",
        "sort": [
          "9999999999999",
          "99999999999",
          "999999999999"
        ],
        "isStatementAllowed": true,
        "trIdentifierForPostBnpl": "29064386690",
        "isTransactionForPostBnpl": "N",
        "pfmId": "101630006980",
        "pfmCatId": "910",
        "pfmCatName": "text.pfm.child.category.interest",
        "pfmParentCatId": "840"
      }`),
      {
        // comment: 'Interest payment', // TODO: add comment
        comment: null,
        date: new Date('2025-08-31T00:00:00.000+04:00'),
        hold: false,
        merchant: null,
        groupKeys: [
          "29064386690"
        ],
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '101630006980',
            invoice: null,
            sum: 6.37
          }
        ]
      }
    ]
  ])('converts other', (apiTransaction, transaction) => {
    expect(convertTransaction(apiTransaction, accountGel)).toEqual(transaction)
  })
})
