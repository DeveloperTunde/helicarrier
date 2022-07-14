import React, { Component, useState , useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';
import style from '../styles/style';
import Header from '../components/Header'
import { Icon } from 'react-native-elements';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, useLazyQuery} from '@apollo/client';
import { GET_LOCATIONS } from '../api/Index';




const MyComponent = () => {

    const { loading, error, data } = useQuery(GET_LOCATIONS);

    // const { data: cachedData } = useQuery(GET_LOCATIONS, { fetchPolicy: 'cache-only' });
    // const [executeMyQuery, { data: queryData, loading, error }] = useLazyQuery(GET_LOCATIONS, {
    // fetchPolicy: 'network-only'
    // });
    // const data = queryData || cachedData;

    const [transactions, setTransactions] = useState([]);
     

        function findFilterNames(a) {
            // const { data } = {
            //     "data": [
            //               {
            //                 "date": "01-07-2022",
            //                 "title": "Gloceries and Clothing",
            //                 "type": "debit",
            //                 "status": "success"
            //               },
            //               {
            //                 "date": "01-07-2022",
            //                 "title": "Payment for brand new car",
            //                 "type": "debit",
            //                 "status": "success"
            //               }
            //     ]
            //   };

    //         "transactions": [
    //       {
    //         "date": "01-07-2022",
    //         "title": "Gloceries and Clothing",
    //         "type": "debit",
    //         "status": "success"
    //       },
    //       {
    //         "date": "01-07-2022",
    //         "title": "Payment for brand new car",
    //         "type": "debit",
    //         "status": "success"
    //       }
    //     ]
    
              
              const keyword = "P";
              
              const filtered = data.dates.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));
              
              console.log(filtered);
        }

      
      


    function handleFilter(a){
        //setTransactions(transactions?.dates.filter(match => match.a == 'debit'))
       setTransactions(data.dates.filter(match => match.transactions.find(player => player.type == a)))
     
       
       //console.log(data.dates.filter(match => match.transactions.find(player => Object.values(player.type === 'debit'))))

      // console.log('thw transacion', data.dates.filter((product) => product.transactions.type = product.transactions.filter( (x) => x.type == 'debit')))
     //  setTransactions(data.dates.filter((product) => product.transactions.type = product.transactions.filter( (x) => x.type == 'credit')))
    }

    function handleFilterStatus(a){
       setTransactions(data.dates.filter(match => match.transactions.find(player => player.status == a)))

    }
    return (
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Header />
                <ScrollView  style={style.filter_component} horizontal={true}>
                   

                    <Pressable style={style.filter} onPress={() => handleFilter('credit') }>
                        <Text style={style.filter_text}>Credit</Text>
                    </Pressable>

                    <Pressable style={style.filter} onPress={() => handleFilter('debit') } >
                        <Text style={style.filter_text}>Debit</Text>
                    </Pressable>

                    <Pressable style={style.filter} onPress={() => handleFilterStatus('success') }>
                        <Text style={style.filter_text}>Success</Text>
                    </Pressable>

                    <Pressable style={style.filter} onPress={() => handleFilterStatus('failed') }>
                        <Text style={style.filter_text}>Failed</Text>
                    </Pressable>
                </ScrollView>
                {/* <Text style={style.content_title}> trans{JSON.stringify( transactions)}</Text> */}
                <ScrollView style={style.body_container}>
                  <View style={style.body_wrapper}>
                {
                    transactions?.map((trans, id)=>{
                        return(
                            <View style={style.content_box} key={id}>
                            {/* {
                                content.transactions
                                .map((first)=> {
                                    return(
                                        (first.id == '1')?
                                        <Text style={style.content_title}>{first.date}</Text>
                                        : null
                                    )
                                })
                            } */}
                            
                            {
                               // <Text style={style.content_title}>{content.transactions[0]?.date} {JSON.stringify(content.transactions)}</Text>
                              // <Text style={style.content_title}>{JSON.stringify(data.dates)}</Text>
                            }
                            
                            {
                                
                                trans.transactions.map((transaction) => {
                                    return(
                                        <Pressable style={style.trans_box_edit} >
                                        <View style={[style.trans_box_edit_left, {backgroundColor: '#E6E9EB'}]}>
                                        {/* <Image source={{uri:gateway.image}} style={styles.} resizeMode='contain'/> */}
                                            <Icon
                                            name={(transaction.type =='debit')?'arrowup':'arrowdown'}
                                            type='antdesign'
                                            color='#6F7378'
                                            size={16}
                                            onPress={() => handleSearch()}
                                            style={style.trans_box_left_img}
                                        />
                                        </View>
                                        <View style={style.trans_box_edit_right}>
                                            <View style={style.trans_box_right_up}>
                                                <Text style={style.trans_box_edit_right_a}>{transaction.title}</Text>
                                                <Text style={[style.trans_box_edit_right_b, {fontSize: 9}]}>{transaction.date}</Text>
                                            </View>
                                            <View style={style.trans_box_right_down}>
                                                <Text style={style.trans_box_edit_right_b}>{transaction.type}</Text>
                                                <Text style={style.trans_box_edit_right_b}>{transaction.status} </Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                    )
                                })
                            }
                           
                          </View>
                        )
                    })
                    
                }
                {/* <Text style={style.content_title}>{JSON.stringify((transactions.length > 1)? transactions:data)}</Text> */}

                </View>
                </ScrollView>

                {
                    transactions?.length < 1?
                    <ScrollView style={style.body_container}>
                    <View style={style.body_wrapper}>
                    {/* <Text style={style.content_title}>{JSON.stringify(data?.dates)}</Text> */}
                    {
                        // (transactions.length > 1)?transactions:
                    data?.dates.map((content, id) => {
                        return(
                          <View style={style.content_box} key={id}>

                        {
                            content.transactions.map((transaction) => {
                                return(
                                    <Pressable style={style.trans_box_edit} >
                                    <View style={[style.trans_box_edit_left, {backgroundColor: '#E6E9EB'}]}>
                                    {/* <Image source={{uri:gateway.image}} style={styles.} resizeMode='contain'/> */}
                                        <Icon
                                        name='arrowup'
                                        type='antdesign'
                                        color='#6F7378'
                                        size={16}
                                        onPress={() => handleSearch()}
                                        style={style.trans_box_left_img}
                                    />
                                    </View>
                                    <View style={style.trans_box_edit_right}>
                                        <View style={style.trans_box_right_up}>
                                            <Text style={style.trans_box_edit_right_a}>{transaction.title}</Text>
                                            
                                        </View>
                                        <View style={style.trans_box_right_down}>
                                            <Text style={style.trans_box_edit_right_b}></Text>
                                            <Text style={style.trans_box_edit_right_b}>{transaction.status} ~ {transaction.type}</Text>
                                        </View>
                                    </View>
                                </Pressable>
                                )
                            })
                        }
                    
                    </View>
                        )
                    })
                    
                    }
                    </View>
                    </ScrollView>:null
                }
            </View>
        </SafeAreaView>



    );
};





export default MyComponent;
