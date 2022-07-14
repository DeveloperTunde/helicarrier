import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import Index from './src/screens/Index'
import { Client } from './src/api/ApolloClient';



const App = () => {

  return (
       <Index />
      // <Updatequery/>
  );
};




export default function Appwired(){
  return(
    <ApolloProvider client={Client}>
      <App />
    </ApolloProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});