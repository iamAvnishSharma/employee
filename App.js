import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from './components/Card';
import {useState,useEffect} from 'react';
import List from './components/List';
import axios from 'axios';


export default function App() {

  const [check, setCheck] = useState(true)
  const [data, setData] = useState([])


  useEffect(() => {
    axios.get("https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d").then(
      response => {
        setData(response.data)
      }
    )
  })

  


  const styles = StyleSheet.create({
    container: {
      marginTop: 50,


    },

    heading: {
      fontSize: 25,
      fontWeight: "bold",
      paddingVertical: 10,
      marginLeft: 15
    },

    type: {
      flexDirection: 'row',
      backgroundColor: "white",
      alignSelf: "flex-start",
      justifyContent: "flex-start",
      marginLeft: 15,
      marginTop: 10,
      marginBottom: 20,
      elevation: 10
    },
    card: {
      flexDirection: 'row',
      gap: 10,
      borderRightWidth: 0.5,
      padding: 8,
      backgroundColor: check ? "blue" : "white",
      borderColor: "grey",
    },

    list: {
      flexDirection: 'row',
      gap: 10,
      borderLeftWidth: 0.5,
      borderColor: "grey",
      padding: 8,
      backgroundColor: check ? "white" : "blue"
    }

  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Employees
      </Text>

      <View style={styles.type}>
        <View style={styles.card} onTouchEnd={() => setCheck(true)}>
          <MaterialCommunityIcons name='card-multiple' size={20} color={check ? "white" : "grey"} />
          <Text style={{color: check ? "white" : "black"}}>Card View</Text>
        </View>
        <View style={styles.list} onTouchEnd={() => setCheck(false)}>
          <MaterialCommunityIcons name='format-list-bulleted-square' size={20} color={check ? "gray" : "white"} />
          <Text style={{color: check ? "black" : "white"}}>List View</Text>
        </View>
      </View>

      <View>
        <ScrollView style={{ marginBottom: 200 }}>
          <View style={{ paddingBottom: 40 }}>
            {check ? <Card data={data}/> : <List data={data}/>}
          </View>
        </ScrollView>
      </View>


      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,


  },

  heading: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 15
  },

  type: {
    flexDirection: 'row',
    backgroundColor: "white",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 20,
    elevation: 10
  }
});
