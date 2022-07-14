import {StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { Colors } from '../constants/Colors';
const {width, height} = Dimensions.get('window');
const STATUSBAR_HEIGHT = StatusBar.currentHeight;


export default  styles = StyleSheet.create({
    container:{
       width: '100%',
       height,
       backgroundColor: '#f6f7f8'
    },
    wrapper:{
         
    },
    header_wrapper:{
        width: '100%',
        paddingTop: 20,
    },
    searchbar: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        
    },
    searchbar_input:{
        paddingVertical: Platform.OS == 'ios' ? 16: 12,
        fontSize: 16,
        borderRadius:10,
        color: Colors.black,
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
        fontWeight:  '400',
        paddingLeft: 50,
    },
    inputIcon:{
      marginTop: 0,
    },
    filter_component:{
       width: '100%',
       paddingHorizontal: 15,
       flexDirection: 'row',
       marginTop: 20,
       paddingBottom: 20,
        height: 70,
    },
    filter:{
        marginRight: 15,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        backgroundColor: Colors.neutralgray,
        height: 40,
    },
    filter_text:{
        color: '#fff',
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
        fontWeight:  '400',
        fontSize: 16,
    },
    body_container:{
       
    },
    body_wrapper:{
        width: '100%',
        paddingHorizontal: 15,
    },
    content_box:{
        width: '100%',
        marginBottom: 20,
    },
    content_title:{
        color: Colors.black,
        fontSize: 19,
        lineHeight: 27,
        fontWeight: '500',
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
        marginLeft: 10,
        marginBottom: 15,
        marginTop: 10,
    },
    trans_box_edit:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomColor: '#F3F4F6',
        borderBottomWidth: 1,
        paddingBottom: 5,
      },
      trans_box_edit_left:{
        paddingVertical: 13,
        paddingHorizontal: 13,
        backgroundColor: Colors.button,
        borderRadius: 50,
        overflow: 'hidden',
        
      },
      
      trans_box_edit_left_img:{
        width: '100%',
        height: 25,
      },
      trans_box_edit_right:{
        marginLeft: 15,
        width:'86%'
      },
      trans_box_edit_right_a:{
        color: Colors.black,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500',
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
      },
      trans_box_edit_right_b:{
        color: Colors.gray,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
      },
    trans_box_edit_left_img:{
        width: '100%',
        height: 25,
      },
      trans_box_edit_right:{
        paddingLeft: 15,
        width:'86%'
      },
      trans_box_edit_right_a:{
        color: Colors.black,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500',
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
      },
      trans_box_edit_right_b:{
        color: Colors.gray,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',

      },
      trans_box_right_up:{
       width:'100%',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       paddingRight: 0,
      },
      trans_box_right_down:{
        width:'100%',
        flexDirection: 'row',
         justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 0,
        marginTop: 5,
      },
      

})