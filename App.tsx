import React from "react";
import { Keyboard, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { colors } from "./constants/colors";

export default function App() {
  const [base, setBase] = React.useState("");
  const [tipPercentage, setTipPercentage] = React.useState<number>(10)
 
  const BASE_AMOUNT = parseFloat(base)
  const TIP_PERCENTAGE_TO_DECIMAL = tipPercentage / 100

  // calculate tip amount
  const tipAmount = BASE_AMOUNT * TIP_PERCENTAGE_TO_DECIMAL
  // calculate final total
  const finalTotal = BASE_AMOUNT + tipAmount


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      {/** Wrapper View */}
      <View style={{
        margin: 20, 
        marginVertical: 75,
        }}>
          {/** Title Text */}
          <Text style={{
            textAlign:'center',
            fontSize: 45,
            fontWeight: '600',
            color: colors.secondaryBlue
            }}>
            Tipper</Text>
            {/** Title SubText */}
            <Text style={{
            textAlign:'center',
            marginTop: 5,
            fontSize: 15,
            fontWeight: '600',
            color: colors.secondaryBlue
            }}>
            Tip Calculator</Text>
      {/** Base Amount View */}
      <View style={styles.baseAmountView}>
      {/** Base Text */}
      <Text style={styles.text}>Base</Text>
      {/** Base Amount Input */}
      <TextInput
        style={styles.input}
        onChangeText={value => setBase(value)}
        placeholder={'Bill Amount'}
        value={base}
        placeholderTextColor="#E1E6EA"
        keyboardType='numeric'
      />
      </View>

       {/** Tip Percent View */}
       <View style={styles.tipPercentView}>
        {/** Tip Percent Text */}
        <Text style={styles.text}>{Math.floor(tipPercentage)}%</Text>
        {/** Slider */}
        <Slider
          style={{width: 175, height: 40, marginLeft: 15 }}
          minimumValue={10}
          maximumValue={30}
          step={1}
          onValueChange={value => setTipPercentage(value)}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor={colors.secondaryBlue}
          />
      </View>
    
       {/** Tip Amount View */}
       <View style={styles.tipAmountView}>
      {/** Tip Amount Text */}
      <Text style={styles.text}>Tip</Text>
      {/** Tip Amount Value*/}
      <Text style={{
        marginLeft: 15, 
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
        }}>{tipAmount ? "$" + tipAmount.toFixed(2) : '$0.00'}</Text>
      </View>

       {/** Total Amount View */}
       <View style={styles.totalAmountView}>
         {/** Total Amount Text */}
      <Text style={styles.text}>Total</Text>
      {/** Total Amount Value*/}
      <Text style={{
        marginLeft: 15, 
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
        }}>{finalTotal ? "$" + finalTotal.toFixed(2) : '$0.00'}</Text>
      </View>
      </View>
    </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: 'column',
  },
  baseAmountView: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25
  },
  tipPercentView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    marginTop: Platform.OS === 'ios' ? 7 : 0,
  },
  tipAmountView: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
  },
  totalAmountView: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  input: {
    height: 40,
    margin: 12,
    width: 140,
    bottom: Platform.OS === 'ios' ? 0 : 8.5,
    fontSize: 20,
    marginLeft: 15,
    color: '#E1E6EA',
    borderBottomWidth: 1.5,
    textAlignVertical: 'bottom',
    borderColor: colors.secondaryBlue
  },
});
