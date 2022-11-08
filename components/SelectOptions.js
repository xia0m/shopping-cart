import { createRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Div, Select, Text } from "react-native-magnus";

export default function SelectOptions({label, optionTitle, options, onSelectOption, selectedOption }) {

    const [selectValue, setSelectedValue] = useState('');
    const selectRef = createRef();

    return (
        <>
            <Text style={styles.labelText}>{label}</Text>
            <Div row>
                <Button flex={1} bg='white' borderWidth={1} borderColor='#eaeaea' onPress={() => {
                    if (selectRef.current) {
                        selectRef.current.open();
                    }
                }}><Text>{selectedOption}</Text></Button>
            </Div>
            <Select
                onSelect={onSelectOption}
                ref={selectRef}
                value={selectedOption}
                title={optionTitle}
                mt="2xl"
                roundedTop="xl"
                data={options}
                renderItem={({value, label}) => (
                    <Select.Option value={value} py="md" px="xl">
                    <Text>{label}</Text>
                    </Select.Option>
                )}
            />
        </>
    )
}

const styles = StyleSheet.create({
    labelText: {
        marginBottom: 4,
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight:'700',
        color:'#6b6b6b'
    },
})