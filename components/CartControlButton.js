import { Button, Icon } from 'react-native-magnus';

export default function CartControlButton({ name, bg, onQuantityButtonPressed }) {
  return (
    <Button bg={bg} rounded="circle" onPress={onQuantityButtonPressed}>
      <Icon name={name} />
    </Button>
  );
}
