 
 
// // // // //********************** Assignment 03********************************
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
// import {
//   FiTrash2,
//   FiMinusCircle,
//   FiPlusCircle,
//   FiRefreshCcw,
//   FiEdit,
//   FiArrowUp,
//   FiDatabase,
//   FiArrowDown,
// } from "react-icons/fi";
//import Icon from 'react-native-vector-icons/FontAwesome';
// import {todoItems} from "/constants/cart";

export default function App() {
  const [getInputText, setInputText] = useState("");
  const [getList, setList] = useState(todoItems);
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState("");

  const addItem = () => {
    console.log(getInputText);
    setList([
      ...getList,
      { key: Math.random().toString(), data: getInputText },
    ]);
    setInputText("");
  };



  const removeItem = (itemKey) => {
	  console.log("from delelte handler")
    var list = getList.filter((item) => item.key != itemKey);
    setList(list);
  };

  const deleteAllHandler = () => {
    setList([]);
  };

  const editItemHandler = (itemKey) => {
    console.log(itemKey);

    setEditItem(itemKey);
    setIsEditing(true);
  };

  const onEditClick = (editItem) => {
    console.log(editItem, " from editbtn");
    const newArr = getList.map((p, index) => {
      if (p.data == editItem) {
        p.data = getInputText;
      }
      return p;
    });
    console.log(newArr);
    setList(newArr);
  };
 

  const scrollView = (
    <ScrollView style={styles.scrollview}>
      {getList.map((item, index) => (
		  <>
        <TouchableOpacity
          key={item.key}
          activeOpacity={0.7}
          // onPress= {() => removeItem(item.key)}
		 onPress={() => editItemHandler(item.data)} 
        
        >
          <View style={styles.scrollItem}   >
            <Text style={styles.scrollviewText}  	 > {item.data}
			</Text>
			{/* ********************************************* */}
		

      <Button style={styles.Button} title="Delete" onPress={() =>
	   removeItem(item.key)} />
			{/* <View

      
        style={{backgroundColor: "#7e7e7e", borderRadius: 30, 
		padding: 7}}
		 
       onPress={() => removeItem(item.key)}>

       
              <Text style={styles.removeText}> </Text>
            </View> */}
            
{/* ********************************************* */}
          </View>
		
		  
		  {/* <View
            style={styles.scrollItem}
          >
            <Text style={styles.scrollviewText}>{index + 1} : 
			{item.data}</Text>
            <View style={{backgroundColor: "#7e7e7e", borderRadius:
			 30, padding: 7}}>
              <Text style={styles.removeText}> </Text>
            </View>
          </View> */}




        </TouchableOpacity>
	
			</>
      ))}

      <Button title="DELETE ALL" onPress={deleteAllHandler} />
    </ScrollView>
  );

  const emptyScrollView = (
    <View>
      <Text
        style={{
          fontWeight: "bolder",
          marginTop: "40px",
          color: "white",
          fontSize: 25,
        }}
      >
        No Product(s)
      </Text>
    </View>
  );

  return (
    <View style={styles.sectionContainer}>
      <View
        style={{
          flexDirection: "row",
          margin: 5,
          width: "95%",
          height: "10%",
          //  backgroundColor: "white",
          borderRadius: 1,
          marginTop: "25px",
          marginBottom: "-30px",
          border: "2px solid white",
        }}
      >
        <Text
          style={{
            fontWeight: "bolder",
            fontSize: 29,
            color: "white",
            marginLeft: 80,
            margin: 15,
            fontFamily: "times",
          }}
        >
          Shopping Cart
        </Text>
      </View>
      <View style={styles.inputContainer}>
        {isEditing ? (
          <TextInput
            style={styles.textInput}
            placeholder={`edit item: ${editItem}`}
            onChangeText={(text) => setInputText(text)}
            value={getInputText}
          />
        ) : (
          <TextInput
            style={styles.textInput}
            placeholder="Enter Item(s)"
            onChangeText={(text) => setInputText(text)}
            value={getInputText}
          />
        )}

        <br></br>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={isEditing ? 
		  onEditClick.bind(this, editItem) : addItem}
          // onPress={isEditing ? onEditClick : addItem}
          disabled={getInputText.length <= 0}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 10,
              marginTop: 140,
              marginRight: 110,
              borderRadius: 10,
              paddingHorizontal: 25,
              marginBottom: "27px",
            }}
          >
            {isEditing ? (
              <Text
                style={{
                  color: "black",
                  fontWeight: "bolder",
                  fontSize: 20,
                }}
              >
                {" "}
                Edit{" "}
              </Text>
            ) : (
              <Text
                style={{
                  color: "black",
                  fontWeight: "bolder",
                  fontSize: 20,
                }}
              >
                {" "}
                Add{" "}
              </Text>
            )}
          </View>
        </TouchableOpacity>

        {/*<Button
         width= "70%"
         title="Add"
         onPress={addItem}
         disabled={getInputText.length <= 0}
         /> */}
      </View>
      {getList.length <= 0 ? emptyScrollView : scrollView}
    </View>
  );
}

const todoItems = [
  { key: Math.random().toString(), data: "Product 1" },
  { key: Math.random().toString(), data: "Product 2" },
  { key: Math.random().toString(), data: "Product 3" },
  { key: Math.random().toString(), data: "Product 4" },
];

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: "#333d52",
    //  "#035c87",
    alignItems: "center",
    paddingTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    paddingTop: 10,
    alignItems: "center",
  },
  textInput: {
    // borderColor: "#008080",
    borderColor: "white",
    width: "80%",
    color: "white",
    placeholderTextColor: "white",
    fontWeight: "bolder",
    fontSize: 22,
    borderBottomWidth: 3,
    marginLeft: 20,
    marginRight: -190,
    textAlign: "center",
  },
  scrollItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: '#008080',
    backgroundColor: "white",
    width: "80%",
    padding: 7.5,
    margin: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  scrollviewText: {
    fontWeight: "bolder",
    fontSize: 25,
    color: "black",
   fontFamily: "Apple Color Emoji"
  },
  scrollview: {
    width: "100%",
  },
  removeText: {
    fontSize: 20,
    color: "white",
  },
  Button: {
    backgroundColor: "red",
    color:"red"
  }
});









 









 
 



 