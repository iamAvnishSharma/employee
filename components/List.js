import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function List({ data }) {

    const getParent = (id) => {
        const parent = data.find(person => person.id === id)
        return parent ? parent.name : "No Manager"
    }

    return (
        <View style={{ marginHorizontal: 15 }}>
            {data.map(info => {
                return (
                    <View style={styles.cont} key={info.id}>
                        <View style={styles.item}>
                            <View style={{ paddingHorizontal: 15 }}>
                                <FontAwesome name="user" color={"gray"} size={50} />
                            </View>
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{info.name}</Text>
                                <Text style={{ color: "gray" }}>{info.email}</Text>
                                <Text style={{ color: "gray" }}>{info.phone}</Text>
                                <Text style={{ color: "gray" }}>{getParent(info.parentId)}</Text>
                                <Text style={{ color: "gray" }}>{info.address}</Text>
                            </View>
                        </View>

                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        borderRadius: 20,
        padding: 10,
        elevation: 20,
        backgroundColor: "white",
        marginVertical: 10
    },
    item: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    }
})