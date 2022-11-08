import { useState } from "react";
import { Alert } from "react-native";
import { Button, Div, Input } from "react-native-magnus";
import { useCart } from "../context/CartContext";

const PROMO_CODE = 'HelloWorld';

export default function PromoInput(){

    const [promoClicked, setPromoClicked] = useState(false);
    const [promoText, setPromoText] = useState('');
    const {setPromoApplied} = useCart();

    const checkPromoCode = () => {
        if (promoText === PROMO_CODE) {
            setPromoApplied(true);
            Alert.alert('已经成功使用优惠码');
            setPromoClicked(false);
        } else {
            Alert.alert('优惠码无效，请重试')
        }
        setPromoText('');
    }


    return(
        <Div row flex={1} mx={12} mt={24} h={54}>
            {promoClicked ?
                <Div row alignItems="center" flex={1}>
                    <Div row flex={7} alignItems="center">
                        <Input placeholder='Promo code?' flex={1} h={54} value={promoText} onChangeText={(value) => setPromoText(value)} />
                        <Button
                            position="absolute"
                            bg='transparent'
                            color='#1a4db3'
                            right={10}
                            top={6}
                            borderBottomColor='#1a4db3'
                            borderBottomWidth={1}
                            fontWeight="500"
                            pb={0}
                            px={0}
                            rounded='xs'
                            onPress={checkPromoCode}
                        >Apply</Button>
                    </Div>
                    <Button 
                        flex={1}
                        bg='transparent'
                        color="black"
                        borderBottomColor="black"
                        borderBottomWidth={1}
                        pb={0}
                        px={0}
                        mx={8}
                        fontWeight="500"
                        pt={17}
                        rounded='xs'
                        onPress={() => setPromoClicked(false)}
                    >Cancel</Button>
                </Div>
                
                :
                <Button onPress={()=>setPromoClicked(true)} flex={1} bg='white' color='black' fontSize={16} rounded="xs" h={54} >Promo Code?</Button>
            }
            
            
        </Div>
    )
}