
import React, { Component } from 'react'
import { View, StatusBar, Text, StyleSheet } from 'react-native';

import InputNomer from '../../../InputNomer';

const buttons = [
    ['Bersihkan', 'Hapus',],
    ['7', '8', '9', '/'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '-'],
    ['0', ',', '=', '+']
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hasil: {
        flex: 3,
        backgroundColor: '#000'
    },
    input: {
        flex: 7,
        backgroundColor: '#000'
    },
    texthasil: {
        fontSize: 60,
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 30,
        textAlign: 'right'
    },
    inputRow: {
        flex: 1,
        flexDirection: "row"
    }
})

export default class App extends Component {

    constructor() {
        super()
        this.initialState = {
            displayValue: '0',
            operator: null,
            firstValue: '',
            secondValue: '',
            nextValue: false
        }
        this.state = this.initialState;
    }

    renderButtons() {
        let layouts = buttons.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
                return <InputNomer
                value={buttonItems}
                handleOnPress={this.handleInput.bind(this, buttonItems)} 
                key={'btn-buttonIndex'}/>
            });

            return <View style={styles.inputRow} key={'row-' + index}>
                {rowItem}
            </View>
        });

        return layouts
    }

    handleInput = (input) => {
        const { displayValue, operator, firstValue, secondValue, nextValue } = this.state;

        switch(input) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            this.setState({
                displayValue: (displayValue === '0') ? input : displayValue + input
        })

            if (!nextValue) {
                this.setState({
                    firstValue: firstValue + input
                })
            }
            else {
                this.setState({
                    secondValue: secondValue + input
                })
            }

            break;
            case '+':
            case '-':
            case 'x':
            case '/':
            this.setState({
                nextValue: true,
                operator: input,
                displayValue: (operator !== null ? displayValue.substr(0, displayValue.length -1) : displayValue) + input
        })
            break;
            case ',':
                let koma = displayValue.toString().slice(-1) //get karakter terakhir
                this.setState({
                    displayValue: koma !== ',' ? displayValue + input : displayValue
        })

            if (!nextValue) {
                this.setState({
                    firstValue: firstValue + input
                })
            }
            else {
                this.setState({ 
                    secondValue: secondValue + input
                })
            }
            break;

            case '=':
            let formatOperator= (operator == 'x') ? '*' : operator
            let hasil = eval(firstValue + formatOperator + secondValue)
            this.setState({
                displayValue : hasil % 1 === 0 ? hasil : hasil.toFixed(2),
                firstValue: hasil % 1 === 0 ? hasil : hasil.toFixed(2),
                secondValue: '',
                operator: null,
                nextValue: false
            })
            break;

            case 'Bersihkan':
            this.setState(this.initialState);
            break;

            case 'Hapus':
            let string = displayValue.toString();
            let hapusString = string.substr(0, string.length -1);
            let panjang = string.length;
            this.setState({
            displayValue: panjang == 1 ? '0' : hapusString,
            firstValue: panjang == 1 ? '' : hapusString
        })
            break;
    }  
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#000" barStyle="light-content" />
                <View style={styles.hasil}>
                    <Text style={styles.texthasil}>
                        {this.state.displayValue}
                    </Text>
                </View>

                <View style={styles.input}>
                    {this.renderButtons()}
                </View>
            </View>
        );
    }
}

