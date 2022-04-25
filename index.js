// run `node index.js` in the terminal

const benefitArray = {
  benefitId: '160647695673542252809',
  benefitName: 'SurgSvcs',
  benefitDesc: 'Surgery Services',
  benefit: [
    {
      benefitId: '160647695673542253809',
      benefitName: 'Facility',
      benefitDesc: 'Facility',
      parentId: '160647695673542252809',
      benefit: [
        {
          benefitId: '160647695673542254809',
          benefitName: 'ReproductiveSurg',
          benefitDesc: 'Reproductive Surgery Facility',
          parentId: '160647695673542253809',
          benefit: [
            {
              benefitId: '1606476956735423927809',
              benefitName: 'Abortion',
              benefitDesc: 'Abortion',
              parentId: '160647695673542254809',
              benefit: [
                {
                  benefitId: '1606476956735423927809',
                  benefitName: 'Abortion2',
                  benefitDesc: 'Abortion2',
                  parentId: '160647695673542254809',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
const benefitDescArray = [];
const getBenefitDescription = (benefit) => {
  for (const key in benefit) {
    if (key === 'benefit') {
      getBenefitDescription(benefit[key][0]);
    } else if (key === 'benefitDesc') {
      benefitDescArray.push(benefit[key]);
    }
  }
  return benefitDescArray;
};

console.log(getBenefitDescription(benefitArray));
