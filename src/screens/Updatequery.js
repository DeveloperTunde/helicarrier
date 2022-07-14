import React from 'react'

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { TextInput, TextInputBase, Text, View, Pressable } from 'react-native';


const GET_ALBUMS = gql`
query Transact($title: String)  {
    dates  {
      transactions (title: $title){
        title
        id
        date
        status
        type
      }
    }
  }
`;

function useAlbumFilters() {

   // alert('yes')
  const [filters, _updateFilter] = useState({ 
    id: undefined, 
    title: undefined 
  });

  const updateFilter = (filterType, value) => {
    _updateFilter({
      [filterType]: value,
    });
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
}

function Updatequery() {
  const { operations, models } = useAlbumFilters();

  const { data, loading, error, refetch } = useQuery(GET_ALBUMS);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{JSON.stringify(error)}</Text>;

  return (
      <View style={{width: '100%', marginTop: 100, }}>
          <View>
            <Text style={{width:'100%', color: '#222'}}>Search</Text>
            <TextInput
                onChange={(e) => operations.updateFilter("title", e.target.value)}
                style={{width:'100%'}}
            />
            </View>
            <Pressable onPress={() =>
    refetch({
      albumsInput: { title: models.filters.title },
    })
  }>
                <Text>Submit</Text>
            </Pressable>

      </View>
  );
}

export default Updatequery;