import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {fetchRamdomContact} from'../../utility/api';
import ContactThumbnail from '../../components/ContactThumbnail';
import DetailListItem from '../../components/DetailListItem';
import colors from '../../utility/colors';
const Profile = ({route}) => {
    // const[contact, setContact] = useState([]);
    // useEffect(()=>{
    //     fetchRamdomContact().then(
    //         contact => setContact(contact)
    //     )
    // },[]);
    const {contact} =route.params;
    const {avatar, name,email,phone,cell}=contact;
  return (
    <View style={styles.container}>
        <View style={styles.avatarSection}>
            <ContactThumbnail avatar={avatar} name={name} phone={phone}/>
        </View>
        <View style={styles.detailsSection}>
            <DetailListItem icon="email" title="Email"  subtitle={email}/>
            <DetailListItem icon="phone" title="work" subtitle={phone}/>
            <DetailListItem icon="smartphone" title="Personal" subtitle={cell}/>
        </View>
    </View>
  );
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    avatarSection:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.blue,
    },
    detailsSection:{
        flex:1,
        backgroundColor:'white',
    },
});