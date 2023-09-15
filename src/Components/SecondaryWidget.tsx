import { View, Text, Pressable, StyleSheet} from "react-native";


export default function Widget2(){

    return(
        <View style={styles.elevation}>
            <Text>Hello</Text>
            <Pressable style={styles.button}>
                <Text>
                    Submit
                </Text>
            </Pressable>

        </View>
    );
}


const styles = StyleSheet.create({
    button:{
        height: 50, 
        width: 100, 
        borderRadius: 5,  
        elevation:55, 
        shadowColor: "#000", 
        backgroundColor: 'blue', 
        alignItems: 'center', 
        justifyContent: 'center', 
        alignContent: 'center', 
        marginTop: 5
        
    
    }, 
    elevation: {
        shadowColor: '#000', 
        shadowOffset: {
            width:20,
            height: 22,
        },
        shadowRadius: 45,
        elevation: 55, 
        backgroundColor: '#E9E9E9', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 250, 
        width: 350, 
        borderRadius: 15, 
    }
}); 