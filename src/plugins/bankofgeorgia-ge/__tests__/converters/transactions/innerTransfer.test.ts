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

// describe('convertTransaction', () => {
//   it.each([
//     [ // placing GEL on deposit
//       {
//         cardTransactions: [
//           {
//             statmentId: 30443223320,
//             acctKey: 11578997519,
//             entryId: 50975846237,
//             docKey: 13363643144,
//             essId: null,
//             nomination: 'Payment - Amount GEL50.00; Placing funds on deposit ',
//             entryGroup: null,
//             merchantId: null,
//             postDate: 1652990400000,
//             authDateStr: null,
//             inpSysdate: 1653049282000,
//             operationDate: 1652990400000,
//             amount: 50,
//             oppositeAmount: null,
//             ccy: 'GEL',
//             clientComment: null,
//             canCopy: 'N',
//             status: 'P',
//             groupDescription: null,
//             groupType: null,
//             docNomination: null,
//             beneficiary: null,
//             bonusPoint: null,
//             merchantName: null,
//             merchantNameInt: null,
//             amountBase: 50,
//             entryGroupDKey: 'text.entry.group.name.Interest.Accrue',
//             entryGroupDValue: null,
//             entryGroupNameId: 10,
//             bonusInfo: null,
//             essServiceId: null,
//             merchantClientId: null,
//             cashbackAmount: null,
//             groupImageId: 35623079,
//             nominationOriginal: 'Placing funds on deposit ',
//             productName: 'Accumulative Deposit',
//             prodGroup: 'CDS',
//             entryType: 'CDS',
//             printSwift: 'N',
//             isPrintable: 'N',
//             printFormType: 'OTHER',
//             hasTransferBack: 'N',
//             benefProfileId: null,
//             positiveSum: null,
//             negativeSum: null,
//             isInternalOperation: 'Y',
//             transferBankBic: null,
//             deviceType: null,
//             swiftGpiFlag: 'N',
//             counterPartyClientKey: null,
//             authDate: null,
//             bonusPointType: null,
//             attachmentFileBase64: null,
//             isRepeatAllowed: false,
//             isTemplateAllowed: false,
//             isDDSTOAlllowed: false,
//             isStatementAllowed: true,
//             isPrintAllowed: false,
//             isReversalAvailable: false,
//             entryIconBase64: null,
//             merchantIconBase64: null,
//             providerIconUrl: null,
//             groupimageUrl: '<dummy>',
//             imageUrl: '<dummy>',
//             benefProfilePicture: null,
//             operationTitle: 'Accumulative Deposit',
//             entryDetailType: null,
//             pfmId: 5077529897,
//             pfmForecast: false,
//             pfmCatId: 630,
//             pfmCatName: null,
//             pfmParentCatId: 590,
//             pfmParentCatName: null,
//             pfmRecurring: false,
//             pfmSplit: false,
//             pfmParentOpId: null,
//             pfmTagId: null,
//             pfmTagName: null,
//             pfmTags: null,
//             pfmComputable: false,
//             isRuleCreationEnabled: false,
//             canSplit: false,
//             isCarTemplateAllowed: false
//           }
//         ],
//         depositTransactions: [
//           {
//             statmentId: 30443223109,
//             acctKey: 11579131107,
//             entryId: 50975846236,
//             docKey: 13363643144,
//             essId: null,
//             nomination: 'Income - Amount GEL50.00; Placing funds on deposit ',
//             entryGroup: null,
//             merchantId: null,
//             postDate: 1652990400000,
//             authDateStr: null,
//             inpSysdate: 1653049282000,
//             operationDate: 1652990400000,
//             amount: -50,
//             oppositeAmount: null,
//             ccy: 'GEL',
//             clientComment: null,
//             canCopy: 'N',
//             status: 'P',
//             groupDescription: null,
//             groupType: null,
//             docNomination: null,
//             beneficiary: null,
//             bonusPoint: null,
//             merchantName: null,
//             merchantNameInt: null,
//             amountBase: -50,
//             entryGroupDKey: 'text.entry.group.name.Interest.Accrue',
//             entryGroupDValue: null,
//             entryGroupNameId: 10,
//             bonusInfo: null,
//             essServiceId: null,
//             merchantClientId: null,
//             cashbackAmount: null,
//             groupImageId: 35623079,
//             nominationOriginal: 'Placing funds on deposit ',
//             productName: 'Accumulative Deposit',
//             prodGroup: 'CDS',
//             entryType: 'CDS',
//             printSwift: 'N',
//             isPrintable: 'N',
//             printFormType: 'OTHER',
//             hasTransferBack: 'N',
//             benefProfileId: null,
//             positiveSum: null,
//             negativeSum: null,
//             isInternalOperation: 'Y',
//             transferBankBic: null,
//             deviceType: null,
//             swiftGpiFlag: 'N',
//             counterPartyClientKey: null,
//             authDate: null,
//             bonusPointType: null,
//             attachmentFileBase64: null,
//             isRepeatAllowed: false,
//             isTemplateAllowed: false,
//             isDDSTOAlllowed: false,
//             isStatementAllowed: true,
//             isPrintAllowed: false,
//             isReversalAvailable: false,
//             entryIconBase64: null,
//             merchantIconBase64: null,
//             providerIconUrl: null,
//             groupimageUrl: '<dummy>',
//             imageUrl: '<dummy>',
//             benefProfilePicture: null,
//             operationTitle: 'Accumulative Deposit',
//             entryDetailType: null,
//             pfmId: 5077529809,
//             pfmForecast: false,
//             pfmCatId: 630,
//             pfmCatName: null,
//             pfmParentCatId: 590,
//             pfmParentCatName: null,
//             pfmRecurring: false,
//             pfmSplit: false,
//             pfmParentOpId: null,
//             pfmTagId: null,
//             pfmTagName: null,
//             pfmTags: null,
//             pfmComputable: false,
//             isRuleCreationEnabled: false,
//             canSplit: false,
//             isCarTemplateAllowed: false
//           },
//           {
//             statmentId: 30443223140,
//             acctKey: 11579131107,
//             entryId: 50975846238,
//             docKey: 13363643144,
//             essId: null,
//             nomination: 'Payment - Amount GEL50.00; Placing funds on deposit ',
//             entryGroup: null,
//             merchantId: null,
//             postDate: 1652990400000,
//             authDateStr: null,
//             inpSysdate: 1653049282000,
//             operationDate: 1652990400000,
//             amount: 50,
//             oppositeAmount: null,
//             ccy: 'GEL',
//             clientComment: null,
//             canCopy: 'N',
//             status: 'P',
//             groupDescription: null,
//             groupType: null,
//             docNomination: null,
//             beneficiary: null,
//             bonusPoint: null,
//             merchantName: null,
//             merchantNameInt: null,
//             amountBase: 50,
//             entryGroupDKey: 'text.entry.group.name.Interest.Accrue',
//             entryGroupDValue: null,
//             entryGroupNameId: 10,
//             bonusInfo: null,
//             essServiceId: null,
//             merchantClientId: null,
//             cashbackAmount: null,
//             groupImageId: 35623079,
//             nominationOriginal: 'Placing funds on deposit ',
//             productName: 'Accumulative Deposit',
//             prodGroup: 'CDS',
//             entryType: 'CDS',
//             printSwift: 'N',
//             isPrintable: 'N',
//             printFormType: 'OTHER',
//             hasTransferBack: 'N',
//             benefProfileId: null,
//             positiveSum: null,
//             negativeSum: null,
//             isInternalOperation: 'Y',
//             transferBankBic: null,
//             deviceType: null,
//             swiftGpiFlag: 'N',
//             counterPartyClientKey: null,
//             authDate: null,
//             bonusPointType: null,
//             attachmentFileBase64: null,
//             isRepeatAllowed: false,
//             isTemplateAllowed: false,
//             isDDSTOAlllowed: false,
//             isStatementAllowed: true,
//             isPrintAllowed: false,
//             isReversalAvailable: false,
//             entryIconBase64: null,
//             merchantIconBase64: null,
//             providerIconUrl: null,
//             groupimageUrl: '<dummy>',
//             imageUrl: '<dummy>',
//             benefProfilePicture: null,
//             operationTitle: 'Accumulative Deposit',
//             entryDetailType: null,
//             pfmId: 5077529808,
//             pfmForecast: false,
//             pfmCatId: 630,
//             pfmCatName: null,
//             pfmParentCatId: 590,
//             pfmParentCatName: null,
//             pfmRecurring: false,
//             pfmSplit: false,
//             pfmParentOpId: null,
//             pfmTagId: null,
//             pfmTagName: null,
//             pfmTags: null,
//             pfmComputable: false,
//             isRuleCreationEnabled: false,
//             canSplit: false,
//             isCarTemplateAllowed: false
//           }
//         ]
//       },
//       [
//         {
//           comment: null,
//           date: new Date('2022-05-20T16:21:22.000+04:00'),
//           hold: false,
//           merchant: null,
//           movements: [
//             {
//               account: {
//                 id: '1337'
//               },
//               fee: 0,
//               id: '30443223320',
//               invoice: null,
//               sum: -50
//             },
//             {
//               account: {
//                 id: '1339'
//               },
//               fee: 0,
//               id: '30443223109',
//               invoice: null,
//               sum: 50
//             }
//           ]
//         }
//       ]
//     ]
//   ])('converts inner transfer to deposit', ({ cardTransactions, depositTransactions }, transactions) => {
//     expect(adjustTransactions({
//       transactions: [
//         ...cardTransactions.map(cardTransaction => convertTransaction(cardTransaction, accountGel)).filter(x => x != null) as ExtendedTransaction[],
//         ...depositTransactions.map(depositTransaction => convertTransaction(depositTransaction, depositGel)).filter(x => x != null) as ExtendedTransaction[]
//       ]
//     })).toEqual(transactions)
//   })
// })

// describe('convertTransaction', () => {
//   it.each([
//     [ // placing USD on deposit
//       {
//         cardTransactions: [
//           {
//             statmentId: 37014488874,
//             acctKey: 11573059596,
//             entryId: 56344273885,
//             docKey: 14989955407,
//             essId: null,
//             nomination: 'Outgoing Transfer - Amount: USD3,000.00; Beneficiary: ANTON ANTONOV; Account: GE34BG0000000537046615USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
//             entryGroup: null,
//             merchantId: null,
//             postDate: 1667419200000,
//             authDateStr: null,
//             inpSysdate: 1667477483000,
//             operationDate: 1667419200000,
//             amount: 3000,
//             oppositeAmount: null,
//             ccy: 'USD',
//             clientComment: null,
//             canCopy: 'Y',
//             status: 'A',
//             groupDescription: null,
//             groupType: null,
//             docNomination: 'Transfer to Deposit',
//             beneficiary: 'ANTON ANTONOV',
//             bonusPoint: null,
//             merchantName: null,
//             merchantNameInt: null,
//             amountBase: 8278.8,
//             entryGroupDKey: 'text.entry.group.name.Transfer',
//             entryGroupDValue: null,
//             entryGroupNameId: 6,
//             bonusInfo: null,
//             essServiceId: null,
//             merchantClientId: null,
//             cashbackAmount: null,
//             groupImageId: 35623084,
//             nominationOriginal: 'Outgoing Transfer - Amount: USD3,000.00; Beneficiary: ANTON ANTONOV; Account: GE34BG0000000537046615USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
//             productName: null,
//             prodGroup: 'PMI',
//             entryType: 'PMI',
//             printSwift: 'N',
//             isPrintable: 'Y',
//             printFormType: 'OUT_TRANSFER',
//             hasTransferBack: 'N',
//             benefProfileId: null,
//             positiveSum: null,
//             negativeSum: null,
//             isInternalOperation: 'Y',
//             transferBankBic: 'BAGAGE22',
//             deviceType: null,
//             swiftGpiFlag: 'N',
//             counterPartyClientKey: null,
//             gifUrl: null,
//             gifId: null,
//             authDate: null,
//             bonusPointType: null,
//             attachmentFileBase64: null,
//             isRepeatAllowed: true,
//             isTemplateAllowed: false,
//             isDDSTOAlllowed: true,
//             isStatementAllowed: true,
//             isPrintAllowed: true,
//             isReversalAvailable: false,
//             entryIconBase64: null,
//             merchantIconBase64: null,
//             providerIconUrl: null,
//             groupimageUrl: '<dummy>',
//             imageUrl: '<dummy>',
//             benefProfilePicture: null,
//             operationTitle: 'ANTON ANTONOV',
//             entryDetailType: null,
//             pfmId: 6350238832,
//             pfmForecast: false,
//             pfmCatId: 630,
//             pfmCatName: null,
//             pfmParentCatId: 590,
//             pfmParentCatName: null,
//             pfmRecurring: false,
//             pfmSplit: false,
//             pfmParentOpId: null,
//             pfmTagId: null,
//             pfmTagName: null,
//             pfmTags: null,
//             pfmComputable: false,
//             isRuleCreationEnabled: true,
//             canSplit: true,
//             isCarTemplateAllowed: false
//           }
//         ],
//         depositTransactions: [
//           {
//             statmentId: 37014488883,
//             acctKey: 11578607953,
//             entryId: 56344273884,
//             docKey: 14989955407,
//             essId: null,
//             nomination: 'Incoming Transfer - Amount: USD3,000.00; Sender: გარიპოვა ქსენიია; Account: GE82BG0000000534096272USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
//             entryGroup: null,
//             merchantId: null,
//             postDate: 1667419200000,
//             authDateStr: null,
//             inpSysdate: 1667477483000,
//             operationDate: 1667419200000,
//             amount: -3000,
//             oppositeAmount: null,
//             ccy: 'USD',
//             clientComment: null,
//             canCopy: 'N',
//             status: 'A',
//             groupDescription: null,
//             groupType: null,
//             docNomination: 'Transfer to Deposit',
//             beneficiary: 'გარიპოვა ქსენიია',
//             bonusPoint: null,
//             merchantName: null,
//             merchantNameInt: null,
//             amountBase: -8278.8,
//             entryGroupDKey: 'text.entry.group.name.Income',
//             entryGroupDValue: null,
//             entryGroupNameId: 5,
//             bonusInfo: null,
//             essServiceId: null,
//             merchantClientId: null,
//             cashbackAmount: null,
//             groupImageId: 35623078,
//             nominationOriginal: 'Incoming Transfer - Amount: USD3,000.00; Sender: გარიპოვა ქსენიია; Account: GE82BG0000000534096272USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
//             productName: null,
//             prodGroup: 'PMI',
//             entryType: 'PMI',
//             printSwift: 'N',
//             isPrintable: 'Y',
//             printFormType: 'IN_TRANSFER',
//             hasTransferBack: 'Y',
//             benefProfileId: null,
//             positiveSum: null,
//             negativeSum: null,
//             isInternalOperation: 'Y',
//             transferBankBic: 'BAGAGE22',
//             deviceType: null,
//             swiftGpiFlag: 'N',
//             counterPartyClientKey: null,
//             gifUrl: null,
//             gifId: null,
//             authDate: null,
//             bonusPointType: null,
//             attachmentFileBase64: null,
//             isRepeatAllowed: false,
//             isTemplateAllowed: false,
//             isDDSTOAlllowed: false,
//             isStatementAllowed: true,
//             isPrintAllowed: true,
//             isReversalAvailable: false,
//             entryIconBase64: null,
//             merchantIconBase64: null,
//             providerIconUrl: null,
//             groupimageUrl: '<dummy>',
//             imageUrl: '<dummy>',
//             benefProfilePicture: null,
//             operationTitle: 'გარიპოვა ქსენიია',
//             entryDetailType: null,
//             pfmId: 6350289939,
//             pfmForecast: false,
//             pfmCatId: 630,
//             pfmCatName: null,
//             pfmParentCatId: 590,
//             pfmParentCatName: null,
//             pfmRecurring: false,
//             pfmSplit: false,
//             pfmParentOpId: null,
//             pfmTagId: null,
//             pfmTagName: null,
//             pfmTags: null,
//             pfmComputable: false,
//             isRuleCreationEnabled: true,
//             canSplit: false,
//             isCarTemplateAllowed: false
//           }
//         ]
//       },
//       [
//         {
//           date: new Date('2022-11-03T12:11:23.000Z'),
//           hold: false,
//           merchant: null,
//           movements: [
//             {
//               account: {
//                 id: '1338'
//               },
//               fee: 0,
//               id: '37014488874',
//               invoice: null,
//               sum: -3000
//             },
//             {
//               account: {
//                 id: '1340'
//               },
//               fee: 0,
//               id: '37014488883',
//               invoice: null,
//               sum: 3000
//             }
//           ],
//           comment: 'Transfer to Deposit'
//         }
//       ]
//     ]
//   ])('converts inner transfer to deposit', ({ cardTransactions, depositTransactions }, transactions) => {
//     expect(adjustTransactions({
//       transactions: [
//         ...cardTransactions.map(cardTransaction => convertTransaction(cardTransaction, accountUsd)).filter(x => x != null) as ExtendedTransaction[],
//         ...depositTransactions.map(depositTransaction => convertTransaction(depositTransaction, depositUSD)).filter(x => x != null) as ExtendedTransaction[]
//       ]
//     })).toEqual(transactions)
//   })
// })
