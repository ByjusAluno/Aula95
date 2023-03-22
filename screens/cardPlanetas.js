import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import {RFValue} from "react-native-responsive-fontsize";

class CardPlanetas extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.container}
                    onPress={() =>
                    this.props.navigation.navigate("Planetas",{
                        story:this.props.story
                    })}
                    >
                     <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {this.props.story.planeta}
              </Text>
              <Text style={styles.storyAuthorText}>
                {this.props.story.descricao}
              </Text>
              <Text style={styles.descriptionText}>
                {this.props.story.sobre}
              </Text>
            </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CardPlanetas;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: 13,
      backgroundColor: "#2f345d",
      borderRadius: 20
    },
    storyImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: 250
    },
    titleContainer: {
      paddingLeft: 20,
      justifyContent: "center"
    },
    storyTitleText: {
      fontSize: 25,
      color: "white"
    },
    storyAuthorText: {
      fontSize: 18,
      color: "white"
    },
    descriptionText: {
      fontSize: 13,
      color: "white",
      paddingTop: 10
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: 10
    },
    likeButton: {
      width: 160,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: 30
    },
    likeText: {
      color: "white",
      fontSize: 25,
      marginLeft: 5
    }
  });
  