// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [responseData, setResponseData] = useState(null);

  // var path = 'https://api-planetfibers.mixbox.am/';
const [isMessageVisible, setIsMessageVisible] = useState(false);

const handlePostRequest1 = () => {
  axios
    .post("https://dev.passfactory.io/api/v1/availability/default-explore")
    .then((response) => {
      console.log(
        "GET request 1 successful",
        response.data.payload[0].halls[0].availabilities[0].message
      );
      if (isMessageVisible) {
        setResponseData(null);
      } else {
        setResponseData(
          response.data.payload[0].halls[0].availabilities[0].message
        );
      }
      setIsMessageVisible((prev) => !prev);
    })
    .catch((error) => {
      console.error("Error making GET request 1", error);
    });
};


  const handlePostRequest2 = () => {
    axios
      .post("https://api.tob.am/api/v1/product/explore")
      .then((response) => {
        console.log("POST request 2 successful", response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Server responded with a non-2xx status");
          console.log("Error message:", error.response.data.message);
          console.log("Error code:", error.response.data);
        } else if (error.request) {
          console.log("No response received from server");
        } else {
          console.log("Error setting up the request", error.message);
        }
      });
  };

  const handlePostRequest3 = () => {
    axios
      .post("https://api.tob.am/api/v1/section/1/product?page=1&limit=1")
      .then((response) => {
        console.log("Get request 3 successful", response.data);
      })
      .catch((error) => {
        console.error("Error making Get request 3", error);
      });
  };

  const handlePostRequest4 = () => {
    axios
      .post("https://api.tob.am/api/v1/category/get-attributes", {
        "category_ids": [2]
      })
      .then((response) => {
        console.log("POST request 4 successful", response.data);
      })
      .catch((error) => {
        console.error("Error making POST request 4", error?.response?.data?.message);
      });
  };

  return (
    <View style={styles.container}>

        <View style={styles.row}>

            <TouchableOpacity onPress={handlePostRequest1} style={styles.touchableOpacity} >
              <Text style={styles.text}>Request 1</Text>
              {responseData && <Text style={styles.data}>Response Data: {JSON.stringify(responseData)}</Text>}
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePostRequest2} style={styles.touchableOpacity}>
              <Text style={styles.text}>Request 2</Text>
            </TouchableOpacity>
          </View>

      <View style={styles.row}>

      <TouchableOpacity  onPress={handlePostRequest3} style={styles.touchableOpacity} >
        <Text style={styles.text}>Request 3</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePostRequest4} style={styles.touchableOpacity} >
        <Text style={styles.text}>Request 4</Text>
      </TouchableOpacity>
      
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "center",
  },
  touchableOpacity: {
    marginBottom: 15,
    width: 120,
    padding:20,
    marginRight:20,
    backgroundColor: "black",
  },
  text:{
    color: "white", 
    fontStyle:'italic',
    textAlign: "center",
    fontSize:18,
  },
  data:{
    color:'white',
    fontSize:12,
    marginTop:15,
    backgroundColor:'grey',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent:'space-between',
    alignItems: 'flex-start', 
  },
});
