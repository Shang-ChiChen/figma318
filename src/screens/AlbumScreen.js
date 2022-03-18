import React from "react";
import { Box, HStack, VStack, Center, ScrollView } from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
const Example = () => {
  return(
    <ScrollView horizontal>
   <HStack space={3} justifyContent="center">
    <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
    <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
    <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
    <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
    <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
    <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
    <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
  </HStack>
  </ScrollView>
  )
};
const AlbumScreen = ({ navigation }) => {
  return (
    <Box>
      <AlbumList 
      list={albumData.albumList}
    navigation={navigation}
    />
    </Box>
  );
};

export default AlbumScreen;


//<AlbumList 
//list={albumData.albumList}
//navigation={navigation}
///>

//<ScrollView >
//<VStack>
//<Example />
//<Example />
//<Example />
//<Example />
//<Example />
//<Example />
//<Example />
//<Example />
//</VStack>
//</ScrollView>