import React,{Component} from 'react';
import {Button,StyleSheet,TextInput,ActivityIndicator,ScrollView,View,Text,StatusBar} from 'react-native';
import firebase from '../database/firebaseDb';
import Header from '../component/LoginComponent/AddComponents/Header';

class AddReservScreen extends Component{
    constructor(){
        super();
        this.dbRef=firebase.firestore().collection('users');
        this.state={
            name:'',
            email:'',
            mobile:'',
            time:'',
            date:'',
            isLoading:false
        };
    }

    inputValueUpdate=(val,props)=>{
        const state=this.state;
        state[props]=val;
        this.setState(state);
    }

    storeRes(){
        if(this.state.name === ''){
            alert('fill at least your name')
        }
        else{
          this.setState({
              isLoading:true,
          });  
        }
        this.dbRef.add({
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            date:this.state.date,
            time:this.state.time
        }).then((res)=>{
            this.setState({
                name:'',
                email:'',
                mobile:'',
                date:'',
                time:'',
                isLoading:false,
            });
            this.props.navigation.navigate('reservation');
        }).catch((err) => {
            console.error("Error Found",err);
            this.setState({
                isLoading: false,
            });
        });
    }
render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#109dc4" />
          <Header />
        <View>
            <Text style={styles.Text}>
                {'BookMyTable'}              
            </Text>
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Name'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              placeholder={'Email'}
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Mobile'}
              value={this.state.mobile}
              onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'date'}
              value={this.state.date}
              onChangeText={(val) => this.inputValueUpdate(val, 'date')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'time'}
              value={this.state.time}
              onChangeText={(val) => this.inputValueUpdate(val, 'time')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Submit'
            onPress={() => this.storeRes()}
            color="#109dc4" 
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text:{
    fontSize:25,
    marginBottom:20,
    marginHorizontal:20,
    fontStyle: 'normal',
    fontWeight:'400'
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    marginHorizontal:20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    marginHorizontal:20,
    marginVertical:20,
    borderRadius:50,
    alignItems:'flex-end',
    justifyContent:'center',
  }
});

export default AddReservScreen;