import { convertTransaction } from '../../../converters'
import { accountGel, accountUsd } from '../../../tests-common/accounts'

describe('convertTransaction', () => {
  it.each([
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11570661145',
        entryId: '49719366874',
        docKey: 12983595645,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount GEL11.00; Merchant: shawarmania, Tbilisi, vekua 3a; MCC:5812; Date: 04/04/2022 21:01; Card No: ****5585; Payment transaction amount and currency: 11.00 GEL',
        postDate: '2022-04-04T00:00:00',
        operationDate: '2022-04-04T21:01:00',
        amount: '11.0',
        oppositeAmount: '-11.0',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'F',
        nominationOriginal: 'Payment - Amount: GEL11.00; Merchant: shawarmania, Tbilisi, vekua 3a; MCC:5812; Date: 04/04/2022 21:01; Card No: ****5585; Payment transaction amount and currency: 11.00 GEL',
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '7',
        groupImageId: '35623083',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'PAYMENT',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Payment',
        operationTitle: 'shawarmania, Tbilisi, vekua 3a',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '12983595645',
        isTransactionForPostBnpl: 'N',
        pfmId: null,
        pfmCatId: null,
        pfmCatName: null,
        pfmParentCatId: null
      },
      {
        comment: "Payment - Amount: GEL11.00; Merchant: shawarmania, Tbilisi, vekua 3a; MCC:5812; Date: 04/04/2022 21:01; Card No: ****5585; Payment transaction amount and currency: 11.00 GEL",
        date: new Date('2022-04-03T20:00:00.000Z'),
        hold: true,
        merchant: null,
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '49719366874',
            invoice: null,
            sum: -11
          }
        ]
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11570661145',
        entryId: '49501187219',
        docKey: 12919098479,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount GEL23.20; Merchant: BOLT.EU/C/2203261556, Estonia; MCC:4121; Date: 26/03/2022 15:56; Card No: ****5585; Payment transaction amount and currency: 23.20 GEL; Card scheme conversion rate (USD-GEL): 3.1868; Bank conversion rate (USD-GEL): 3.2234',
        postDate: '2022-03-26T00:00:00',
        operationDate: '2022-03-26T15:56:00',
        amount: '23.2',
        oppositeAmount: '-23.2',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Payment - Amount: GEL23.20; Merchant: BOLT.EU/C/2203261556, Estonia; MCC:4121; Date: 26/03/2022 15:56; Card No: ****5585; Payment transaction amount and currency: 23.20 GEL; Card scheme conversion rate  (USD-GEL): 3.1868; Bank conversion rate (USD-GEL): 3.2234',
        prodGroup: 'CCO',
        entryType: 'CCO',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '7',
        groupImageId: '35623083',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'PAYMENT',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Payment',
        operationTitle: 'BOLT.EU/C/2203261556, Estonia',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '12919098479',
        isTransactionForPostBnpl: 'N',
        pfmId: '4686186530',
        pfmCatId: '140',
        pfmCatName: 'text.pfm.child.category.transportation',
        pfmParentCatId: '120'
      },
      {
        comment: null,
        date: new Date('2022-03-26T15:56:00+04:00'),
        hold: false,
        merchant: {
          country: 'Estonia',
          city: null,
          title: 'BOLT.EU/C/2203261556',
          location: null,
          mcc: 4121
        },
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '49501187219',
            invoice: null,
            sum: -23.2
          }
        ]
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11570661145',
        entryId: '49670550200',
        docKey: 12969270177,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount GEL5.00; 24/7 Payment, 03/04/2022 , payment service, Magticom, Phone number 595231337, payment code - 7096872816',
        postDate: '2022-04-03T00:00:00',
        operationDate: '2022-04-03T00:00:00',
        amount: '5.0',
        oppositeAmount: '-5.0',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: '24/7 Payment, 03/04/2022 , payment service, Magticom, Phone number 595231337, payment code - 7096872816',
        prodGroup: 'PMD',
        entryType: 'PMD',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '7',
        groupImageId: '35623083',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'OTHER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Payment',
        operationTitle: 'Magticom',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '12969270177',
        isTransactionForPostBnpl: 'N',
        pfmId: '4736584262',
        pfmCatId: '220',
        pfmCatName: 'text.pfm.child.category.cellular.service',
        pfmParentCatId: '200'
      },
      {
        comment: '24/7 Payment, 03/04/2022 , payment service, Magticom, Phone number 595231337, payment code - 7096872816',
        date: new Date('2022-04-03T00:00:00.000+04:00'),
        hold: false,
        merchant: {
          city: null,
          country: null,
          location: null,
          mcc: null,
          title: 'Magticom'
        },
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '49670550200',
            invoice: null,
            sum: -5
          }
        ]
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11570661145',
        entryId: '49610479921',
        docKey: 12950423051,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount GEL0.50; Payment Fee, 31/03/2022 , payment service, Magti Internet Services, subscriber Phone Number 325981234, payment code - 7082227650',
        postDate: '2022-03-31T00:00:00',
        operationDate: '2022-03-31T00:00:00',
        amount: '0.5',
        oppositeAmount: '-0.5',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Payment Fee, 31/03/2022 , payment service, Magti Internet Services, subscriber Phone Number 325981234, payment code - 7082227650',
        prodGroup: 'COM',
        entryType: 'COM',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '4',
        groupImageId: '35623082',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'OTHER',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.default.OTHER',
        operationTitle: 'Payment Fee',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '12950423051',
        isTransactionForPostBnpl: 'N',
        pfmId: null,
        pfmCatId: null,
        pfmCatName: null,
        pfmParentCatId: null
      },
      {
        comment: 'Payment Fee, 31/03/2022 , payment service, Magti Internet Services, subscriber Phone Number 325981234, payment code - 7082227650',
        date: new Date('2022-03-31T00:00:00.000+04:00'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '49610479921',
            invoice: null,
            sum: -0.5
          }
        ]
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11578984147',
        entryId: '51547036216',
        docKey: 13525466807,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount GEL22.82; Merchant: DIDI DIGOMI GAZ-IMB, Tbilisi, საქართველო, ძველი თბილისი, ქუჩა/მასივი: სულხან-საბას ქ. # 5/1, სახლის/კორპუსის ნომერი: .; MCC:4900; Customer: 7452276362;12944; Date: 07/06/2022 12:20; Card No: ****6859; Payment transaction amount and currency: 22.82 GEL',
        postDate: '2022-06-07T00:00:00',
        operationDate: '2022-06-07T12:20:00',
        amount: '22.82',
        oppositeAmount: '-22.82',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Payment - Amount: GEL22.82; Merchant: DIDI DIGOMI GAZ-IMB, Tbilisi, საქართველო, ძველი თბილისი, ქუჩა/მასივი: სულხან-საბას ქ. # 5/1, სახლის/კორპუსის ნომერი: .; MCC:4900; Customer: 7452276362;12944; Date: 07/06/2022 12:20; Card No: ****6859; Payment transaction amount and currency: 22.82 GEL',
        prodGroup: 'PLC',
        entryType: 'TRN',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '7',
        groupImageId: '35623083',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'UTILITY_PAYMENT',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Payment',
        operationTitle: 'DIDI DIGOMI GAZ-IMB, Tbilisi, საქართველო, ძველი თბილისი, ქუჩა/მასივი: სულხან-საბას ქ. # 5/1, სახლის/კორპუსის ნომერი: .',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '13525466807',
        isTransactionForPostBnpl: 'N',
        pfmId: '5216788573',
        pfmCatId: '240',
        pfmCatName: 'text.pfm.child.category.utilities',
        pfmParentCatId: '200'
      },
      {
        comment: null,
        date: new Date('2022-06-07T12:20:00+04:00'),
        hold: false,
        merchant: {
          country: null,
          city: 'Tbilisi',
          title: 'DIDI DIGOMI GAZ-IMB',
          location: null,
          mcc: 4900
        },
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '51547036216',
            invoice: null,
            sum: -22.82
          }
        ]
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11570652305',
        entryId: '51914914098',
        docKey: 13635030958,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount TRY40.00; Merchant: BIZTUR YIYECEK ICE.DAN, Turkey; MCC:5812; Date: 19/06/2022 10:40; Card No: ****0632; Payment transaction amount and currency: 7.02 GEL; Bank conversion commission fee: 0.05 USD; Card scheme conversion rate (USD-TRY): 17.0213; Bank conversion rate (USD-GEL): 2.9239',
        postDate: '2022-06-19T00:00:00',
        operationDate: '2022-06-19T10:40:00',
        amount: '7.02',
        oppositeAmount: '-7.02',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Payment - Amount: TRY40.00; Merchant: BIZTUR YIYECEK ICE.DAN, Turkey; MCC:5812; Date: 19/06/2022 10:40; Card No: ****0632; Payment transaction amount and currency: 7.02 GEL; Bank conversion commission fee: 0.05 USD; Card scheme conversion rate (USD-TRY): 17.0213; Bank conversion rate (USD-GEL): 2.9239',
        prodGroup: 'CCO',
        entryType: 'CCO',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '7',
        groupImageId: '35623083',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'PAYMENT',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Payment',
        operationTitle: 'BIZTUR YIYECEK ICE.DAN, Turkey',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '13635030958',
        isTransactionForPostBnpl: 'N',
        pfmId: '5311831502',
        pfmCatId: '20',
        pfmCatName: 'text.pfm.child.category.food.dining',
        pfmParentCatId: '10'
      },
      {
        hold: false,
        date: new Date('2022-06-19T10:40:00+04:00'),
        movements:
          [
            {
              id: '51914914098',
              account: { id: '1337' },
              invoice: { instrument: 'TRY', sum: -40 },
              sum: -7.02,
              fee: 0
            }
          ],
        merchant:
          {
            country: 'Turkey',
            city: null,
            title: 'BIZTUR YIYECEK ICE.DAN',
            mcc: 5812,
            location: null
          },
        comment: null
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11572779360',
        entryId: '51895885420',
        docKey: 13629972863,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount BYN50.00; Merchant: IR WWW.VERBITSKAYA.BY>MINSK BY, Belarus; MCC:8099; Date: 20/06/2022 00:07; Card No: ****0434; Payment transaction amount and currency: 58.45 GEL; Bank conversion rate (BYN-GEL): 1.169',
        postDate: '2022-06-20T00:00:00',
        operationDate: '2022-06-20T00:07:00',
        amount: '58.45',
        oppositeAmount: '-58.45',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'F',
        nominationOriginal: 'Payment - Amount: BYN50.00; Merchant: IR WWW.VERBITSKAYA.BY>MINSK BY, Belarus; MCC:8099; Date: 20/06/2022 00:07; Card No: ****0434; Payment transaction amount and currency: 58.45 GEL; Bank conversion rate (BYN-GEL): 1.169',
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '7',
        groupImageId: '35623083',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'PAYMENT',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Payment',
        operationTitle: 'IR WWW.VERBITSKAYA.BY>MINSK BY, Belarus',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '13629972863',
        isTransactionForPostBnpl: 'N',
        pfmId: '5319342210',
        pfmCatId: '450',
        pfmCatName: 'text.pfm.child.category.personal.care',
        pfmParentCatId: '440'
      },
      {
        date: new Date('2022-06-20T00:07:00+04:00'),
        hold: true,
        movements: [
          {
            account: { id: '1337' },
            fee: 0,
            id: '51895885420',
            invoice: { instrument: 'BYN', sum: -50 },
            sum: -58.45
          }
        ],
        merchant: {
          city: 'MINSK BY',
          country: 'Belarus',
          title: 'IR WWW.VERBITSKAYA.BY',
          location: null,
          mcc: 8099
        },
        comment: null
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11576264704',
        entryId: '30286011908',
        docKey: 13336330846,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: 'Payment - Amount GEL35.00; Payment - Amount: GEL35.00; &PROVIDER_NAME, Customer/Code# 7340388813;422922038; Date: ',
        postDate: '2022-05-17T00:00:00',
        operationDate: '2022-05-17T00:00:00',
        amount: '35',
        oppositeAmount: null,
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Payment - Amount: GEL35.00; &PROVIDER_NAME, Customer/Code# 7340388813;422922038; Date: ',
        prodGroup: 'PBS',
        entryType: 'PBS',
        printSwift: 'N',
        printFormType: 'UTILITY_PAYMENT',
        isInternalOperation: 'N',
        entryGroupDValue: null,
        entryGroupNameId: 4,
      },
      {
        date: new Date('2022-05-16T20:00:00.000Z'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: { id: '1337' },
            fee: 0,
            id: '30286011908',
            invoice: null,
            sum: -35
          }
        ],
        comment: 'Payment - Amount: GEL35.00; &PROVIDER_NAME, Customer/Code# 7340388813;422922038; Date: '
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11578503896',
        entryId: '52658170613',
        docKey: 13859053808,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'OTHER',
        nomination: ' Payment - Amount ILS50.00; Merchant: GETT>>TEL AVIV-JAF IL, Israel; MCC:4789; Date: 14/07/2022 06:39; Card No: ****5251; Payment transaction amount and currency: 43.32 GEL; Bank conversion rate (ILS-GEL): .8663',
        postDate: '2022-07-14T00:00:00',
        operationDate: '2022-07-14T06:39:00',
        amount: '43.32',
        oppositeAmount: '-43.32',
        ccy: 'GEL',
        canCopy: 'N',
        status: 'F',
        nominationOriginal: 'Payment - Amount: ILS50.00; Merchant: GETT>>TEL AVIV-JAF IL, Israel; MCC:4789; Date: 14/07/2022 06:39; Card No: ****5251; Payment transaction amount and currency: 43.32 GEL; Bank conversion rate (ILS-GEL): .8663',
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        isInternalOperation: 'N',
        entryGroupNameId: '7',
        groupImageId: '35623083',
        groupImageIdSolo: '3127030252',
        groupImageIdWm: '3127057166',
        hasTransferBack: 'N',
        printFormType: 'PAYMENT',
        printForm: 'Y',
        entryGroupDValue: 'text.entry.group.name.Payment',
        operationTitle: 'GETT>>TEL AVIV-JAF IL, Israel',
        sort: [
          '99999999999999',
          '99999999999',
          '99999999999'
        ],
        isStatementAllowed: true,
        trIdentifierForPostBnpl: '13859053808',
        isTransactionForPostBnpl: 'N',
        pfmId: '5414959568',
        pfmCatId: '140',
        pfmCatName: 'text.pfm.child.category.transportation',
        pfmParentCatId: '120'
      },
      {
        hold: true,
        date: new Date('2022-07-14T06:39:00+04:00'),
        movements:
          [
            {
              id: '52658170613',
              account: { id: '1337' },
              invoice: { instrument: 'ILS', sum: -50 },
              sum: -43.32,
              fee: 0
            }
          ],
        merchant:
          {
            country: 'Israel',
            city: null,
            title: 'GETT',
            mcc: 4789,
            location: null
          },
        comment: null
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11621211351',
        entryId: '87002157228',
        docKey: 26374168116,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'FEE',
        nomination: 'Payment - Amount: GEL78.35; Merchant: SAKARTV.FINANSTA SAMINISTRO, Tbilisi, ქ. თბილისი, რ-ნი: ვაკე-საბურთალო, ი. აბაშიძისს ქ.#70,; MCC:9399; Customer: 58P3E360212; Date: 15/03/2025 18:51; Card No: ****9759; Payment transaction amount and currency: 78.35 GEL',
        postDate: '2025-03-16T00:00:00',
        operationDate: '2025-03-15T18:51:00',
        amount: '1',
        oppositeAmount: null,
        ccy: 'GEL',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Payment - Amount: GEL78.35; Merchant: SAKARTV.FINANSTA SAMINISTRO, Tbilisi, ქ. თბილისი, რ-ნი: ვაკე-საბურთალო, ი. აბაშიძისს ქ.#70,; MCC:9399; Customer: 58P3E360212; Date: 15/03/2025 18:51; Card No: ****9759; Payment transaction amount and currency: 78.35 GEL',
        prodGroup: 'PLC',
        entryType: 'COM',
        printSwift: 'N',
        printFormType: 'PAYMENT',
        isInternalOperation: 'N',
        entryGroupDValue: null,
        entryGroupNameId: 8,
      },
      {
        comment: null,
        date: new Date('2025-03-15T18:51:00+04:00'),
        hold: false,
        merchant: {
          city: 'Tbilisi',
          country: null,
          location: null,
          mcc: 9399,
          title: 'SAKARTV.FINANSTA SAMINISTRO'
        },
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '87002157228',
            invoice: null,
            sum: -1
          }
        ]
      }
    ]
  ])('converts purchase accountGel', (apiTransaction, transaction) => {
    expect(convertTransaction(apiTransaction, accountGel)).toEqual(transaction)
  })

  it.each([
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11579927194',
        entryId: '32168247141',
        docKey: 13754278581,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'Payment',
        nomination: 'Payment - Amount: USD1.00; Merchant: AIRBNB> \\\\, ; MCC:4722; Date: 03/07/2022 07:53; Card No: ****2718; Payment transaction amount and currency: 1.00 USD; Bank conversion rate (USD-GEL): 2.92',
        postDate: '2022-07-04T00:00:00',
        operationDate: '2022-07-03T07:53:00',
        amount: '1',
        oppositeAmount: null,
        ccy: 'USD',
        canCopy: 'N',
        status: 'F',
        nominationOriginal: 'Payment - Amount: USD1.00; Merchant: AIRBNB> \\\\, ; MCC:4722; Date: 03/07/2022 07:53; Card No: ****2718; Payment transaction amount and currency: 1.00 USD; Bank conversion rate (USD-GEL): 2.92',
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        printFormType: 'PAYMENT',
        isInternalOperation: 'N',
        entryGroupDValue: null,
        entryGroupNameId: 7,
      },
      {
        hold: true,
        date: new Date('2022-07-03T07:53:00+04:00'),
        movements:
            [
              {
                id: '32168247141',
                account: { id: '1338' },
                invoice: null,
                sum: -1,
                fee: 0
              }
            ],
        merchant:
            {
              country: null,
              city: null,
              title: 'AIRBNB',
              mcc: 4722,
              location: null
            },
        comment: null
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11598288203',
        entryId: '52795765971',
        docKey: 18434745315,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'Payment',
        nomination: 'Payment - Amount: USD33.88; Merchant: MAILGUN TECHNOLOGIES,, United States of America; MCC:5734; Date: 02/09/2023 08:42; Card No: ****3035; Payment transaction amount and currency: 33.88 USD',
        postDate: '2023-09-03T00:00:00',
        operationDate: '2023-09-02T08:42:00',
        amount: '33.88',
        oppositeAmount: null,
        ccy: 'USD',
        canCopy: 'N',
        status: 'P',
        nominationOriginal: 'Payment - Amount: USD33.88; Merchant: MAILGUN TECHNOLOGIES,, United States of America; MCC:5734; Date: 02/09/2023 08:42; Card No: ****3035; Payment transaction amount and currency: 33.88 USD',
        prodGroup: 'PLC',
        entryType: 'TRN',
        printSwift: 'N',
        printFormType: 'PAYMENT',
        isInternalOperation: 'N',
        entryGroupDValue: null,
        entryGroupNameId: 7,
      },
      {
        hold: false,
        date: new Date('2023-09-02T07:42:00+03:00'),
        movements: [
          {
            id: '52795765971',
            account: { id: '1338' },
            invoice: null,
            sum: -33.88,
            fee: 0
          }
        ],
        merchant: {
          country: null,
          city: null,
          title: 'MAILGUN TECHNOLOGIES',
          mcc: 5734,
          location: null
        },
        comment: null
      }
    ],
    [ // THIS TEST MIGHT BE INACCURATE
      {
        accountKey: '11570661148',
        entryId: '91447811016',
        docKey: 28133932926,
        clientKey: '154925928',
        language: 'EN',
        sourceEntryGroup: 'Payment',
        nomination: 'Payment - Amount: USD19.99; Merchant: UBR* PENDING.UBER.COM>London GB, United Kingdom of Great Britain and Northern Ireland; MCC:4121; Date: 04/07/2025 14:08; Card No: ****9759; Payment transaction amount and currency: 19.99 USD; Bank conversion rate (USD-GEL): 3.795',
        postDate: '2025-07-05T00:00:00',
        operationDate: '2025-07-04T14:08:00',
        amount: '6.48',
        oppositeAmount: null,
        ccy: 'USD',
        canCopy: 'N',
        status: 'F',
        nominationOriginal: 'Payment - Amount: USD19.99; Merchant: UBR* PENDING.UBER.COM>London          GB, United Kingdom of Great Britain and Northern Ireland; MCC:4121; Date: 04/07/2025 14:08; Card No: ****9759; Payment transaction amount and currency: 19.99 USD; Bank conversion rate (USD-GEL): 3.795',
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        printFormType: 'PAYMENT',
        isInternalOperation: 'N',
        entryGroupDValue: null,
        entryGroupNameId: 7,
      },
      {
        hold: true,
        date: new Date('2025-07-04T14:08:00+04:00'),
        movements: [
          {
            id: '91447811016',
            account: { id: '1338' },
            invoice: null,
            sum: -6.48,
            fee: 0
          }
        ],
        merchant: {
          country: 'United Kingdom of Great Britain and Northern Ireland',
          city: 'London          GB',
          title: 'UBR* PENDING.UBER.COM',
          mcc: 4121,
          location: null
        },
        comment: null
      }
    ]
  ])('converts purchase accountUsd', (apiTransaction, transaction) => {
    expect(convertTransaction(apiTransaction, accountUsd)).toEqual(transaction)
  })
})
