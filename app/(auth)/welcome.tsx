import { router } from "expo-router";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import {useRef,useState} from "react";

export default function Welcome(){
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return(
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            <TouchableOpacity onPress={()=>{
                router.replace('/(auth)/sign-up');
            }}
            className="w-full flex justify-end items-end p-5"
            >
                <Text className="text-black text-md font-JakartaBold">Skip</Text>
            </TouchableOpacity>

            <Swiper ref={swiperRef}
                loop={false}
                dot={<View className="w-[32] h-[4px] rounded-full mx-1 bg-[#2E8FO]"/>} 
                activedot={<View className="w-[32] h-[4px] mx-1 bg-[#0286FF] rounded-full"/>}
                onIndexChanged={(index)=>{
                    setActiveIndex(index);
                }}
                />
                [{
                    title, image, description
                }]
            </Swiper>

        </SafeAreaView>
    )
}