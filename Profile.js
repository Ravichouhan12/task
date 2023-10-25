import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker'
import { Font } from '../Fontt';
import { localimage } from '../Images/Image';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

const Profile = (props) => {
    const [imageSource, setImageSource] = useState(null);
    const [data, setData] = useState([
        {
            image: localimage.male,
            id: "1",
            name: 'ravi'
        },
        {
            image: localimage.male2,
            id: "2",
            name: 'veer'
        },
        {
            image: localimage.male3,
            id: "3",
            name: 'suraj'
        },
        {
            image: localimage.male4,
            id: "4",
            name: 'deepak'
        },
        {
            image: localimage.male5,
            id: "5",
            name: 'anup'
        },
        {
            image: localimage.male6,
            id: "6",
            name: 'shivaji'
        },
    ])

    const selectImage = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                // You can display the image using either the base64 data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                // Or you can display it using the image URI:
                const source = { uri: response.assets[0].uri };
                
                setImageSource(source);
            }
        });
    };
    var ravi = "this the "
    const call = () => {
        selectImage()
        setTimeout(() => {
            props.navigation.navigate("Viewstore",{imageSource:imageSource})
        }, 20);
    }

    return (
        <View>
            <View style={{
                width: mobileW * 95 / 100,
                alignSelf: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontFamily: Font.FontBold,
                    fontSize: mobileW * 5 / 100
                }}>Profile</Text>
            </View>
            <View style={{
                marginTop: mobileH * 2 / 100
            }}>
                <FlatList
                    data={data}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    // onPress={() => props.navigation.navigate("Viewstore")}
                                    onPress={() => call()}
                                >
                                    <Image
                                        resizeMode='contain'
                                        style={{
                                            width: mobileW * 17 / 100,
                                            height: mobileW * 17 / 100,
                                            borderRadius: mobileW * 50 / 100,
                                            marginRight: mobileW * 3 / 100,
                                            borderWidth: mobileW * 0.3 / 100,
                                            borderColor: 'red'
                                        }}
                                        source={imageSource} />
                                </TouchableOpacity>


                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Profile