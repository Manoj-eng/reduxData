import React  from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction, getLanguage } from './redux/actions';



const Counter = (props) => {
    const data = useSelector((state) =>state.counter);
    // const Newdata = useSelector((state) =>state.language);
    
    const dispatch = useDispatch();

    return (
        <View>
           <Button
           title="Add"
           onPress={() => dispatch(addition())}
           />
           <Text>{data}</Text>

           <Button
           title = "Subtract"
           onPress={() => dispatch(subtraction())}
           />

           {/* <FlatList 
           Newdata={getLanguage}
           renderItem = {({item}) 
             => (
                 <View>
                     <Text>{item.languageName}</Text>
                     <Text>{item.languageCode}</Text>
                 </View>
             )
        }
        keyExtractor={(item, index) => index.toString()}
           /> */}

        </View>
    )
}

export default Counter;