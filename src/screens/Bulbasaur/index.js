import React from "react";
import { View, Text, SafeAreaView, TextInput, Image, KeyboardAvoidingView, KeyboardAvoidingViewBase, FlatList,TouchableOpacity } from 'react-native';
import styles from "./style";
import { Search } from "react-native-feather";
import SvgUri from "react-native-svg-uri";
import { useNavigation } from '@react-navigation/native'; 


const Bulbasaur = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.rootContainer}>
            <View style={styles.BackgroundContainer}>

                <View style={styles.nameContainer}>
                <View style={styles.header}>
                <TouchableOpacity
                style={styles.backButton}
                 onPress={() => navigation.goBack()}
                >
                <Image source={require('../../assets/images/arrow_back.png')} style={styles.image1} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Bulbasaur</Text>
                </View>
                <View style={styles.header1}>
                <Text style={styles.header1}>#001</Text>
                </View>
                </View>
                <Image source={require('../../assets/images/pokeball.png')} style={styles.image} />
         
            </View>


            <View style={styles.ForegroundContainer}>
                <View>
                <Image source={require('../../assets/images/Bulbasaur1.png')} style={styles.images} />
                 </View>
                 <View style={styles.bubble}>
                    <Text style={styles.bubble1}>Grass</Text>
                    <Text style={styles.bubble2}>Poison</Text>
                 </View>


                 <View style={styles.about}>
                    <Text style={styles.aboutText}>About</Text>
                 </View>


                 <View style={styles.frame}>
                    <View style={styles.frame1}>
                    <View style={styles.frameText}>
                    <Image source={require('../../assets/images/weight.png')} style={styles.icon} />
                    <Text style={styles.kg}>6,9 kg</Text>
                    </View>
                    <Text style={styles.weight}>Weight</Text>
                    </View>
                    <View style={styles.verticalDivider} />
                    <View style={styles.frame1}>
                    <View style={styles.frameText}>
                    <Image source={require('../../assets/images/straighten.png')} style={styles.icon} />
                    <Text style={styles.kg}>0,7 m</Text>
                    </View>
                    <Text style={styles.weight}>Height</Text>
                    </View>
                    <View style={styles.verticalDivider} />
                    <View style={styles.frame1}>
                    <View style={styles.movesText}>
                    <Text style={styles.moves}>Chlorophyll</Text>
                    <Text style={styles.moves}>Overgrow</Text>
                    </View>
                    <Text style={styles.weight}>Moves</Text>
                    </View>
                 </View>

                 <View style={styles.content}>
                 <Text style={styles.contentText}>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</Text>
                 </View>


            </View>
        </View>
    );
}
export default Bulbasaur;