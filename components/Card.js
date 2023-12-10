import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Card({ data }) {

    const getParent = (id) => {
        const parent = data.find(person => person.id === id)
        return parent ? parent.name : "No Manager"
    }

    return (
        <View style={{ marginHorizontal: 15 }}>
            {data.map(info => {
                return (
                    <View style={{borderRadius:20,marginVertical:30, marginHorizontal:15,elevation:10, backgroundColor:info.backgroundColor}} key={info.id}>
                        <View>
                            <View style={styles.img_cont}>
                                <FontAwesome name="user" size={50} color={"grey"} />
                            </View>

                            <View style={styles.data_cont}>
                                <View style={{ marginTop: 25 }}>
                                    <Text style={styles.key}>Name: <Text style={styles.value}>{info.name} </Text></Text>
                                    <Text style={styles.key}>Email: <Text style={styles.value}>{info.email}</Text></Text>
                                    <Text style={styles.key}>Phone Number: <Text style={styles.value}>{info.phone}</Text></Text>
                                    <Text style={styles.key}>Manager: <Text style={styles.value}>{getParent(info.parentId)}</Text></Text>
                                    <Text style={styles.key}>Address: <Text style={styles.value}>{info.address}</Text></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })}
            {/* <View style={styles.card_cont}>
                <View>
                    <View style={styles.img_cont}>
                        <FontAwesome name="user" size={50} color={"grey"} />
                    </View>

                    <View style={styles.data_cont}>
                        <View style={{marginTop:25}}>
                            <Text style={styles.key}>Name: <Text style={styles.value}>John Doe </Text></Text>
                            <Text style={styles.key}>Email: <Text style={styles.value}>john.doe@example.com</Text></Text>
                            <Text style={styles.key}>Phone Number: <Text style={styles.value}>555 555 </Text></Text>
                            <Text style={styles.key}>Manager: <Text style={styles.value}>Alica Brown </Text></Text>
                            <Text style={styles.key}>Address: <Text style={styles.value}>789 Oak St, Village, Country</Text></Text>
                        </View>
                    </View>
                </View>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({


    card_cont: {
        borderRadius: 20,
        marginVertical: 30,
        marginHorizontal: 15,
        elevation: 10,

    },


    img_cont: {
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "rgba(128, 128, 128,0.5)",
        paddingVertical: 40,
        paddingHorizontal: 45,
        borderRadius: 100,
        marginTop: 20,
        backgroundColor: "white",
        margin: 20

    },

    data_cont: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        padding: 30,
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingBottom: 35

    },

    key: {
        fontWeight: "bold",
        marginVertical: 5,
        fontSize: 16,
    },
    value: {
        fontWeight: "normal",
        fontSize: 16
    }

})