import React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from 'expo-checkbox';

const FinancialInfoScreen: React.FC = ({ navigation }) => {  // Destructure navigation from props
    const [incomeSource, setIncomeSource] = React.useState<string>('');
    const [monthlyIncome, setMonthlyIncome] = React.useState<string>('');
    const [bankruptcy, setBankruptcy] = React.useState<string>('No');
    const [communication, setCommunication] = React.useState<boolean>(false);
    const [creditReport, setCreditReport] = React.useState<boolean>(false);
    const [terms, setTerms] = React.useState<boolean>(false);

    const handleContinue = () => {
        console.log({
            incomeSource,
            monthlyIncome,
            bankruptcy,
            communication,
            creditReport,
            terms,
        });

        navigation.navigate('CarouselComponent');  // Use navigation.navigate correctly
//         navigation.navigate('Index');  // Use navigation.navigate correctly

    };


    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>Financial Information</Text>
                <Text style={styles.requiredFields}>*indicates a required field</Text>

                <Text style={styles.label}>Primary Source of Income *</Text>
                <View style={styles.card}>
                    <Picker
                        selectedValue={incomeSource}
                        onValueChange={(itemValue) => setIncomeSource(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Salary" value="Salary" />
                        <Picker.Item label="Business" value="Business" />
                        <Picker.Item label="Freelance" value="Freelance" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                </View>

                <Text style={styles.label}>Monthly Income After Taxes *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter monthly income"
                    keyboardType="numeric"
                    value={monthlyIncome}
                    onChangeText={setMonthlyIncome}
                />

                <Text style={styles.label}>Have you declared bankruptcy in the last 7 years?</Text>
                <View style={styles.radioGroup}>
                    <TouchableOpacity
                        style={styles.radioButton}
                        onPress={() => setBankruptcy('No')}
                    >
                        <View style={[styles.radioCircle, bankruptcy === 'No' && styles.selectedRadioCircle]}>
                            {bankruptcy === 'No' && <View style={styles.selectedInnerCircle} />}
                        </View>
                        <Text style={styles.radioButtonText}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.radioButton}
                        onPress={() => setBankruptcy('Yes')}
                    >
                        <View style={[styles.radioCircle, bankruptcy === 'Yes' && styles.selectedRadioCircle]}>
                            {bankruptcy === 'Yes' && <View style={styles.selectedInnerCircle} />}
                        </View>
                        <Text style={styles.radioButtonText}>Yes</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Please check the following agreements:</Text>
                <View style={styles.checkboxContainer}>
                    <CheckBox value={communication} onValueChange={setCommunication} />
                    <Text style={styles.checkboxLabel}>
                        By submitting this form, I agree and acknowledge that Money Mart may send me additional communications regarding their products.
                    </Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox value={creditReport} onValueChange={setCreditReport} />
                    <Text style={styles.checkboxLabel}>
                        I consent to the pulling of my credit report.
                    </Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox value={terms} onValueChange={setTerms} />
                    <Text style={styles.checkboxLabel}>
                        I agree to the terms and conditions.
                    </Text>
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Button title="Continue" onPress={handleContinue} />
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    requiredFields: {
        fontSize: 14,
        color: 'red',
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginVertical: 8,
    },
    card: {
        marginBottom: 16,
        borderRadius: 8,
        elevation: 4,
        padding: 16,
        backgroundColor: 'white',
    },
    picker: {
        height: 50,
        width: '100%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRadioCircle: {
        borderColor: 'blue',
    },
    selectedInnerCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'blue',
    },
    radioButtonText: {
        marginLeft: 8,
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    checkboxLabel: {
        fontSize: 16,
        marginLeft: 8,
        flex: 1,
    },
});

export default FinancialInfoScreen;