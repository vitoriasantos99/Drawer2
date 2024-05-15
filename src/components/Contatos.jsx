import React from "react";
import { View, Text } from "react-native";

export default props =>{
    return(
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'
        }}> 
        <Text>
            E-mail: contato@gfgrafica.com.br
        </Text>
        <Text>
            Telefone: (11) 99999-9999
        </Text>
        <Text>
            WhatsApp: (11) 99999-9999
        </Text>
        </View>
    )
}