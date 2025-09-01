import { convertTransaction } from '../../../converters'
import { accountGel } from '../../../tests-common/accounts'

describe('convertTransaction', () => {
  it.each([
    [ // maintenance fee
      {
        accountKey: '11795582400',
        entryId: '93008891450',
        docKey: 26430519947,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount GEL800.00; Solo Club Package Maintenance Fee ',
        postDate: '2025-03-19T00:00:00',
        operationDate: '2025-03-19T00:00:00',
        amount: '800.0',
        oppositeAmount: '-800.0',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Solo Club Package Maintenance Fee ',
        prodGroup: 'FEE',
        entryType: 'FEE',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '8',
        groupImageId: '35623077',
        groupImageIdSolo: '3127030254',
        groupImageIdWm: '3127057167',
        hasTransferBack: 'N',
        printFormType: 'OTHER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.FEE',
        operationTitle: 'Solo Club Package Maintenance Fee ',
        sort: [
          '9999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '26430519947',
        isTransactionForPostBnpl: 'N',
        pfmId: '12839376734',
        pfmCatId: '540',
        pfmCatName: 'text.pfm.child.category.bank.fees',
        pfmParentCatId: '520'
      },
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
            sum: -800
          }
        ]
      }
    ],
    [ // funds transfer to deposit - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11578997519',
        entryId: '51273332616',
        docKey: 13449171194,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: 'Payment - Amount GEL2.00; Funds transfer from electronic till to the deposit, Agreement number# GE97BG0000000537338615',
        postDate: '2022-05-30T00:00:00',
        operationDate: '2022-05-30T00:00:00',
        amount: '2.0',
        oppositeAmount: '-2.0',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Funds transfer from electronic till to the deposit, Agreement number# GE97BG0000000537338615',
        prodGroup: 'CAS',
        entryType: 'CAS',
        printSwift: 'N',
        isInternalOperation: 'Y',
        entryGroupNameId: '11',
        groupImageId: '386243',
        groupImageIdSolo: '3127030255',
        groupImageIdWm: '3127057168',
        hasTransferBack: 'N',
        printFormType: 'OTHER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.El.Money.Box',
        operationTitle: 'Funds transfer from electronic till to the deposit',
        sort: [
          '9999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '13449171194',
        isTransactionForPostBnpl: 'N',
        pfmId: '51273332616',
        pfmCatId: '630',
        pfmCatName: 'text.pfm.child.category.savings.deposit',
        pfmParentCatId: '590'
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
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: 'Payment - Amount GEL0.01; Overdraft Interest deduction',
        postDate: '2022-05-10T00:00:00',
        operationDate: '2022-05-10T00:00:00',
        amount: '0.01',
        oppositeAmount: '-0.01',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Overdraft Interest deduction',
        prodGroup: 'CDS',
        entryType: 'CDS',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '12',
        groupImageId: '60233554',
        groupImageIdSolo: '3127030260',
        groupImageIdWm: '3127057169',
        hasTransferBack: 'N',
        printFormType: 'OTHER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.overdraft',
        operationTitle: 'Overdraft Interest deduction',
        sort: [
          '9999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '13278509966',
        isTransactionForPostBnpl: 'N',
        pfmId: '50695816022',
        pfmCatId: '567',
        pfmCatName: 'text.pfm.child.category.overdraft.interest',
        pfmParentCatId: '520'
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
      {
        accountKey: '11795582400',
        entryId: '93451418731',
        docKey: 26564035843,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount GEL1.00; Payment - Amount: GEL1.00; Tbilisi Bus - route number 301; Date: 28/03/2025 22:09:12; Card No: ****4275 (wallet)',
        postDate: '2025-03-28T00:00:00',
        operationDate: '2025-03-28T00:00:00',
        amount: '1.0',
        oppositeAmount: '-1.0',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Payment - Amount: GEL1.00; Tbilisi Bus - route number 301; Date: 28/03/2025 22:09:12; Card No: ****4275 (wallet)',
        prodGroup: 'TCC',
        entryType: 'TCT',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '7',
        groupImageId: '35623083',
        groupImageIdSolo: '3127030268',
        groupImageIdWm: '3127057177',
        hasTransferBack: 'N',
        printFormType: 'OTHER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Payment',
        operationTitle: 'Payment - Amount: GEL1.00; Tbilisi Bus - route number 301; Date: 28/03/2025 22:09:12; Card No: ****4275 (wallet)',
        sort: [
          '9999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '26564035843',
        isTransactionForPostBnpl: 'N',
        pfmId: '93451418731',
        pfmCatId: '160',
        pfmCatName: 'text.pfm.child.category.public.transport',
        pfmParentCatId: '120'
      },
      {
        comment: 'Payment - Amount: GEL1.00; Tbilisi Bus - route number 301; Date: 28/03/2025 22:09:12; Card No: ****4275 (wallet)',
        // date: new Date('2025-03-28T22:09:12.000+04:00'), // TODO: parse date from nomination
        date: new Date('2025-03-28T00:00:00.000+04:00'),
        hold: false,
        merchant: null,
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
        accountKey: '11795582400',
        entryId: '101704273559',
        docKey: 29088512613,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'CASH_WITHDRAWAL',
        nomination: ' Withdrawal - Amount: GEL1,000.00; ATM: Bank of Georgia, Tbilisi, Vazha-Pshavela ave. 42 (Euro); MCC:6011; Date: 01/09/2025 16:21; Card No: ****0474; Payment transaction amount and currency: 1,000.00 GEL',
        merchantId: 'ATM1EG52',
        postDate: '2025-09-01T00:00:00',
        authDate: '01/09/2025 16:21',
        operationDate: '2025-09-01T00:00:00',
        amount: '2.0',
        oppositeAmount: '-2.0',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'A',
        merchantName: 'საქართველოს ბანკი, თბილისი, ვაჟა-ფშავალას გამზ. 42 (ევრო)',
        merchantNameInt: 'Bank of Georgia, Tbilisi, Vazha-Pshavela ave. 42 (Euro)',
        nominationOriginal: 'Withdrawal - Amount: GEL1,000.00; ATM: Bank of Georgia, Tbilisi, Vazha-Pshavela ave. 42 (Euro); MCC:6011; Date: 01/09/2025 16:21; Card No: ****0474; Payment transaction amount and currency: 1,000.00 GEL',
        prodGroup: 'PLC',
        entryType: 'COM',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '1',
        groupImageId: '35623075',
        groupImageIdSolo: '3127030249',
        groupImageIdWm: '3127057164',
        hasTransferBack: 'N',
        printFormType: 'CASH_WITHDRAWAL',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.withdrawal',
        operationTitle: 'Bank of Georgia, Tbilisi, Vazha-Pshavela ave. 42 (Euro)',
        cardLastDigits: '0474',
        sort: [
          '9999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '29088512613',
        isTransactionForPostBnpl: 'N',
        bonusType: 'PLUS',
        pfmId: '101704273559',
        pfmCatId: '600',
        pfmCatName: 'text.pfm.child.category.cash.withdrawal',
        pfmParentCatId: '590'
      },
      {
        date: new Date('2025-09-01T16:21:00.000+04:00'),
        hold: false,
        merchant: {
          country: null,
          city: 'Tbilisi',
          title: 'Bank of Georgia',
          mcc: 6011,
          location: null
        },
        movements: [
          {
            account: { id: '1337' },
            fee: 0,
            id: '101704273559',
            invoice: null,
            sum: -2
          }
        ],
        comment: 'Cash withdrawal comission / Withdrawal - Amount: GEL1,000.00; ATM: Bank of Georgia, Tbilisi, Vazha-Pshavela ave. 42 (Euro); MCC:6011; Date: 01/09/2025 16:21; Card No: ****0474; Payment transaction amount and currency: 1,000.00 GEL'
      }
    ],
    [ // loan repayment - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11579489835',
        entryId: '51638665375',
        docKey: 13555449096,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: 'Payment - Amount GEL102.98; Loan repayment, Loan N 8409346',
        postDate: '2022-06-11T00:00:00',
        operationDate: '2022-06-11T00:00:00',
        amount: '102.98',
        oppositeAmount: '-102.98',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Loan repayment, Loan N 8409346',
        prodGroup: 'LND',
        entryType: 'LND',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '9',
        groupImageId: '35623081',
        groupImageIdSolo: '3127030261',
        groupImageIdWm: '3127057170',
        hasTransferBack: 'N',
        printFormType: 'OTHER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Loan.Repayment',
        operationTitle: 'Cash Cover Loan',
        sort: [
          '9999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '13555449096',
        isTransactionForPostBnpl: 'N',
        pfmId: '51638665375',
        pfmCatId: '570',
        pfmCatName: 'text.pfm.child.category.loan.repayment',
        pfmParentCatId: '520'
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
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: 'Income - Amount GEL102.98; Loan disbursement',
        postDate: '2022-06-10T00:00:00',
        operationDate: '2022-06-10T00:00:00',
        amount: '-102.98',
        oppositeAmount: '102.98',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Loan disbursement',
        prodGroup: 'LND',
        entryType: 'LND',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '5',
        groupImageId: '35623078',
        groupImageIdSolo: '3127030262',
        groupImageIdWm: '3127057171',
        hasTransferBack: 'N',
        printFormType: 'OTHER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Income',
        operationTitle: 'Cash Cover Loan',
        sort: [
          '9999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '13547630868',
        isTransactionForPostBnpl: 'N',
        pfmId: '51611480771',
        pfmCatId: '920',
        pfmCatName: 'text.pfm.child.category.loan.disbursement',
        pfmParentCatId: '840'
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
    [ // foreign transaction with currency conversion - THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11579489835',
        entryId: '89993651519',
        docKey: 25521517507,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'CASH_WITHDRAWAL',
        nomination: 'Withdrawal - Amount: MAD3,850.00; ATM: 0000011619, Morocco; MCC:6011; Date: 15/01/2025 15:37; Card No: ****2285; Payment transaction amount and currency: 390.47 USD; Bank conversion commission fee: 7.66 USD; Card scheme conversion rate  (USD-MAD): 10.0572',
        merchantId: 'EDMA0214',
        postDate: '2025-01-16T00:00:00',
        authDate: '15/01/2025 15:37',
        operationDate: '2025-01-15T15:37:00',
        amount: '21.79',
        oppositeAmount: '-21.79',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        merchantName: '0000011619, მაროკო',
        merchantNameInt: '0000011619, Morocco',
        nominationOriginal: 'Withdrawal - Amount: MAD3,850.00; ATM: 0000011619, Morocco; MCC:6011; Date: 15/01/2025 15:37; Card No: ****2285; Payment transaction amount and currency: 390.47 USD; Bank conversion commission fee: 7.66 USD; Card scheme conversion rate  (USD-MAD): 10.0572',
        prodGroup: 'PLC',
        entryType: 'COM',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '1',
        groupImageId: '35623075',
        groupImageIdSolo: '3127030249',
        groupImageIdWm: '3127057164',
        hasTransferBack: 'N',
        printFormType: 'CASH_WITHDRAWAL',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.withdrawal',
        operationTitle: '0000011619, Morocco',
        cardLastDigits: '2285',
        sort: [
          '9999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '25521517507',
        isTransactionForPostBnpl: 'N',
        pfmId: '89993651519',
        pfmCatId: '540',
        pfmCatName: 'text.pfm.child.category.bank.fees',
        pfmParentCatId: '520'
      },
      {
        comment: 'Cash withdrawal comission / Withdrawal - Amount: MAD3,850.00; ATM: 0000011619, Morocco; MCC:6011; Date: 15/01/2025 15:37; Card No: ****2285; Payment transaction amount and currency: 390.47 USD; Bank conversion commission fee: 7.66 USD; Card scheme conversion rate  (USD-MAD): 10.0572',
        date: new Date('2025-01-15T15:37:00.000+04:00'),
        hold: false,
        merchant: {
          city: null,
          country: 'Morocco',
          location: null,
          mcc: 6011,
          title: '0000011619'
        },
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
    ]
  ])('converts other', (apiTransaction, transaction) => {
    expect(convertTransaction(apiTransaction, accountGel)).toEqual(transaction)
  })
})
