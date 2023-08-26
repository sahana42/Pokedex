import React from "react";
import { View, Text, SafeAreaView, TextInput, Image, KeyboardAvoidingView, KeyboardAvoidingViewBase, FlatList,TouchableOpacity } from 'react-native';
import styles from "./style";
import { Search } from "react-native-feather";
import SvgUri from "react-native-svg-uri";
import { useNavigation } from '@react-navigation/native'; 

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.rootContainer}>
            <View style={styles.BackgroundContainer}>
                <View style={styles.nameContainer}>

                    <SvgUri
                        width="32"
                        height="32"
                        source={require('../../assets/images/pokeball.svg')}
                    />
                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: '700', fontSize: 24, color: 'white', marginLeft: 16 }}>Pokédex</Text>

                </View>
                <View style={styles.SearchContainer}>
                    <View style={styles.searchBox}>
                        <Search stroke="red" style={{ marginRight: 5 }} />
                        <TextInput style={{ padding: 8, }} placeholder="Search" />
                    </View>
                    <View style={styles.filter}>
                        <SvgUri
                            width="16"
                            height="16"
                            source={require('../../assets/images/tag.svg')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.ForegroundContainer}>
                <View style={styles.row}>
                <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Bulbasaur')}
        >
                        <Text style={styles.number}>#001</Text>
                        <View style={styles.imageContainer}>
                        </View>
                        <View style={styles.nameContainer1}>
                        <Image source={require('../../assets/images/Bulbasaur1.png')} style={styles.image} />
                        <Text style={styles.name}>Bulbasaur</Text>
                        </View>  
                    </TouchableOpacity>
                    <View style={styles.card}>
                    <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Charmander')}
        >
                        <Text style={styles.number}>#004</Text>
                        <View style={styles.imageContainer}>
                        </View>
                        <View style={styles.nameContainer1}>
                        <Image source={require('../../assets/images/Charmander.png')} style={styles.image} />
                        <Text style={styles.name}>Charmander</Text>
                        </View>  
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                    <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Squirtle')}
        >
                        <Text style={styles.number}>#007</Text>
                        <View style={styles.imageContainer}>
                        </View>
                        <View style={styles.nameContainer1}>
                        <Image source={require('../../assets/images/Squirtle.png')} style={styles.image} />
                        <Text style={styles.name}>Squirtle</Text>
                        </View>  
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    
                <View style={styles.card}>
                <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Butterfree')}
        >
                    
                        <Text style={styles.number}>#012</Text>
                        <View style={styles.imageContainer}>
                        </View>
                        <View style={styles.nameContainer1}>
                        <Image source={require('../../assets/images/Butterfree.png')} style={styles.image} />
                        <Text style={styles.name}>Butterfree</Text>
                        </View>  
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                    <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Pikachu')}
        >
                        <Text style={styles.number}>#025</Text>
                        <View style={styles.imageContainer}>
                        </View>
                        <View style={styles.nameContainer1}>
                        <Image source={require('../../assets/images/Pikachu.png')} style={styles.image} />
                        <Text style={styles.name}>Pikachu</Text>
                        </View>  
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                    <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Gastly')}
        >
                        <Text style={styles.number}>#092</Text>
                        <View style={styles.imageContainer}>
                        </View>
                        <View style={styles.nameContainer1}>
                        <Image source={require('../../assets/images/Gastly.png')} style={styles.image} />
                        <Text style={styles.name}>Gastly</Text>
                        </View>  
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                <View style={styles.card}>
                <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Ditto')}
        >
                        <Text style={styles.number}>#132</Text>
                        <View style={styles.imageContainer}>
                        </View>
                        <View style={styles.nameContainer1}>
                        <Image source={require('../../assets/images/Ditto.png')} style={styles.image} />
                        <Text style={styles.name}>Ditto</Text>
                        </View>  
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                    <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Mew')}
        >
                        <Text style={styles.number}>#152</Text>
                        <View style={styles.imageContainer}>
                        </View>
                        <View style={styles.nameContainer1}>
                        <Image source={require('../../assets/images/Mew.png')} style={styles.image} />
                        <Text style={styles.name}>Mew</Text>
                        </View>  
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                    <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Aron')}
        >
                        <Text style={styles.number}>#304</Text>
                        <View style={styles.imageContainer}>
                        </View>
                        <View style={styles.nameContainer1}>
                        <Image source={require('../../assets/images/Aron.png')} style={styles.image} />
                        <Text style={styles.name}>Aron</Text>
                        </View>  
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Home;