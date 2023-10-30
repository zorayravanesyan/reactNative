// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, Button, Text } from 'react-native';
import axios from 'axios';

export default function App() {
  const handlePostRequest1 = () => {
    axios.post('https://dev.passfactory.io/api/v1/availability/default-explore')
      .then(response => {
        console.log('GET request 1 successful', response.data);
      })
      .catch(error => {
        console.error('Error making GET request 1', error);
      });
  };

  const handlePostRequest2 = () => {
    axios.post('https://api.tob.am/api/v1/product/explore')
      .then(response => {
        console.log('POST request 2 successful', response.data);
      })
      .catch(error => {
        if (error.response) {
          console.log('Server responded with a non-2xx status');
          console.log('Error message:', error.response.data.message);
          console.log('Error code:', error.response.data);
        } else if (error.request) {
          console.log('No response received from server');
        } else {
          console.log('Error setting up the request', error.message);
        }
      });
  };

const handleGetRequest3 = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log('Get request 3 successful', response.data);
    })
    .catch(error => {
      console.error('Error making Get request 3', error);
    });
};

  
  const handlePostRequest4 = () => {
    axios.post('http://example.com/api/endpoint4', { data: 'some data' })
      .then(response => {
        console.log('POST request 4 successful', response);
      })
      .catch(error => {
        console.error('Error making POST request 4', error);
      });
  };
  
  return (
    <View style={styles.container}>
    <Button title="Request 1" onPress={handlePostRequest1} style={styles.button} />
    <Text>{'\n'}</Text>
    <Button title="Request 2" onPress={handlePostRequest2} style={styles.button}/>
    <Text>{'\n'}</Text>
    <Button title="Request 3" onPress={handleGetRequest3} style={styles.button}/>
    <Text>{'\n'}</Text>
    <Button title="Request 4" onPress={handlePostRequest4} style={styles.button}/>
  </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10, 
    width: 200, 
  },
});
