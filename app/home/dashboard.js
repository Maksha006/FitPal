import * as React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Link, Redirect, Stack,Tabs, useRouter } from "expo-router";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Page() {
  
  //const router = useRouter();

  return (
    <View style={styles.iphoneSe1}>
      <View style={[styles.targetrectangle, styles.frame1Position]}>
        <Image
          style={[styles.dotOneIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/dot-one.png")}
        />
        <View style={styles.frame}>
          <Text style={[styles.todayTarget, styles.todayTargetFlexBox]}>
            Today target
          </Text>
          <Image
            style={[styles.dotThreeIcon, styles.dotIconLayout]}
            contentFit="cover"
            source={require("../assets/dot-one.png")}
          />
          <Image
            style={[styles.dotTwoIcon, styles.dotIconLayout]}
            contentFit="cover"
            source={require("../assets/dot-one.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.task3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/task-3.png")}
      />
      <Image
        style={styles.task2Icon}
        contentFit="cover"
        source={require("../assets/task-2.png")}
      />
      <Image
        style={[styles.task1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/task-1.png")}
      />
      <Pressable style={styles.waterintake}>
        <Text style={[styles.waterintake1, styles.waterintake1Typo]}>
          Water intake
        </Text>
        <View style={[styles.waterintakeChild, styles.waterintakePosition]} />
        <View style={[styles.waterintakeItem, styles.waterintakePosition]} />
        <Text style={[styles.waterintake2, styles.waterintakeTypo]}>
          4 Liters
        </Text>
      </Pressable>
      <Text style={[styles.todayTarget1, styles.waterintake1Typo]}>
        Activity status
      </Text>
      <View style={[styles.frame1, styles.frame1Position]}>
        <Text style={[styles.hiYour, styles.hiYourPosition]}>
          Hi , your name
        </Text>
        <Text style={[styles.hiYour, styles.hiYourPosition]}>
          Hi , your name
        </Text>
        <Text style={[styles.sat14Oct, styles.hiYourPosition]}>{`Sat 14 OCT
`}</Text>
        <Image
          style={styles.profilecircleIcon}
          contentFit="cover"
          source={require("../assets/profilecircle.png")}
        />
        <Image
          style={[styles.weatherIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/weather.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame1Position: {
    width: 272,
    left: 24,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  todayTargetFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  dotIconLayout: {
    bottom: "31.43%",
    top: "47.62%",
    width: "1.89%",
    height: "20.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 18,
    width: 267,
    left: 24,
    position: "absolute",
  },
  waterintake1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  waterintakePosition: {
    width: 23,
    left: 15,
    position: "absolute",
  },
  waterintakeTypo: {
    fontSize: FontSize.size_3xs,
    left: 45,
  },
  hiYourPosition: {
    color: Color.colorGray,
    textAlign: "left",
    left: 0,
    height: 21,
    position: "absolute",
  },
  dotOneIcon: {
    height: "12.94%",
    width: "1.62%",
    top: "50%",
    right: "5.37%",
    bottom: "37.06%",
    left: "93.01%",
  },
  todayTarget: {
    fontSize: 14,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    left: 0,
    textAlign: "left",
    top: 0,
  },
  dotThreeIcon: {
    right: "6%",
    left: "92.12%",
  },
  dotTwoIcon: {
    right: "0%",
    left: "98.11%",
  },
  frame: {
    top: 7,
    left: 10,
    width: 233,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  targetrectangle: {
    top: 118,
    backgroundColor: "rgba(236, 180, 94, 0.4)",
    height: 34,
    borderRadius: Border.br_base,
  },
  task3Icon: {
    top: 209,
  },
  task2Icon: {
    top: 254,
    height: 19,
    width: 267,
    left: 24,
    position: "absolute",
  },
  task1Icon: {
    top: 166,
    borderRadius: Border.br_base,
  },
  waterintake1: {
    fontSize: FontSize.size_3xs,
    left: 45,
    top: 9,
  },
  waterintakeChild: {
    borderRadius: 14,
    backgroundColor: "#f3f3f3",
    height: 158,
    top: 9,
  },
  waterintakeItem: {
    top: 92,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: "#53c7f0",
    height: 75,
  },
  waterintake2: {
    top: 31,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#5893d4",
    textAlign: "left",
    position: "absolute",
  },
  waterintake: {
    top: 332,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    width: 122,
    height: 182,
    left: 24,
    position: "absolute",
  },
  todayTarget1: {
    top: 300,
    fontSize: 12,
    left: 24,
  },
  hiYour: {
    top: 38,
    fontSize: FontSize.yourName_size,
    fontFamily: FontFamily.yourName,
    width: 159,
    fontWeight: "700",
    color: Color.colorGray,
  },
  sat14Oct: {
    top: 17,
    fontSize: 13,
    fontFamily: FontFamily.interRegular,
    width: 131,
  },
  profilecircleIcon: {
    left: 214,
    width: 58,
    height: 57,
    top: 0,
    position: "absolute",
  },
  weatherIcon: {
    height: "28.81%",
    width: "5.51%",
    top: "28.81%",
    right: "68.01%",
    bottom: "42.37%",
    left: "26.47%",
  },
  frame1: {
    top: 24,
    height: 59,
    overflow: "hidden",
  },
  iphoneSe1: {
    borderRadius: 40,
    backgroundColor: "#f6f6f6",
    flex: 1,
    width: "100%",
    height: 568,
    overflow: "hidden",
  },
});
