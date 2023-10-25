import { View, Text, Image,TouchableOpacity ,ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native';
import { Font } from '../Fontt';
import { localimage } from '../Images/Image';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

const Viewstore = (props) => {

    const{ravi,imageSource,source} = props.route.params
    const[img,setImg]=useState('')
    useEffect(()=>{
        
        console.warn('output',ravi)
        console.log(imageSource)
    },[])
    return (
        <View>
            <ImageBackground 
            source={{uri:imageSource}}
            style={{
                
                width:mobileW*100/100,
                height:mobileH*100/100
            }}>
            <View style={{
                width: mobileW * 98 / 100,
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: mobileH * 2 / 100
            }}>
                <TouchableOpacity 
                activeOpacity={0.7}
                onPress={()=>props.navigation.goBack("")}
                >

                <Image source={localimage.back}
                    resizeMode='contain'
                    style={{
                        width: mobileW * 7 / 100,
                        height: mobileW * 7 / 100,
                        tintColor:'black'
                    }}
                />
                </TouchableOpacity>

                <Image
                    source={localimage.male2}
                    resizeMode='contain'
                    style={{
                        width: mobileW * 17 / 100,
                        height: mobileW * 17 / 100,
                        borderRadius: mobileW * 50 / 100,
                        marginRight: mobileW * 3 / 100,
                        borderWidth: mobileW * 0.3 / 100,
                        borderColor: 'red',
                        marginLeft: mobileW * 2 / 100
                    }}
                />

                <Text style={{
                    marginLeft: mobileW * 2 / 100,
                    fontFamily: Font.FontBold, color: 'black', fontSize: mobileW * 5 / 100
                }}>Description</Text>
            </View>
            </ImageBackground>
        </View>
    )
}

export default Viewstore