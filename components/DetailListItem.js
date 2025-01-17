import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from '../utility/colors';

const DetailListItem = ({icon,title,subtitle}) => {
  return (  
    <View style={styles.boderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
            {icon && (
                <Icon name={icon} size={24} style={{color:colors.black, marginRight:20}}/>
            )}
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
        </View>
      </View>
    </View>
  )}

export default DetailListItem
DetailListItem.PropTypes ={
    icon:PropTypes.string,
    title:PropTypes.string,
    subtitle:PropTypes.string
}
const styles = StyleSheet.create({
    boderContainer:{
        paddingLeft24
    },
    wrapper:{
        flexDirection:'row',
        paddingTop:16,
        paddingBottom:16,
        marginRight:24,
        borderBottomColor:colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    contentContainer:{
        justifyContent:'center',
        flex:1
    },
    title:{
        color:colors.black,
        fontWeight:'bold',
        fontSize:16
    },
});