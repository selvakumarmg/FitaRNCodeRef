import { View, Text, Button } from 'react-native'
import React, { useState,useMemo } from 'react'

const MemoComponent = () => {

    const [item, setItem] = useState(0);
    const [count, setCount] = useState(0);

    const isEven = useMemo(()=>{
        console.log("IsEven Called")
        let temp =  count % 2;

        for(let i=0;i<100;i++){
            //
        }

        return temp === 0 ? 'Even' : 'Odd'
    },[count])

    return (
        <View>
            <Text>MemoComponent</Text>
           <View style={{margin:20}}>
           <Button
                title={`Item: ${item}`}
                onPress={() => setItem(item + 1)}
            />
           </View>

           <View style={{margin:20}}>
           <Button
                title={`Count: ${count}`}
                onPress={() => setCount(count + 1)}
                
            />
           </View>

            <Text>Count Values is :{isEven}</Text>
        </View>
    )
}

export default MemoComponent