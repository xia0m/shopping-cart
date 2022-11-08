import { Div } from 'react-native-magnus';

import SelectOptions from './SelectOptions';

export const typesOptions = [
  { value: 'physical', label: 'Physical Copy' },
  { value: 'digital', label: 'Digital Copy (.jpeg)' },
];

export const numberOptions = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
];

export default function ProductControl({
  handleItemQuantityChange,
  quantity,
  productType,
  handleItemTypeChange,
}) {
  return (
    <Div row>
      <Div flex={1}>
        <SelectOptions
          label="Quantity"
          optionTitle="商品数量"
          options={numberOptions}
          onSelectOption={handleItemQuantityChange}
          selectedOption={quantity}
        />
      </Div>
      <Div flex={4} ml={16}>
        <SelectOptions
          label="Format"
          optionTitle="选择商品规格"
          options={typesOptions}
          onSelectOption={handleItemTypeChange}
          selectedOption={typesOptions.find((option) => option.value === productType)?.label}
        />
      </Div>
    </Div>
  );
}
